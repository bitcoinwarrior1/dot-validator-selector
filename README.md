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

## See a sample
If you want to see this module in action, go to [this website](https://james-sangalli.github.io/dot-validator-selector/) and wait for it to select 12 validators matching the criteria on the Polkadot network. 
