const ValidatorSelector = require("../util/ValidatorSelector");
const { ApiPromise, WsProvider} = require("@polkadot/api");

document.addEventListener("DOMContentLoaded", async () => {
    const api = await ApiPromise.create({ provider: new WsProvider("wss://polkadot.elara.patract.io") });
    const selector = new ValidatorSelector(api);
    const validators = await selector.getValidators(12);
    document.getElementById("validators").innerText = validators.map((v, i) => {
        return `${++i}. address: ${v.accountId} commission: ${v.commission} name: ${selector.hexToUtf8(v.identity.display.raw.substring(2))}`;
    }).join("\n");
    document.getElementById("status").hidden = true;
});