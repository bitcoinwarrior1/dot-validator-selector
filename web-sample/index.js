const ValidatorSelector = require("../util/ValidatorSelector");
const { ApiPromise, WsProvider} = require("@polkadot/api");

document.addEventListener("DOMContentLoaded", async () => {

    document.getElementById("submit").addEventListener("click", async () => {
        document.getElementById("status").hidden = false;
        const isKSM = document.getElementById("KSM").checked;
        let amt = 16;
        let api;
        if(isKSM) {
            api = await ApiPromise.create({ provider: new WsProvider("wss://kusama.api.onfinality.io/ws?apikey=09f0165a-7632-408b-ba81-08f964b607f7") });
            amt = 24;
        } else {
            api = await ApiPromise.create({ provider: new WsProvider("wss://polkadot.api.onfinality.io/ws?apikey=09f0165a-7632-408b-ba81-08f964b607f7") });
        }
        const selector = new ValidatorSelector(api);
        const validators = await selector.getValidators(amt);
        document.getElementById("validators").innerText = validators.map((v, i) => {
            return `${++i}. address: ${v.accountId} commission: ${v.commission} name: ${selector.hexToUtf8(v.identity.display.raw)}`;
        }).join("\n");
        document.getElementById("status").hidden = true;
    });

});