const { chai, expect } = require('chai');
const { ApiPromise, WsProvider} = require("@polkadot/api");
const ValidatorSelector = require("../util/ValidatorSelector");
const zugCapital1 = "1zugcaaaDTLhG77kp7PBPpWiaUWTND9oKNcNM94StNStnuw";
const zugCapital2 = "1zugcaaABVRXtyepKmwNR4g5iH2NtTNVBz1McZ81p91uAm8";

describe("ValidatorSelector functionality", () => {

    before(async() => {
        this.api = await ApiPromise.create({ provider: new WsProvider("wss://polkadot.api.onfinality.io/ws?apikey=09f0165a-7632-408b-ba81-08f964b607f7") });
        this.selector = new ValidatorSelector(this.api);
    });

    it("should be able to find a validator that meets all the criteria", async () => {
        const validators = await this.selector.getValidators(1);
        expect(parseFloat(validators[0].commission) <= 20, "commission should not be higher than 20%");
        expect(parseFloat(validators[0].commission) > 0.5, "commission should be higher than 0.5%");
        expect(parseFloat(validators[0].deposit) >= (1000 * 1e7), "staking should be at least 1000 * 1e7");
        expect(this.selector.era).to.not.equal(0, "era should not be zero");
    });

    it("should see that zug capital meets the criteria in era 482", async () => {
        const meetsCriteria = await new ValidatorSelector(
            this.api,
            undefined,
            undefined,
            undefined,
            487
        ).getMeetsCriteria(zugCapital1);
        expect(meetsCriteria).to.equal(true, "zug capital should meet the criteria in era 482");
    });

    it("should be able to check if the validator has been slashed before", async() => {
        const beenSlashed = await new ValidatorSelector(
            this.api,
            undefined,
            undefined,
            undefined,
            482
        ).getHasBeenSlashed(zugCapital2);
        expect(beenSlashed).to.equal(false, "this entity has not been slashed as of era 482");
    });

    it("should be able to parse the identity object", async() => {
        const identityObject = {"additional":[],"display":{"raw":"0x506f6c6b61646f742e70726f202d205265616c676172"},"legal":{"none":null},"web":{"raw":"0x68747470733a2f2f706f6c6b61646f742e70726f"},"riot":{"raw":"0x407265616c6761723a6d61747269782e6f7267"},"email":{"raw":"0x68656c6c6f40706f6c6b61646f742e70726f"},"pgpFingerprint":null,"image":{"none":null},"twitter":{"raw":"0x4070726f706f6c6b61646f74"}};
        const readable = this.selector.convertIdentityToReadableFormat(identityObject);
        expect(readable.display).to.equal('Polkadot.pro - Realgar');
        expect(readable.legal).to.equal('');
        expect(readable.web).to.equal('https://polkadot.pro');
        expect(readable.riot).to.equal('@realgar:matrix.org');
        expect(readable.email).to.equal('hello@polkadot.pro');
        expect(readable.pgpFingerprint).to.equal('');
        expect(readable.image).to.equal('');
        expect(readable.twitter).to.equal('@propolkadot');
    });

    it("should set the era to the current one if not set in the constructor", async() => {
        const selectorNoEraSet = new ValidatorSelector(this.api);
        expect(selectorNoEraSet.era).to.equal(0, "should have an initial era set to 0");
        await selectorNoEraSet.setEraToCurrentIfZero();
        expect(selectorNoEraSet.era).to.not.equal(0, "era should not be zero after calling setEraToCurrentIfZero()");
        const selectorWithEraSet = new ValidatorSelector(
            this.api,
            undefined,
            undefined,
            undefined,
            400
        );
        expect(selectorWithEraSet.era).to.equal(400, "era should be 400 as it was explicitly set");
        await selectorWithEraSet.setEraToCurrentIfZero();
        expect(selectorWithEraSet.era).to.equal(400, "era should still be 400 even after setEraToCurrentIfZero() call");
    });

});