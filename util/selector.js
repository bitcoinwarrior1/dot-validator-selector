module.exports = class Selector {

    /*
    * @param apiKey - the api key for the subscan endpoint
    * @param network - the network to use for this tool e.g. DOT
    * */
    constructor(apiKey, network) {
        this.apiKey = apiKey;
        this.network = network;
        this.endpoint = endpoints[network];
    }

    /*
    * @dev check if a validator has a verified identity
    * @param accountId - the identifier for the validator
    * @returns boolean - true if identity is verified else false
    * */
    async getIsVerified(accountId) {};

    /*
    * @dev return validators that meet the criteria as set in the README
    * @param amount - the max amount of validators to return e.g. 12 for DOT
    * @returns an array of objects containing validator info that meets this criteria
    * */
    async getValidators(amount) {};

    /*
    * @dev get the commission rate of the validator
    * @param accountId - the identifier for the validator
    * @returns a number with the commission rate
    * */
    async getCommissionRate(accountId) {};

    /*
    * @dev see how much skin in the game that a validator has by checking their stake in their own pool
    * @param accountId - the identifier for the validator
    * @returns a number with the amount of tokens they have staked
    * */
    async getStakeInPool(accountId) {};

    /*
    * @dev check if a validator has been slashed before
    * @param accountId - the identifier for the validator
    * @returns boolean - true if has been slashed else false
    * */
    async getHasBeenSlashed(accountId) {};

    /*
    * @dev remove validators that are run by the same entity e.g. zug capital 1 and zug capital 2 should just be zug capital 1
    * @param validatorsObj - an object containing information about the validators
    * @returns validatorsObj with duplicates removed
    * */
    async removeDuplicates(validatorsObj) {};
}