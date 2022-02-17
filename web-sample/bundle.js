(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
    "validators": [
        {
            "accountId": "15wznkm7fMaJLFaw7B8KrJWkNcWsDziyTKVjrpPhRLMyXsr5",
            "identity": {
                "display": "🌐 decentraDOT.com 🌐",
                "legal": "",
                "web": "https://decentradot.com",
                "riot": "",
                "email": "admin@decentradot.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 60568079818809,
            "commission": "5%"
        },
        {
            "accountId": "15wepZh1jWNqxBjsgErm8HmYiE21n79c5krQJeTsYAjHddeM",
            "identity": {
                "display": "Sik | crifferent.de",
                "legal": "",
                "web": "",
                "riot": "@dev0_sik:matrix.org",
                "email": "simon.kraus@crifferent.de",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@dev0_sik"
            },
            "staked": 14804131225154,
            "commission": "1%"
        },
        {
            "accountId": "15JjaHXBC6whzYhWiEi7uExsTboAC4tibbeBKPxh5CVk5Jfq",
            "identity": {
                "display": "Compute Crypto",
                "legal": "",
                "web": "https://computecrypto.com",
                "riot": "",
                "email": "computecrypto@gmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 58197740633833,
            "commission": "5%"
        },
        {
            "accountId": "13YJ7PrjwAhKHP9m99APDSuvLwWKSQSmKABfJY3H2Cepk2CA",
            "identity": {
                "display": "www.isg.dev",
                "legal": "Inform Systems Group LLC",
                "web": "https://www.isg.dev/polkadot",
                "riot": "@ignatev:matrix.org",
                "email": "info@isg.dev",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@infsysgroup"
            },
            "staked": 50551755865711,
            "commission": "2%"
        },
        {
            "accountId": "129LBt5T1eYtnGHbPYeiiMdmWfokCiiq7z6JBfjnYifiombz",
            "identity": {
                "display": "Pioneer",
                "legal": "",
                "web": "",
                "riot": "@sachik0:matrix.org",
                "email": "pioneer.validator@gmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 60608009675413,
            "commission": "3%"
        },
        {
            "accountId": "15tfUt4iQNjMyhZiJGBf4EpETE2KqtW1nfJwbBT1MvWjvcK9",
            "identity": {
                "display": "Tesla",
                "legal": "",
                "web": "",
                "riot": "",
                "email": "tesla.validation@gmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 50877312718235,
            "commission": "5%"
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
            "staked": 50569183315895,
            "commission": "5%"
        },
        {
            "accountId": "16HvKyV9B61hsop3ZY6pWYeV537S29kd9pb9FMrPzx49ym5X",
            "identity": {
                "display": "TheGuild",
                "legal": "",
                "web": "",
                "riot": "",
                "email": "theguildsource@gmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 50752484986679,
            "commission": "3%"
        },
        {
            "accountId": "13EEEhiXeCFpFjVQxmjJsHjr9LFvnAurcnwQ1FDgB5LmJwQp",
            "identity": {
                "display": "Swiss Bond",
                "legal": "",
                "web": "",
                "riot": "",
                "email": "swissbondpolkadot@gmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 102599915080861,
            "commission": "5%"
        },
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
            "staked": 201980868172818,
            "commission": "5%"
        },
        {
            "accountId": "13GtCixw3EZARj52CVbKLrsAzyc7dmmYhDV6quS5yeVCfnh1",
            "identity": {
                "display": "RADIUMBLOCK.COM",
                "legal": "",
                "web": "https://radiumblock.com",
                "riot": "",
                "email": "info@radiumblock.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@radiumblock"
            },
            "staked": 56724467979303,
            "commission": "3%"
        }
    ],
    "era": 861
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
            "staked": 115410960723978,
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
            "accountId": "Gve4JFfF5YkZJNwKTbRVTQCkLXJJhzjJszJjxPvHLb9fho5",
            "identity": {
                "display": "BRAVEBAT",
                "legal": "",
                "web": "https://bravebat.info",
                "riot": "@bravebat:matrix.org",
                "email": "bravebatinfo@gmail.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@BraveBatInfo"
            },
            "staked": 119561880341259,
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
            "staked": 113565294273549,
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
            "staked": 259465989503264,
            "commission": "3%"
        },
        {
            "accountId": "EiMA69PZWju1jmisAU3ubN4wJQgBexnFXZpWb7aMtftP5rV",
            "identity": {
                "display": "Generic-Chain",
                "legal": "Two Pebbles Ventures",
                "web": "https://generic-chain.io",
                "riot": "@generic-chain:matrix.org",
                "email": "info@generic-chain.io",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@generic_chain"
            },
            "staked": 116022753229528,
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
            "staked": 130481865107233,
            "commission": "5%"
        },
        {
            "accountId": "HU6TSsvA84GKrTiyArBHiFDVBSLHNr5Ki3qPV7T8WKyVJaz",
            "identity": {
                "display": "🍀ARISTOPHANES🍀",
                "legal": "AKIRA YASUKAWA",
                "web": "https://pythagoras-capital.net",
                "riot": "@pythagoras.c.i:matrix.org",
                "email": "subscr3zp@tutanota.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@PythagorasCI"
            },
            "staked": 113107114451886,
            "commission": "3%"
        },
        {
            "accountId": "EchB8XdgqCWS6dbBzhrgtPtrADfyQV9qRAAC9Q7dWbpYZVS",
            "identity": {
                "display": "stake-machine.com",
                "legal": "",
                "web": "https://stake-machine.com",
                "riot": "@akme:matrix.org",
                "email": "",
                "pgpFingerprint": "",
                "image": "",
                "twitter": "@StakeMachine"
            },
            "staked": 110979760808510,
            "commission": "5%"
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
            "staked": 120948910693396,
            "commission": "3%"
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
            "staked": 131126190473627,
            "commission": "15%"
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
            "accountId": "CyzTh1chfwDa5GuBDfE3BC7e1H7Jnvoz21gf79ckeMJ7xeg",
            "identity": {
                "display": "9Stake by 9GAG",
                "legal": "",
                "web": "",
                "riot": "@9stake.9gag:matrix.org",
                "email": "9stake.kusama@9gag.com",
                "pgpFingerprint": "",
                "image": "",
                "twitter": ""
            },
            "staked": 151909568183663,
            "commission": "3%"
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
            "staked": 130938582876705,
            "commission": "5%"
        }
    ],
    "era": 4307
}
},{}]},{},[2]);
