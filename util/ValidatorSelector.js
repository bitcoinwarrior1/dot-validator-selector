const commissionDecimals = 1e7;

class ValidatorSelector {

    /*
    * @param api - the initialised @polkadot/api instance
    * @param maxCommission - the maximum commission a nominator is willing to accept from a validator, defaults to 20%
    * @param minCommission - the minimum commission a nominator is willing to accept from a validator, defaults to 0.5%
    * @param minStaking - the min amount of DOT that the validator must have staked for 'skin in the game', defaults to 1000 DOT
    * @param era - the era to use, defaults to 0 but set to current era in getValidators if not overridden in constructor
    * @param humanReadable - parse the identity into human readable text else keep it in raw hex
    * */
    constructor(
        api,
        maxCommission = 20 * commissionDecimals,
        minCommission = 0.5 * commissionDecimals,
        minStaking = 1000,
        era = 0,
        humanReadable = true
    ) {
        this.api = api;
        this.maxCommission = maxCommission;
        this.minCommission = minCommission;
        this.minStaking = minStaking * `1e+${api.registry.chainDecimals[0]}`;
        this.era = era;
        this.maxNominators = 256; // await this.api.consts.staking.maxNominatorRewardedPerValidator;
        this.humanReadable = humanReadable;
    }

    /*
    * @dev set the era to the current one if set to 0
    * */
    async setEraToCurrentIfZero() {
        if(this.era === 0) {
            const activeEra = await this.api.query.staking.activeEra();
            this.era = JSON.parse(activeEra).index;
        }
    }

    /*
    * @dev return validators that meet the criteria as set in the README
    * @param amount - the max amount of validators to return e.g. 12 for DOT
    * @returns an array of objects containing validator info that meets this criteria
    * */
    async getValidators(amount) {
        await this.setEraToCurrentIfZero();
        const validatorDisplays = {}; // used to prevent adding in validators run by the same entity
        const validatorsMeetingCriteria = [];
        const validators = ValidatorSelector.shuffleArray((await this.api.query.session.validators()));
        for(const validator of validators) {
            if(validatorsMeetingCriteria.length === amount) {
                return validatorsMeetingCriteria;
            }
            const identity = await this.api.query.identity.identityOf(validator);
            if(!identity.isEmpty) {
                const { info } = JSON.parse(identity);
                if(validatorDisplays[info.display.raw] !== true) {
                    const exposure = await this.api.query.staking.erasStakers(this.era, validator);
                    const commission = (await this.api.query.staking.validators(validator)).commission.toNumber();
                    const meetsCriteria = await this.getMeetsCriteria(validator, exposure, commission);
                    if(meetsCriteria) {
                        validatorsMeetingCriteria.push({
                            accountId: validator.toString(),
                            identity: this.humanReadable ? ValidatorSelector.convertIdentityToReadableFormat(info) : info,
                            staked: exposure?.own.toNumber(),
                            commission: commission === 0 ? "0%" : `${commission / commissionDecimals}%`
                        });
                        validatorDisplays[info.display.raw] = true;
                    }
                }
            }
        }

        return validatorsMeetingCriteria;
    };


    /*
      * @dev helper to resolve the identity fields
      * @param id - the identity object
      * @returns the parsed identity object from hex string bytes to utf8
    * */
    static convertIdentityToReadableFormat(id) {
        const { display, legal, web, riot, email, pgpFingerprint, image, twitter } = id;

        return {
            display: ValidatorSelector.hexToUtf8(display?.raw),
            legal: ValidatorSelector.hexToUtf8(legal?.raw),
            web: ValidatorSelector.hexToUtf8(web?.raw),
            riot: ValidatorSelector.hexToUtf8(riot?.raw),
            email: ValidatorSelector.hexToUtf8(email?.raw),
            pgpFingerprint: ValidatorSelector.hexToUtf8(pgpFingerprint?.raw),
            image: ValidatorSelector.hexToUtf8(image?.raw),
            twitter: ValidatorSelector.hexToUtf8(twitter?.raw)
        }
    }

    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    // used to randomise the validators returned from the node for fairness and dynamism
    static shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    /*
      * @dev helper to convert from hex string bytes to utf8
      * @param s - hex string of bytes
      * @returns utf8 encoded string
    * */
    static hexToUtf8(s) {
        try {
            return decodeURIComponent(
                s.replace(/\s+/g, '') // remove spaces
                    .replace(/[0-9a-f]{2}/g, '%$&') // add '%' before each 2 characters
                    .replace("0x", "") // remove 0x prefix
            );
        } catch {
            return "";
        }

    }

    /*
   * @dev check if a validator meets the criteria (except for uniqueness)
   * @param accountId - the validators account id
   * @param exposure - the validators exposure to staking
   * @param commission - the commission the validator charges to nominators
   * @returns boolean, true if meets criteria else false
   * */
    async getMeetsCriteria(accountId, exposure, commission) {
        const staked = exposure?.own;
        const nominatorCount = exposure?.others.length;
        if(staked < this.minStaking) return false;
        if(commission > this.maxCommission || commission < this.minCommission) return false;
        if(nominatorCount >= this.maxNominators) return false; // oversubscribed
        const hasBeenSlashed = await this.getHasBeenSlashed(accountId);

        return !hasBeenSlashed;
    }

    /*
    * @dev check if a validator meets the criteria by account id only, useful for checking a single validator
    * @param accountId - the validators account id
    * @returns boolean, true if meets criteria else false
    * */
    async getMeetsCriteriaByAccountId(accountId) {
        const exposure = await this.api.query.staking.erasStakers(this.era, accountId);
        const commission = (await this.api.query.staking.validators(accountId)).commission.toNumber();

        return this.getMeetsCriteria(accountId, exposure, commission);
    }

    /*
    * @dev check if the user's validators meet the criteria set
    * @param accountId - the validators account id
    * @returns Object containing the validators address and a boolean representing whether they meet the criteria or not
    * */
    async getUserValidatorsMeetCriteria(accountId) {
        const userSelectedValidators = await this.api.query.staking.nominators(accountId);
        const targets = JSON.parse(userSelectedValidators).targets;
        const validators = [];
        for(let id of targets) {
            validators.push({ accountId: id, match: await this.getMeetsCriteriaByAccountId(id) });
        }

        return validators;
    }

    /*
    * @dev check if a validator has been slashed before
    * @param accountId - the identifier for the validator
    * @param era - the epoch to check for slashing
    * @returns boolean - true if has been slashed else false
    * */
    async getHasBeenSlashed(accountId) {
        const slashes = await this.api.query.staking.slashingSpans(accountId);
        if(slashes.isEmpty) return false;

        return JSON.parse(slashes).lastNonzeroSlash !== 0;
    }

}

module.exports = ValidatorSelector;