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
            "staked": 205212950077306,
            "commission": "5%"
        },
        {
            "accountId": "14d2kv44xf9nFnYdms32dYPKQsr5C9urbDzTz7iwU8iHb9az",
            "identity": {
                "display": "Coinstudio",
                "legal": "",
                "web": "",
                "riot": "",
                "email": "coinstudio@protonmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 101705479552692,
            "commission": "5%"
        },
        {
            "accountId": "16fmwCAoqJdVtmj7wGEGuFa24WT7x974ZEQsa42x8k9uop1o",
            "identity": {
                "display": "Lightning Blocks",
                "legal": "",
                "web": "",
                "riot": "@lightningblocks:matrix.org",
                "email": "contact@lightningblocks.io",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@LightningBlocks"
            },
            "staked": 50110194994382,
            "commission": "5%"
        },
        {
            "accountId": "15CosmEmAfQAhnxwan18e5TueAe6bDzrqqxg13dToDWr7A8M",
            "identity": {
                "display": "COSMOON",
                "legal": "",
                "web": "",
                "riot": "@gregorst:matrix.org",
                "email": "cosmoon@gregorst.org",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 50014457321045,
            "commission": "5%"
        },
        {
            "accountId": "12rgiL4r56kPE4PuYmz8snR21isfbrcp5Vbf8VdJe2AWDuus",
            "identity": {
                "display": "il4r141",
                "legal": "",
                "web": "",
                "riot": "@il4r141:matrix.org",
                "email": "il4r141@gmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 50008992533208,
            "commission": "5%"
        }
    ],
    "era": 844
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
            "accountId": "GD6MTUJG9Ym7tS6PLF42yreHpqpvFgPcqPwcyRGiMv2TSGR",
            "identity": {
                "display": "Zetetic Validator",
                "legal": "",
                "web": "",
                "riot": "@zeteticvalidator:matrix.org",
                "email": "operator@zeteticvalidator.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@ZeticValidator"
            },
            "staked": 149328338443368,
            "commission": "15%"
        },
        {
            "accountId": "J19LYGghRCe4Ct3VW4Vz1amMoUgogS1sh2FQvPWroKcDdb1",
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
            "staked": 257636330533203,
            "commission": "3%"
        },
        {
            "accountId": "FMR23WhgV6gW935sjJdvnxT733oaPbBdrkCgurt5AR6JTAj",
            "identity": {
                "display": "Lightning Blocks",
                "legal": "",
                "web": "",
                "riot": "@lightningblocks:matrix.org",
                "email": "contact@lightningblocks.io",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@LightningBlocks"
            },
            "staked": 112019366062153,
            "commission": "15%"
        },
        {
            "accountId": "FqFKeVrWbBDVBk8U9VvL8gSFwUm4nj9fEZmtQvmViZzLvnv",
            "identity": {
                "display": "Tomasz Panta Rhei",
                "legal": "Tomasz Waszczyk",
                "web": "https://waszczyk.com",
                "riot": "@tomaszwaszczyk:matrix.org",
                "email": "tomasz@waszczyk.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@tomaszwaszczyk"
            },
            "staked": 109189443686092,
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
            "commission": "3%"
        },
        {
            "accountId": "D2r9AudNkHHpKfGtS5rpVHkchBoBhRsR6TmNcTuU4yiTp6w",
            "identity": {
                "display": "🏢 Ministry Of Blocks 🏢",
                "legal": "",
                "web": "",
                "riot": "",
                "email": "x@ministryofblocks.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 188312038866995,
            "commission": "10%"
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
            "staked": 129877278490602,
            "commission": "5%"
        },
        {
            "accountId": "EAhgtgo4qb6tbh3VwrPEgxne9qkwiqg5SzNHTmbqyoVyHk5",
            "identity": {
                "display": "Melange",
                "legal": "",
                "web": "",
                "riot": "@palace:tzchat.org",
                "email": "melange.staking@gmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@omglol247"
            },
            "staked": 126063818250389,
            "commission": "15%"
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
            "staked": 138054548021198,
            "commission": "15%"
        },
        {
            "accountId": "D5p4fKuhggjXRxiZ4JuPTCGYpDM6Dp9VRxjsYCeVg7LYv5a",
            "identity": {
                "display": "STAKE.SU",
                "legal": "",
                "web": "",
                "riot": "@mr.ownage:matrix.org",
                "email": "stake.soviet.union@gmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@egrmsh"
            },
            "staked": 119333581162950,
            "commission": "3%"
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
            "staked": 950665650031888,
            "commission": "3%"
        },
        {
            "accountId": "E2TtDRDYdHRDXAoB7WYivEEWh5EdfRjUryQ574Up1cmKBMQ",
            "identity": {
                "display": "Kinematiks Labs ⚗️",
                "legal": "",
                "web": "",
                "riot": "",
                "email": "ksm@kinematiks.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 113901937442505,
            "commission": "3%"
        },
        {
            "accountId": "FWz717J6ATaYSNy2tRHAskEC9SP4uKHNJYC9mvfvimkB8GT",
            "identity": {
                "display": "Dionysus🍇",
                "legal": "",
                "web": "https://dionysus.network/",
                "riot": "@dionysus.validator:matrix.org",
                "email": "hi@dionysus.network",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@DionysusValid"
            },
            "staked": 128555655633863,
            "commission": "5%"
        },
        {
            "accountId": "DuLr6CeLXezrfumF6EkqLeAx9paMcADYU6zHpSZVB8gvjht",
            "identity": {
                "display": "🛡 DWELLIR KSM 🛡",
                "legal": "",
                "web": "https://dwellir.com",
                "riot": "@dwellir:matrix.org",
                "email": "info@dwellir.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@DwellirOfficial"
            },
            "staked": 117245426239450,
            "commission": "9%"
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
            "staked": 4835000000000000,
            "commission": "5%"
        },
        {
            "accountId": "CrTPV874i4VNTjkCfQbGpPT338dhyu27w6poWrKuZZpEz17",
            "identity": {
                "display": "BIG WAVE",
                "legal": "",
                "web": "",
                "riot": "@big-wave:matrix.org",
                "email": "bigwave.ww@gmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@BigwaveWw"
            },
            "staked": 101442170329805,
            "commission": "3%"
        }
    ],
    "era": 4239
}
},{}]},{},[2]);
