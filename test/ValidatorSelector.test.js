const { chai, expect } = require('chai');
const { ApiPromise, WsProvider} = require("@polkadot/api");
const ValidatorSelector = require("../util/ValidatorSelector");
const zugCapital1 = "1zugcaaaDTLhG77kp7PBPpWiaUWTND9oKNcNM94StNStnuw";
const zugCapital2 = "1zugcaaABVRXtyepKmwNR4g5iH2NtTNVBz1McZ81p91uAm8";

describe("ValidatorSelector functionality", () => {

    before(async() => {
        this.api = await ApiPromise.create({ provider: new WsProvider("wss://polkadot.elara.patract.io") });
        this.selector = new ValidatorSelector(this.api, undefined, undefined, undefined);
    });

    it("should be able to find a validators that meet all the criteria", async () => {
        const validators = await this.selector.getValidators(12);
        expect(validators.length).to.equal(12, "should have found 12 validators");
        expect(parseFloat(validators[0].commission) <= 20, "commission should not be higher than 20%");
        expect(parseFloat(validators[0].deposit) >= (1000 * 1e7), "staking should be at least 1000 * 1e7");
    });

    it("should see that zug capital meets the criteria in era 482", async () => {
        const meetsCriteria = await new ValidatorSelector(this.api).getMeetsCriteria(zugCapital1);
        expect(meetsCriteria).to.equal(true, "zug capital should meet the criteria");
    });

    it("should be able to check if the validator has been slashed before", async() => {
        const beenSlashed = await new ValidatorSelector(this.api, undefined, undefined, 482).getHasBeenSlashed(zugCapital2);
        expect(beenSlashed).to.equal(false, "this entity has not been slashed");
    });

});