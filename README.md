# dot-validator-selector
Get the best staking validators programmatically 

## Introduction
Selecting validators for staking your DOT/KSM is an arduous process and one that is uncertain and confusing for most users. The aim of this module is to auto select validators based on the criteria below so that the user doesn't have to. Unless the user is a hardcore power user, the module should make a better decision than the user would without all the time required to research how to select a validator. 

## Criteria
This program selects validators based on the following criteria:
- Identity is verified
- Commission is acceptable
- Validator is not oversubscribed 
- Has an acceptable stake in the pool i.e. skin in the game 
- Unique entities i.e. this won't select more than 1 of each type e.g. 1 Zug capital but not 10 Zug capital entities 
- Has never been slashed

Further reading [here](https://wiki.polkadot.network/docs/learn-nominator#filter-out-validators-with-undesirable-traits).

## Getting started
Install the modules with `npm i` & run the tests with `npm run test`

## Usage 
```js
// initialise the polkadot api object 
const { ApiPromise, WsProvider} = require("@polkadot/api");
const api = await ApiPromise.create({ provider: new WsProvider("YOUR_PROVIDER") });

// initialise the selector
const selector = new ValidatorSelector(api, MAX_COMMISSION, MIN_STAKING, ERA); // set ERA to 0 or undefined if you don't want to focus on a particular time

// get n number of validators matching the criteria
selector.getValidators(n);

> [{ "accountId": "1REAJ1k691g5Eqqg9gL7vvZCBG7FCCZ8zgQkZWd4va5ESih", "identity": { "additional": [], "display": { "raw": "0x506f6c6b61646f742e70726f202d205265616c676172" }, "legal": { "none": null }, "web": { "raw": "0x68747470733a2f2f706f6c6b61646f742e70726f" }, "riot": { "raw": "0x407265616c6761723a6d61747269782e6f7267" }, "email": { "raw": "0x68656c6c6f40706f6c6b61646f742e70726f" }, "pgpFingerprint": null, "image": { "none": null }, "twitter": { "raw": "0x4070726f706f6c6b61646f74" } }, "staked": 156300000000, "commission": "1%" }, ...]
```

## See a sample
If you want to see this module in action, go to [this website](https://james-sangalli.github.io/dot-validator-selector/) and wait for it to select 12 validators matching the criteria on the Polkadot network. 
