(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
    "validators": [
        {
            "accountId": "148HzdSuFsDrNKnAHFs81BJzZxmKgwEC6Pmpw2QJnTy3Hv3R",
            "identity": {
                "display": "CoinFund/Grassfed",
                "legal": "",
                "web": "",
                "riot": "",
                "email": "",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@coinfund_io"
            },
            "staked": 127893899004000,
            "commission": "5%"
        },
        {
            "accountId": "153YD8ZHD9dRh82U419bSCB5SzWhbdAFzjj4NtA5pMazR2yC",
            "identity": {
                "display": "SAXEMBERG",
                "legal": "",
                "web": "https://saxemberg.com/",
                "riot": "@s_saxemberg:matrix.org",
                "email": "hello@saxemberg.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@saxemberg"
            },
            "staked": 158596045678684,
            "commission": "1.99%"
        },
        {
            "accountId": "1cFsLn7o74nmjbRyDtMAnMpQMc5ZLsjgCSz9Np2mcejUK83",
            "identity": {
                "display": "Uno Staking",
                "legal": "",
                "web": "",
                "riot": "@unostaking:matrix.org",
                "email": "operator@unostaking.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@UnoStaking"
            },
            "staked": 108144343179278,
            "commission": "3%"
        },
        {
            "accountId": "12dvyqCFhVubTDqMdojyjhkxVUMaYVXWLv8uZW1NomUunPmN",
            "identity": {
                "display": "Nodeasy",
                "legal": "",
                "web": "",
                "riot": "@crabbean:matrix.org",
                "email": "wenzhihao@bitopia.cn",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@Nodeasy"
            },
            "staked": 100485517591916,
            "commission": "3%"
        },
        {
            "accountId": "1WG3jyNqniQMRZGQUc7QD2kVLT8hkRPGMSqAb5XYQM1UDxN",
            "identity": {
                "display": "DokiaCapital",
                "legal": "",
                "web": "https://staking.dokia.cloud",
                "riot": "@awrelll:matrix.org",
                "email": "",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 6044401583000000,
            "commission": "5%"
        },
        {
            "accountId": "14Y4s6V1PWrwBLvxW47gcYgZCGTYekmmzvFsK1kiqNH2d84t",
            "identity": {
                "display": "RockX_Polkadot",
                "legal": "RockX",
                "web": "https://www.rockx.com",
                "riot": "",
                "email": "support@rockx.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@rockx_official"
            },
            "staked": 36640701574454,
            "commission": "10%"
        },
        {
            "accountId": "15BQUqtqhmqJPyvvEH5GYyWffXWKuAgoSUHuG1UeNdb8oDNT",
            "identity": {
                "display": "HashQuark",
                "legal": "HashQuark",
                "web": "https://hashquark.io",
                "riot": "",
                "email": "contact@hashquark.io",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 251741039136241,
            "commission": "3%"
        },
        {
            "accountId": "14ShUZUYUR35RBZW6uVVt1zXDxmSQddkeDdXf1JkMA6P721N",
            "identity": {
                "display": "Wei",
                "legal": "Wei Tang",
                "web": "https://that.world/~wei/",
                "riot": "@wei:that.world",
                "email": "wei@that.world",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 554005388214145,
            "commission": "3%"
        }
    ],
    "era": 623
}
},{}],2:[function(require,module,exports){
const latestKsm = require("./ksm/latest.json");
const latestDot = require("./dot/latest.json");

document.addEventListener("DOMContentLoaded", async () => {

    document.getElementById("submit").addEventListener("click", async () => {
        document.getElementById("status").hidden = false;
        const isKSM = document.getElementById("KSM").checked;
        let data;
        if(isKSM) {
            data = latestKsm;
        } else {
            data = latestDot;
        }
        document.getElementById("validators").innerText = data.validators.map((v, i) => {
            return `${++i}. address: ${v.accountId} commission: ${v.commission} name: ${v.identity.display}`;
        }).join("\n");
        document.getElementById("status").innerText = `Validators meeting the criteria in era ${data.era}`;
    });

});
},{"./dot/latest.json":1,"./ksm/latest.json":3}],3:[function(require,module,exports){
module.exports={
    "validators": [
        {
            "accountId": "EDNEfKXHd645DPpBhLZjaEwp4sPhj4STjjS4QrMbFU1FqbZ",
            "identity": {
                "display": "luckyve",
                "legal": "",
                "web": "",
                "riot": "@luckyve:matrix.org",
                "email": "luckyvenode@gmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 100000000000000,
            "commission": "10%"
        },
        {
            "accountId": "J19LYGghRCe4Ct3VW4Vz1amMoUgogS1sh2FQvPWroKcDdb1",
            "identity": {
                "display": "SAXEMBERG",
                "legal": "",
                "web": "https://saxemberg.com/",
                "riot": "@s_saxemberg:matrix.org",
                "email": "",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@saxemberg"
            },
            "staked": 212279931917384,
            "commission": "2%"
        },
        {
            "accountId": "DY3hczPcJjHXScXkKwJZ7vgqTE4bZaCUa56XsAQH8gDzB7x",
            "identity": {
                "display": "♞GameTheory♜",
                "legal": "",
                "web": "https://gametheory.me",
                "riot": "@game.theory:matrix.org",
                "email": "mail@gametheory.me",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 102460158635369,
            "commission": "10%"
        },
        {
            "accountId": "HHxJGYkkxzYNpDmoGomwuGBc8mtZQDhyhvWiCgUpJttpR1K",
            "identity": {
                "display": "Po-Ku People ❤️",
                "legal": "",
                "web": "",
                "riot": "@poku_node:matrix.org",
                "email": "",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@PoKuPeople"
            },
            "staked": 116637600000000,
            "commission": "10%"
        },
        {
            "accountId": "FSUwnu7Ehf7sKByaXvSTYoAfuTxybwqhubeGfQkho94syqo",
            "identity": {
                "display": "Web3 VC",
                "legal": "Web3 Venture Capital",
                "web": "https://web3.vc",
                "riot": "@web3.vc:matrix.org",
                "email": "hi@web3.vc",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@VentureWeb3"
            },
            "staked": 2368275807833819,
            "commission": "10%"
        },
        {
            "accountId": "HKKT5DjFaUE339m7ZWS2yutjecbUpBcDQZHw2EF7SFqSFJH",
            "identity": {
                "display": "RMRK Multisig",
                "legal": "",
                "web": "https://rmrk.app",
                "riot": "",
                "email": "hello@rmrk.app",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@rmrkapp"
            },
            "staked": 4085000000000000,
            "commission": "5%"
        },
        {
            "accountId": "EAkB83iUA6vJFXqSzuwYXq8vdZD5kcKgTP7BZkVRQ3iCVqC",
            "identity": {
                "display": "TransX",
                "legal": "TransX",
                "web": "https://transx.io",
                "riot": "@transx:matrix.org",
                "email": "silver@transx.io",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@TransX11"
            },
            "staked": 4004880786839309,
            "commission": "5%"
        },
        {
            "accountId": "J12kKQz1qcCHBg36Txz2k9mNKYERhjKRRSshwUghT11medm",
            "identity": {
                "display": "lloyds.tech",
                "legal": "LLoyds Blockchain Technology",
                "web": "https://lloyds.tech",
                "riot": "@lloyds.tech:matrix.org",
                "email": "tech@lloyds.tech",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@lloyds_tech"
            },
            "staked": 101557471494826,
            "commission": "6%"
        },
        {
            "accountId": "F7Wa1su7NRSr6LWuhPWdXcQALDyzm8Vmev7WtV5jVPtJELs",
            "identity": {
                "display": "ANAMIX",
                "legal": "ANAMIX",
                "web": "https://anamix.top/",
                "riot": "@dbpatty:matrix.org",
                "email": "anamix@polkadot.pro",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 900665650031888,
            "commission": "5%"
        },
        {
            "accountId": "EyTegKZ9DBvMkV6pMbjx2fRk3N2VLNNduuto1PGpYcEqRrX",
            "identity": {
                "display": "andreita-validator-0",
                "legal": "",
                "web": "",
                "riot": "@andreita:matrix.org",
                "email": "andreaf.speziale@gmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@andreafspeziale"
            },
            "staked": 118763671962932,
            "commission": "10%"
        },
        {
            "accountId": "Ew4JDQENKYKdBkgW6bJfFqYYXaDw4kupXBrXyMcJoU6Lc9Z",
            "identity": {
                "display": "Amiga Staking",
                "legal": "",
                "web": "",
                "riot": "@amigastaking:matrix.org",
                "email": "operator@amigastaking.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@AmigaStaking"
            },
            "staked": 104156225861481,
            "commission": "10%"
        },
        {
            "accountId": "F7hDMvu33u14QPXbkBzqF4CuuyyruB2xi6D3V7aUbY8KGpr",
            "identity": {
                "display": "SynerWork Inc",
                "legal": "",
                "web": "",
                "riot": "",
                "email": "staking@synerwork.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 103500000000000,
            "commission": "2%"
        },
        {
            "accountId": "Gv8p4vhdr3iZR9C1PrFMCNtcCsLL6jAtpKXjqpzUm2Ams2Q",
            "identity": {
                "display": "🐼 PandaForce 🐼",
                "legal": "",
                "web": "https://www.pandaforcenodes.com/",
                "riot": "@pandaforce:matrix.org",
                "email": "info@pandaforcenodes.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@PandaForceNodes"
            },
            "staked": 122311142130933,
            "commission": "10%"
        }
    ],
    "era": 3356
}
},{}]},{},[2]);
