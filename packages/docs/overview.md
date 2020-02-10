# Celo Overview

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

We can get the cGold balance of an account using the gold token wrapper with `goldtoken.balanceOf(address)`.  Let's check the balance of this address `'0xD86518b29BB52a5DAC5991eACf09481CE4B0710d'`

```javascript
let anAddress = '0xD86518b29BB52a5DAC5991eACf09481CE4B0710d'

kit.contracts.getGoldToken().then(goldtoken => { 
    goldtoken.balanceOf(anAddress).then(balance => {
        console.log(balance.toString())
    })
})
```

The `balanceOf(address)` function also returns a Promise, so we wait for the promise to resolve then we print the result. 

You may notice that we convert the balance to a string before we print it. This is because the `balanceOf()` function returns a [BigNumber](https://github.com/MikeMcl/bignumber.js/). Javascript does not have floating point numbers, so it is common to convert integers to large numbers before doing arithmetic. So 1 cGold = 10\*\*18 base units of cGold. The `balanceOf()` function returns the account balance in these base units. Converting the BigNumber to a string converts the BigNumber object into a more legible string.

Reading other account balances is interesting, but how can we send value to each other on the test net?

We need to do a few things:

1. Create an account \(create a private key\)
2. Fund it with test cGold and cDollars
3. Sign and send transactions to the network

### Accounts

We are accessing the Celo network via a remote node via HTTP requests at `'https://alfajores-forno.celo-testnet.org'`. 

Don't worry about what this means right now, just understand that it is easier to get started using Celo by accessing remote nodes, rather than running them locally on your machine. You can [read more about the details of the Celo network here.](overview.md#topology-of-a-celo-network)

Because we are accessing the network remotely, we need to generate an account to sign transactions and fund that account with test cGold.

There is a short script in `getAccount.js` to either get a Celo account from a mnemonic in the `.secret` file, or create a random account if the file is empty. In the script, we use`ethers.js` to create a new account. [Ethers.js](https://docs.ethers.io/ethers.js/html/index.html) is a popular javascript library for handling Ethereum related functionality. Celo is a cousin of Ethereum, so this library will work well for generating new Celo accounts.

We can now use this `wallet` to get account information \(ie the private key and account address\) and to send transactions from `wallet.account`. We can read the account balance:

{% tabs %}
{% tab title="helloCello.js" %}
```javascript
// add the following line to the top of your helloCelo.js
const getAccount = require('./getAccount').getAccount()

getAccount().then(wallet => {
    kit.contracts.getGoldToken().then(goldtoken => { 
        goldtoken.balanceOf(wallet.address).then(balance => {
            console.log(wallet.address)
            console.log(balance.toString())
        })
    })    
})
```
{% endtab %}
{% endtabs %}

This will print `0`, as we have not funded the associated account yet.

### Using the faucet

We can get free cGold and cDollars on the test network for development via [the Celo Alfajores faucet](https://celo.org/build/faucet).

Copy your randomly generated account address from the console output mentioned above, and paste it into the faucet. 

Once your account has been funded, run `$ node helloCelo.js` again to see your update balance.

### Sending Value

We have an account with cGold in it, now how do we send it to another account. Remember the Gold Token wrapper we used to read account balances earlier? We can use the same wrapper to send tokens, you just need to add the private key associated with your account to ContractKit \(see line 10\). 

The Gold Token wrapper has a method called `transfer(address, amount)` that allows you to send value to the specified address \(line 14\). 

You need to `send()` the transaction to the network after you construct it. This method returns a transaction object. We are will wait for the transaction receipt \(which will be returned when the transaction has been included in the blockchain\_ and print it when we get it. This receipt contains information about the transaction.

After we read the receipt, we check the balance of our account again, using the `balanceOf()` function. The logs print our updated balance!

You may notice that the account balance is a bit smaller than the amount of tokens that we sent. This is because you have to pay for every update to the network.

{% code title="helloCelo.js" %}
```javascript
const Kit = require('@celo/contractkit')
const getAccount = require('./getAccount').getAccount

const kit = Kit.newKit('https://alfajores-forno.celo-testnet.org')

let anAddress = '0xD86518b29BB52a5DAC5991eACf09481CE4B0710d'

getAccount().then(wallet => {
    // add your private key to ContractKit
    kit.addAccount(wallet.privateKey)
    
    // get the Gold Token wrapper
    kit.contracts.getGoldToken().then(goldtoken => { 
        goldtoken.transfer(anAddress, 100000).send({from: wallet.address}).then(tx => {
            return tx.waitReceipt()
        }).then(receipt => {
            console.log(receipt)
            return goldtoken.balanceOf(wallet.address)
        }).then(balance => {
            console.log(balance.toString())
        })
    })    
})
```
{% endcode %}

### Wrapping Up

Congratulations! You have accomplished a lot in this short introduction to developing on Celo. 

We covered:

* Installing and setting up ContractKit 
* Connecting to the Celo Alfajores network
* Getting the cGold contract wrapper
* Reading account balances using the cGold wrapper
* Generating a new account in Celo
* Funding an account using the Celo Alfajores Faucet
* Sending cGold



