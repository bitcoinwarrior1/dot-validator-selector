module.exports = class Selector {

    /*
    * @dev check if a validator has a verified identity
    * @param id - the identifier for the validator
    * @returns boolean - true if identity is verified else false
    * */
    async getIsVerified(id) {};

    /*
    * @dev return validators that meet the criteria as set in the README
    * @param amount - the max amount of validators to return e.g. 12 for DOT
    * @returns an array of objects containing validator info that meets this criteria
    * */
    async getValidators(amount) {};

    /*
    * @dev get the commission rate of the validator
    * @param id - the identifier for the validator
    * @returns a number with the commission rate
    * */
    async getCommissionRate(id) {};

    /*
    * @dev see how much skin in the game that a validator has by checking their stake in their own pool
    * @param id - the identifier for the validator
    * @returns a number with the amount of tokens they have staked
    * */
    async getStakeInPool(id) {};

    /*
    * @dev check if a validator has been slashed before
    * @param id - the identifier for the validator
    * @returns boolean - true if has been slashed else false
    * */
    async getHasBeenSlashed(id) {}
}