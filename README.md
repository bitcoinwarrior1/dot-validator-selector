# dot-validator-selector
Get the best staking validators programmatically 

## Introduction
Selecting validators for staking your DOT/KSM is an arduous process and one that is uncertain and confusing for most users. We hope to eliminate this complexity by ranking validators on a criteria and finding ones that fit so that the user doesn't have to do it themselves. 

## Criteria
This program selects validators based on the following criteria:
- Identity is verified
- Commission is acceptable (<20%)
- Validator is not oversubscribed 
- Has own stake in the pool 
- Unique entities i.e. this won't select more than 1 of each type e.g. Zug capital but not 10 zug capital entities 
- Has never been slashed

Further reading [here](https://wiki.polkadot.network/docs/learn-nominator#filter-out-validators-with-undesirable-traits)

## Getting started
Install the modules with `npm i` & run the tests with `npm run test`
