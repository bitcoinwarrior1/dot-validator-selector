class ValidatorSelector {

    /*
    * @param maxCommission - the maximum commission a nominator is willing to accept from a validator, defaults to 5%
    * @param minStaking - the min amount of DOT that the validator must have staked for 'skin in the game', defaults to 1000 DOT
    * @param api - the initialised @polkadot/api instance
    * */
    constructor(maxCommission, minStaking, api) {
        // TODO verify the number scales
        this.maxCommission = (maxCommission ?? 5) * 1e10;
        this.minStaking = (minStaking ?? 1000) * 1e10;
        this.api = api;
    }

    /*
    * @dev return validators that meet the criteria as set in the README
    * @param amount - the max amount of validators to return e.g. 12 for DOT
    * @returns an array of objects containing validator info that meets this criteria
    * */
    async getValidators(amount) {
        const validatorDisplays = {}; // used to prevent adding in validators run by the same entity
        const validatorsMeetingCriteria = [];
        const validators = await this.api.query.session.validators();
        for(const validator of validators) {
            if(validatorsMeetingCriteria.length === amount) return validatorsMeetingCriteria;
            const identity = await this.api.query.identity.identityOf(validator);
            if(!identity.isEmpty) {
                const { info, deposit } = JSON.parse(identity);
                if(validatorDisplays[info.display.raw] !== true) {
                    const meetsCriteria = await this.getMeetsCriteria(validator);
                    if(meetsCriteria && deposit >= this.minStaking) {
                        validatorsMeetingCriteria.push({
                            accountId: validator.toString(),
                            identity: info
                        });
                        validatorDisplays[info.display.raw] = true;
                    }
                }
            }
        }

        return validatorsMeetingCriteria;
    };

    /*
      * @dev check if a validator is oversubscribed
      * @param accountId - the validators account id
      * @returns boolean, true if oversubscribed else false
  * */
    async getIsOverSubscribed(accountId) {
        // TODO figure this out
        //const max = await this.api.consts.staking.maxNominatorRewardedPerValidator;
        return false;
    }

    /*
   * @dev check if a validator meets the criteria (except for uniqueness)
   * @param accountId - the validators account id
   * @returns boolean, true if meets criteria else false
   * */
    async getMeetsCriteria(accountId) {
        const overSubscribed = await this.getIsOverSubscribed(accountId);
        if(overSubscribed) return false;
        const meetsCommissionRequirement = await this.getMeetsCommissionRequirement(accountId);
        if(!meetsCommissionRequirement) return false;
        const hasBeenSlashed = await this.getHasBeenSlashed(accountId, 0);

        return !hasBeenSlashed;
    }

    /*
    * @dev check if a validator has a verified identity
    * @param accountId - the identifier for the validator
    * @returns boolean - true if identity is verified else false
    * */
    async getIsVerified(accountId) {
        const identity = await this.api.query.identity.identityOf(accountId);

        return !identity.isEmpty;
    };

    /*
    * @dev check if the commission set by the validator is acceptable
    * @param accountId - the identifier for the validator
    * @returns boolean - true if acceptable else false
    * */
    async getMeetsCommissionRequirement(accountId) {
        const commission = (await this.api.query.staking.validators(accountId)).commission.toNumber();

        return commission <= this.maxCommission;
    };

    /*
    * @dev check if a validator has been slashed before
    * @param accountId - the identifier for the validator
    * @param era - the epoch to check for slashing
    * @returns boolean - true if has been slashed else false
    * */
    // TODO figure out how to find any slashes at anytime
    async getHasBeenSlashed(accountId, era) {
        const slashes = await this.api.query.staking.validatorSlashInEra(accountId, era);

        return !slashes.isEmpty;
    };

}

module.exports = ValidatorSelector;