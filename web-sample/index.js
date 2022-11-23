const request = require("superagent");
const parser = new DOMParser();

document.addEventListener("DOMContentLoaded", async () => {

    document.getElementById("submit").addEventListener("click", async () => {
        document.getElementById("status").hidden = false;
        const isKSM = document.getElementById("KSM").checked;
        const data = await request.get("https://dot-tool-server.herokuapp.com/dot-validator-selector");
        const results = JSON.parse(data.text);
        let eraKey;
        let networkKey;
        let subscan;
        if(isKSM) {
            networkKey = "ksm"
            eraKey = "ksmEra";
            subscan = "https://kusama.subscan.io/account/"
        } else {
            networkKey = "dot";
            eraKey = "dotEra";
            subscan = "https://subscan.io/account/"
        }

        const v = results[networkKey].map((v, i) => {
            return `<div class="card">
                      <div class="container">
                        <h4><b>${++i}. <a href=${v.identity.web}> ${v.identity.display}</a> </b></h4>
                        <p>Commission: ${v.commission}</p>
                        <p>Subscan: <a href="${subscan + v.accountId}">${v.accountId}</a></p>
                      </div>
                    </div>`
        });
        document.getElementById('validators').innerHTML = v;
        document.getElementById("status").innerText = `Validators meeting the criteria in era ${results[eraKey]}`;
    });

});