const decimals = 1e7;

class ValidatorSelector {

    /*
    * @param maxCommission - the maximum commission a nominator is willing to accept from a validator, defaults to 20%
    * @param minStaking - the min amount of DOT that the validator must have staked for 'skin in the game', defaults to 1000 DOT
    * @param api - the initialised @polkadot/api instance
    * @param era - the era to use, defaults to 0 but set to current era in getValidators if not overridden in constructor
    * */
    constructor(
        api,
        maxCommission = 20 * decimals,
        minStaking = 1000 * decimals,
        era = 0
    ) {
        this.api = api;
        this.maxCommission = maxCommission;
        this.minStaking = minStaking;
        this.era = era;
    }

    /*
    * @dev set the era to the current one if not set in constructor to a non zero value
    * */
    async setEraToCurrentIfZero() {
        if(this.era !== 0) {
            this.era = JSON.parse(await this.api.query.staking.activeEra()).index;
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
        const validators = this.shuffleArray((await this.api.query.session.validators()));
        for(const validator of validators) {
            if(validatorsMeetingCriteria.length === amount) {
                return validatorsMeetingCriteria;
            }
            const identity = await this.api.query.identity.identityOf(validator);
            if(!identity.isEmpty) {
                const { info, deposit } = JSON.parse(identity);
                const commission = (await this.api.query.staking.validators(validator)).commission.toNumber();
                if(validatorDisplays[info.display.raw] !== true) {
                    const meetsCriteria = await this.getMeetsCriteria(validator, deposit, commission);
                    if(meetsCriteria) {
                        validatorsMeetingCriteria.push({
                            accountId: validator.toString(),
                            identity: info,
                            staked: deposit,
                            commission: commission === 0 ? "0%" : `${commission / decimals}%`
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
    convertIdentityToReadableFormat(id) {
        const { display, legal, web, riot, email, pgpFingerprint, image, twitter } = id;

        return {
            display: this.hexToUtf8(display.raw),
            legal: this.hexToUtf8(legal.raw),
            web: this.hexToUtf8(web.raw),
            riot: this.hexToUtf8(riot.raw),
            email: this.hexToUtf8(email.raw),
            pgpFingerprint: this.hexToUtf8(pgpFingerprint.raw),
            image: this.hexToUtf8(image.raw),
            twitter: this.hexToUtf8(twitter.raw)
        }
    }

    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    // used to randomise the validators returned from the node for fairness and dynamism
    shuffleArray(array) {
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
    hexToUtf8(s) {
        try {
            return decodeURIComponent(
                s.replace(/\s+/g, '') // remove spaces
                    .replace(/[0-9a-f]{2}/g, '%$&') // add '%' before each 2 characters
            );
        } catch {
            return "";
        }

    }

    /*
      * @dev check if a validator is oversubscribed
      * @param accountId - the validators account id
      * @returns boolean, true if oversubscribed else false
    * */
    async getIsOverSubscribed(accountId) {
        const max = await this.api.consts.staking.maxNominatorRewardedPerValidator;
        const exposure = await this.api.query.staking.erasStakers(this.era, accountId);
        if(!exposure.isEmpty) {
            if(exposure.others.length > max) {
                return true;
            }
        }

        return false;
    }

    /*
   * @dev check if a validator meets the criteria (except for uniqueness)
   * @param accountId - the validators account id
   * @param staked - the amount the validator has staked
   * @param commission - the commission the validator charges to nominators
   * @returns boolean, true if meets criteria else false
   * */
    async getMeetsCriteria(accountId, staked, commission) {
        if(staked < this.minStaking) return false;
        if(commission > this.maxCommission) return false;
        const overSubscribed = await this.getIsOverSubscribed(accountId);
        if(overSubscribed) return false;
        const hasBeenSlashed = await this.getHasBeenSlashed(accountId);

        return !hasBeenSlashed;
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
    };

}

module.exports = ValidatorSelector;