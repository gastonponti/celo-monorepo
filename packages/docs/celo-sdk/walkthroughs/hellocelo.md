---
description: >-
  In this guide we are going to learn how to connect to the Celo test network
  using ContractKit.
---

# Hello Celo: sending value with Celo

In this guide we are going to write a Node.js script to introduce some of the basic concepts that are important to understand how Celo works. This will get us started with connecting to the Celo network and learning how to develop more advanced applications.

{% hint style="info" %}
 We assume you already have Node.js and NPM installed on your computer.
{% endhint %}

### Learning Objectives

At the end of this guide, you will be able to:

* Connect to the Celo test network, called Alfajores
* Get test cGold and cDollars from the faucet
* Read account and contract information from the test network
* Send transactions to the network

### Repo

To start, clone this GitHub repo. This is a Node.js application.

We will be using the Celo ContractKit SDK to interact with the Celo test network. Let's install it.

```javascript
npm install @celo/contractkit
```

We will be writing our Node.js app in the `helloCello.js` file. 

### Importing ContractKit

Importing the contract kit into our script is as easy as

{% code title="helloCello.js" %}
```javascript
const Kit = require('@celo/contractkit')
```
{% endcode %}

Now we can use the Kit to connect to the network.

{% code title="helloCello.js" %}
```javascript
const kit = Kit.newKit('https://alfajores-forno.celo-testnet.org')
```
{% endcode %}

{% hint style="info" %}
At any point in the file you can `console.log()` variables to print their output when you run the script.
{% endhint %}

### Reading Alfajores

ContractKit contains a `contracts` property that we can use to access certain information about deployed Celo contracts.

The Celo blockchain has two native assets, Celo Gold \(cGold\) and the Celo Dollar \(cDollar\). Both of these assets implement the [ERC20 token standard](https://eips.ethereum.org/EIPS/eip-20) from Ethereum.

Let's read some token balances from the blockchain. The cGold asset is managed by the Celo Gold smart contract. We can access the gold contract with the SDK with `kit.contracts.getGoldToken()`. This function returns a promise, so we have to wait for it to resolve before we can interact with the gold token contract. If you are unfamiliar with Promises in Javascript, [check out this documentation.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Promises are a frequent tool in blockchain development.

```javascript
kit.contracts.getGoldToken().then(goldtoken => {
    console.log(goldtoken)
})
```

Adding this code to `helloCello.js` and running it will print the Gold Token Wrapper provided by ContractKit.

We can get the cGold balance of an account using the gold token wrapper with `goldtoken.balanceOf(address)`.  Let's get the

### Accounts

We are accessing the Celo network via a remote node via HTTP requests at `'https://alfajores-forno.celo-testnet.org'`. 

Don't worry about what this means right now, just understand that it is easier to get started using Celo by accessing remote nodes, rather than running them locally on your machine. [read more about the details of the Celo network here.](../../overview.md#topology-of-a-celo-network)

We need to generate accounts to sign 



