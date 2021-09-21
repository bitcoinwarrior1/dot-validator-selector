const { chai, expect } = require('chai');
const Selector = require("../util/selector");

describe("selector functionality", () => {

    before(async () => {
        this.selector = new Selector("", "DOT");
    });

    it("should be able to find a validator that meets all the criteria", async () => {
        const validator = await this.selector.getValidators(1);
        expect(validator.length).to.equal(1, "should have found one validator object");
    });

    it("should be able to check if the validator has a verified id", async() => {
        const zugCapitalIdentityVerified = await this.selector.getIsVerified(1);
        expect(zugCapitalIdentityVerified).to.equal(true, "zug capital should be a verified identity");
        const notVerifiedValidator = await this.selector.getIsVerified(2);
        expect(notVerifiedValidator).to.equal(false, "this validator should not have an identity");
    });

    it("should be able to get a validators commission", async() => {
        const commission = await this.selector.getCommissionRate(1);
        expect(commission).to.not.equal(0, "this entity should have some commission");
        expect(commission).to.not.equal(undefined, "call should not fail");
    });

    it("should be able to get a validators stake in the pool", async() => {
        const stake = await this.selector.getStakeInPool(1);
        expect(stake).to.not.equal(0, "this entity should have some stake in the pool");
        expect(stake).to.not.equal(undefined, "call should not fail");
    });

    it("should be able to check if the validator has been slashed before", async() => {
        const beenSlashed = await this.selector.getHasBeenSlashed(3);
        expect(beenSlashed).to.equal(true, "this entity has been slashed before");
    });

});