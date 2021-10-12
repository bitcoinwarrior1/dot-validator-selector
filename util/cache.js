const { ApiPromise, WsProvider} = require("@polkadot/api");
const ValidatorSelector = require("./ValidatorSelector");
const fs = require("fs");

async function cacheValidators(path, nodeUrl, amount) {
    const api = await ApiPromise.create({ provider: new WsProvider(nodeUrl) });
    const selector = new ValidatorSelector(api);
    const validators = await selector.getValidators(amount);
    const era = selector.era;
    fs.writeFileSync(`${path}${era}.json`, JSON.stringify(validators));
}

async function main() {
    await cacheValidators("../cache/dot/", "wss://polkadot.api.onfinality.io/ws?apikey=09f0165a-7632-408b-ba81-08f964b607f7", 16);
    return cacheValidators("../cache/ksm/", "wss://kusama.api.onfinality.io/ws?apikey=09f0165a-7632-408b-ba81-08f964b607f7", 24);
}

main().then(() => { process.exit(0) }).catch(() => { process.exit(-1) });
