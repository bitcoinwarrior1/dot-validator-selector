const ValidatorSelector = require("../util/ValidatorSelector");
const { ApiPromise, WsProvider} = require("@polkadot/api");

document.addEventListener("DOMContentLoaded", async () => {
    const api = await ApiPromise.create({ provider: new WsProvider("wss://polkadot.elara.patract.io") });
    const selector = new ValidatorSelector(1, 0, api);
    const validators = await selector.getValidators(12);
    // TODO make more presentable
    document.getElementById("validators").innerText = validators.map((v) => {
        return v.accountId;
    }).join("\n");
    document.getElementById("status").hidden = false;
});