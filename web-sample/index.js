const ValidatorSelector = require("../util/ValidatorSelector");
const { ApiPromise, WsProvider} = require("@polkadot/api");

document.addEventListener("DOMContentLoaded", async () => {

    document.getElementById("submit").addEventListener("click", async () => {
        document.getElementById("status").hidden = false;
        const isKSM = document.getElementById("KSM").checked;
        let amt = 16;
        let api;
        if(isKSM) {
            api = await ApiPromise.create({ provider: new WsProvider("wss://kusama-rpc.polkadot.io/") });
            amt = 24;
        } else {
            api = await ApiPromise.create({ provider: new WsProvider("wss://polkadot.elara.patract.io") });
        }
        const selector = new ValidatorSelector(api);
        const validators = await selector.getValidators(amt);
        document.getElementById("validators").innerText = validators.map((v, i) => {
            return `${++i}. address: ${v.accountId} commission: ${v.commission} name: ${selector.hexToUtf8(v.identity.display.raw.substring(2))}`;
        }).join("\n");
        document.getElementById("status").hidden = true;
    });

});