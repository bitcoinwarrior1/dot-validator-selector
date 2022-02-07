# dot-validator-selector
Get the best staking validators programmatically. 

## Introduction
Selecting validators for staking your DOT/KSM is an arduous process and one that is uncertain and confusing for most users. The aim of this module is to auto select validators based on the criteria below so that the user doesn't have to. Since most users are not well versed in knowing which validators are best, this module should make a better decision on average without the time commitment necessary to select your own. 

## Criteria
This program selects validators based on the following criteria:
- Their identity is verified 
- Their commission is within an acceptable range e.g. no less than 0.5% and no greater than 20%
- The validator is not oversubscribed, allowing you to earn rewards as a nominator
- The validator has skin in the game, represented by their own stake e.g. they have deposited 1000 DOT of their own capital 
- Each validator is run by a unique entity
- The validator has never been slashed
- The validator is currently elected to validate transactions and earn rewards 

Further reading [here](https://wiki.polkadot.network/docs/learn-nominator#filter-out-validators-with-undesirable-traits).

## Getting started
Install the modules with `npm i` & run the tests with `npm run test`. 

You can also download the module via [NPM](https://www.npmjs.com/package/dot-validator-selector).

## Usage 

### js
```js
// initialise the polkadot api object 
const { ApiPromise, WsProvider} = require("@polkadot/api");
const api = await ApiPromise.create({ provider: new WsProvider("YOUR_PROVIDER") });

// initialise the selector
const selector = new ValidatorSelector(api, MAX_COMMISSION, MIN_STAKING, ERA); // set ERA to 0 or undefined if you want to use the current era

// get n number of validators matching the criteria
selector.getValidators(n);

> [{ "accountId": "1REAJ1k691g5Eqqg9gL7vvZCBG7FCCZ8zgQkZWd4va5ESih", "identity": { "additional": [], "display": { "raw": "0x506f6c6b61646f742e70726f202d205265616c676172" }, "legal": { "none": null }, "web": { "raw": "0x68747470733a2f2f706f6c6b61646f742e70726f" }, "riot": { "raw": "0x407265616c6761723a6d61747269782e6f7267" }, "email": { "raw": "0x68656c6c6f40706f6c6b61646f742e70726f" }, "pgpFingerprint": null, "image": { "none": null }, "twitter": { "raw": "0x4070726f706f6c6b61646f74" } }, "staked": 156300000000, "commission": "1%" }, ...]

// check if a user's validators are meeting the criteria
selector.getUserValidatorsMeetCriteria(userAccountId);

> [{ "accountId": "13mK8AssyPekT5cFuYQ7ijKNXcjHPq8Gnx6TxF5eFCAwoLQ", "match": false }, ...]
```
### via cURL
Cached snapshots of a particular era can be retrieved via cURL:
```shell
$ curl https://raw.githubusercontent.com/James-Sangalli/dot-validator-selector/gh-pages/cache/dot/601.json 
```
Or get a cached snapshot of the latest era in the repo:
```shell
$ curl https://raw.githubusercontent.com/James-Sangalli/dot-validator-selector/gh-pages/web-sample/dot/latest.json
```

Example output: 

```
[{
    "accountId": "Cs7UFcNBsBV4Y65GsM3bDzpvinMKFQZyt6x9TrhVhc8ps4E",
    "identity": {
        "display": "⛓ NOVY ⛓ ",
        "legal": "NOVY",
        "web": "https://stake.novy.pw",
        "riot": "@novy4:matrix.org",
        "email": "stake@novy.pw",
        "pgpFingerprint": "",
        "image": "",
        "twitter": "@lost_inchains"
    },
    "staked": 91697150371972,
    "commission": "6%"
}, ...]
```


## See a sample
If you want to see this module in action for Polkadot or Kusama, you can try it out [here](https://james-sangalli.github.io/dot-validator-selector/). It will randomly select 16/24 validators meeting the criteria for Polkadot/Kusama. 

## Cached validators
Since this module can be slow to select validators, it is possible to cache them for the current era using `npm run updateCache` and then retrieve them as above with the cURL instructions. You can see some examples in the cache folder [here](https://github.com/James-Sangalli/dot-validator-selector/tree/gh-pages/cache).


## Tip
- DOT: [J3qfuceTakrXaiRTf6c7ByVYJjtoiyhoc1aeS5YNLGdqFSb](https://polkadot.subscan.io/account/J3qfuceTakrXaiRTf6c7ByVYJjtoiyhoc1aeS5YNLGdqFSb)
- KSM: [16UX9vXqh11QDTuVebLZMPSeFLTJhMifRiuKR4nwSd5fGQJz](https://kusama.subscan.io/account/16UX9vXqh11QDTuVebLZMPSeFLTJhMifRiuKR4nwSd5fGQJz)

Thank you to the treasury for this [tip](https://www.dotreasury.com/ksm/tips/0xf0394919f58a62df369583f23f8b3da6553df93628732fb4d8f8ea22e0582a2e)!
