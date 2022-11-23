const request = require("superagent");
const { ApiPromise, WsProvider } = require("@polkadot/api");
const polkadotProvider = "wss://polkadot.api.onfinality.io/ws?apikey=09f0165a-7632-408b-ba81-08f964b607f7";
const kusamaProvider = "wss://kusama.api.onfinality.io/ws?apikey=09f0165a-7632-408b-ba81-08f964b607f7";
const { web3FromAddress, web3Accounts, web3Enable } = require('./extension');

document.addEventListener("DOMContentLoaded", async () => {

    document.getElementById("submit").addEventListener("click", async () => {
        document.getElementById("status").hidden = false;
        const isKSM = document.getElementById("KSM").checked;
        const data = await request.get("https://dot-tool-server.herokuapp.com/dot-validator-selector");
        const results = JSON.parse(data.text);
        let eraKey;
        let networkKey;
        let api;
        let subscan;
        if(isKSM) {
            networkKey = "ksm"
            eraKey = "ksmEra";
            subscan = "https://kusama.subscan.io/account/"
        } else {
            networkKey = "dot";
            eraKey = "dotEra";
            subscan = "https://polkadot.subscan.io/account/"
        }
        document.getElementById("validators").innerHTML = results[networkKey].map((v, i) => {
            return `<div class="card">
                      <div class="container">
                        <h4><b>${++i}. <a href=${v.identity.web}> ${v.identity.display}</a> </b></h4>
                        <p>Commission: ${v.commission}</p>
                        <p>Subscan: <a href="${subscan + v.accountId}">${v.accountId}</a></p>
                      </div>
                    </div>`
        });
        document.getElementById("stake").hidden = false;
        document.getElementById("stake").addEventListener("click", async () => {
            await web3Enable('dot validator selector sample');
            const allAccounts = await web3Accounts();
            const injector = await web3FromAddress(allAccounts[0].address);
            if(isKSM) {
                api = await ApiPromise.create({ provider: new WsProvider(kusamaProvider) });
            } else {
                api = await ApiPromise.create({ provider: new WsProvider(polkadotProvider) });
            }
            await api.tx.staking.nominate(results[networkKey].map((v) => {
                return v.accountId;
            })).signAndSend(
                allAccounts[0].address, { signer: injector.signer },
                (status) => { alert(status)}
            );
        })
        document.getElementById("status").innerText = `Validators meeting the criteria in era ${results[eraKey]}`;
    });

});