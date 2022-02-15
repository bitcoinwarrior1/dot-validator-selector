const { ApiPromise, WsProvider} = require("@polkadot/api");
const ValidatorSelector = require("./ValidatorSelector");
const fs = require("fs");

async function cacheValidators(path, nodeUrl, amount, minStaking) {
    const api = await ApiPromise.create({ provider: new WsProvider(nodeUrl) });
    const selector = new ValidatorSelector(api, undefined, undefined, minStaking);
    const validators = await selector.getValidators(amount);
    const era = selector.era;
    fs.writeFileSync(`${path}${era}.json`, JSON.stringify(validators, null, 4));
    const latest = {
        validators: validators,
        era: era
    };
    fs.writeFileSync(`web-sample/${path.replace("cache/", "")}latest.json`, JSON.stringify(latest, null, 4));
}

async function main() {
    await cacheValidators("cache/dot/", "wss://polkadot.api.onfinality.io/ws?apikey=09f0165a-7632-408b-ba81-08f964b607f7", 16, 1000);
    return cacheValidators("cache/ksm/", "wss://kusama.api.onfinality.io/ws?apikey=09f0165a-7632-408b-ba81-08f964b607f7", 24, 100);
}

main().then(() => { process.exit(0) }).catch(() => { process.exit(-1) });
