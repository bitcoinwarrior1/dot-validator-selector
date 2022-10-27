const request = require("superagent");

document.addEventListener("DOMContentLoaded", async () => {

    document.getElementById("submit").addEventListener("click", async () => {
        document.getElementById("status").hidden = false;
        const isKSM = document.getElementById("KSM").checked;
        const data = await request.get("https://dot-tool-server.herokuapp.com/dot-validator-selector");
        const results = JSON.parse(data.text);
        let eraKey;
        let networkKey;
        if(isKSM) {
            networkKey = "ksm"
            eraKey = "ksmEra";
        } else {
            networkKey = "dot";
            eraKey = "dotEra";
        }
        document.getElementById("validators").innerText = results[networkKey].map((v, i) => {
            return `${++i}. address: ${v.accountId} commission: ${v.commission} name: ${v.identity.display}`;
        }).join("\n");
        document.getElementById("status").innerText = `Validators meeting the criteria in era ${results[eraKey]}`;
    });

});