# Query-Contract-Logs-Ethereum
A script to query the contract event logs of a smart contract on ethereum using web3 library

You can use this script to query past events of a smart contract. 

Example Used: Uniswap V2 Factory 

Requirements: Node, Web3.js 

Contract ABI: You can replace contract ABI for any smart contract by getting it from www.etherscan.io

START_BLOCK and END_BLOCK are self explanatory, replace with your own values. 

Filters can be added if 'allEvents' is replaced with the event name, for example 'PairCreated'
