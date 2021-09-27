const { chai, expect } = require('chai');
const { ApiPromise, WsProvider} = require("@polkadot/api");
const ValidatorSelector = require("../util/ValidatorSelector");
const p2porg = "11uMPbeaEDJhUxzU4ZfWW9VQEsryP9XqFcNRfPdYda6aFWJ";
const zugCapital1 = "1zugcaaaDTLhG77kp7PBPpWiaUWTND9oKNcNM94StNStnuw";
const zugCapital2 = "1zugcaaABVRXtyepKmwNR4g5iH2NtTNVBz1McZ81p91uAm8";
const notVerifiedValidator = "11BgR7fH8Sq6CcGcXxZrhyrBM2PUpDmhnGZpxPGvVGXEiPT";
const HSDIGITAL5 = "13mK8AssyPekT5cFuYQ7ijKNXcjHPq8Gnx6TxF5eFCAwoLQ";

describe("ValidatorSelector functionality", () => {

    before(async() => {
        this.api = await ApiPromise.create({ provider: new WsProvider("wss://polkadot.elara.patract.io") });
        this.selector = new ValidatorSelector(10, 5, this.api);
    });

    it("should be able to find a validators that meet all the criteria", async () => {
        const validators = await this.selector.getValidators(12);
        expect(validators.length).to.equal(12, "should have found 12 validators");
    });

    it("should see that zug capital meets the criteria", async () => {
        const meetsCriteria = await this.selector.getMeetsCriteria(zugCapital1);
        expect(meetsCriteria).to.equal(true, "zug capital should meet the criteria");
    });

    it("should be able to check if the validator has a verified id", async() => {
        const zugCapitalIdentityVerified = await this.selector.getIsVerified(zugCapital1);
        expect(zugCapitalIdentityVerified).to.equal(true, "zug capital should be a verified identity");
        const notVerifiedValidator = await this.selector.getIsVerified(notVerifiedValidator);
        expect(notVerifiedValidator).to.equal(false, "this validator should not have an identity");
    });

    it("should be able to get a validators commission", async() => {
        const commission = await this.selector.getMeetsCommissionRequirement(zugCapital1);
        expect(commission).to.not.equal(true, "this entity's commission should not be 100%");
    });

    it("should be able to check if the validator has been slashed before", async() => {
        const beenSlashed = await this.selector.getHasBeenSlashed(zugCapital2);
        expect(beenSlashed).to.equal(false, "this entity has not been slashed in era 0");
    });

});