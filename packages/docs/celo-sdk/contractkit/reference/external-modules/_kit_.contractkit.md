# ContractKit

## Hierarchy

* **ContractKit**

## Index

### Constructors

* [constructor](../classes/_kit_.contractkit.md#constructor)

### Properties

* [\_web3Contracts](../classes/_kit_.contractkit.md#_web3contracts)
* [contracts](../classes/_kit_.contractkit.md#contracts)
* [registry](../classes/_kit_.contractkit.md#registry)
* [web3](../classes/_kit_.contractkit.md#web3)

### Accessors

* [defaultAccount](../classes/_kit_.contractkit.md#defaultaccount)
* [defaultFeeCurrency](../classes/_kit_.contractkit.md#defaultfeecurrency)
* [gasInflationFactor](../classes/_kit_.contractkit.md#gasinflationfactor)

### Methods

* [addAccount](../classes/_kit_.contractkit.md#addaccount)
* [getEpochNumberOfBlock](../classes/_kit_.contractkit.md#getepochnumberofblock)
* [getFirstBlockNumberForEpoch](../classes/_kit_.contractkit.md#getfirstblocknumberforepoch)
* [getLastBlockNumberForEpoch](../classes/_kit_.contractkit.md#getlastblocknumberforepoch)
* [getNetworkConfig](../classes/_kit_.contractkit.md#getnetworkconfig)
* [getTotalBalance](../classes/_kit_.contractkit.md#gettotalbalance)
* [isListening](../classes/_kit_.contractkit.md#islistening)
* [isSyncing](../classes/_kit_.contractkit.md#issyncing)
* [sendTransaction](../classes/_kit_.contractkit.md#sendtransaction)
* [sendTransactionObject](../classes/_kit_.contractkit.md#sendtransactionobject)
* [setFeeCurrency](../classes/_kit_.contractkit.md#setfeecurrency)

## Constructors

### constructor

+ **new ContractKit**\(`web3`: Web3\): [_ContractKit_](../classes/_kit_.contractkit.md)

_Defined in_ [_packages/contractkit/src/kit.ts:74_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L74)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `web3` | Web3 |

**Returns:** [_ContractKit_](../classes/_kit_.contractkit.md)

## Properties

### \_web3Contracts

• **\_web3Contracts**: [_Web3ContractCache_](../classes/_web3_contract_cache_.web3contractcache.md)

_Defined in_ [_packages/contractkit/src/kit.ts:70_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L70)

factory for core contract's native web3 wrappers

### contracts

• **contracts**: [_WrapperCache_](../classes/_contract_cache_.wrappercache.md)

_Defined in_ [_packages/contractkit/src/kit.ts:72_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L72)

factory for core contract's kit wrappers

### registry

• **registry**: [_AddressRegistry_](../classes/_address_registry_.addressregistry.md)

_Defined in_ [_packages/contractkit/src/kit.ts:68_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L68)

core contract's address registry

### web3

• **web3**: _Web3_

_Defined in_ [_packages/contractkit/src/kit.ts:75_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L75)

## Accessors

### defaultAccount

• **get defaultAccount**\(\): [_Address_](_base_.md#address)

_Defined in_ [_packages/contractkit/src/kit.ts:167_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L167)

Default account for generated transactions \(eg. tx.from\)

**Returns:** [_Address_](_base_.md#address)

• **set defaultAccount**\(`address`: [Address](_base_.md#address)\): _void_

_Defined in_ [_packages/contractkit/src/kit.ts:159_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L159)

Set default account for generated transactions \(eg. tx.from \)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | [Address](_base_.md#address) |

**Returns:** _void_

### defaultFeeCurrency

• **get defaultFeeCurrency**\(\): _null \| string_

_Defined in_ [_packages/contractkit/src/kit.ts:191_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L191)

Set the ERC20 address for the token to use to pay for transaction fees. The ERC20 must be whitelisted for gas.

Set to `null` to use cGold

**Returns:** _null \| string_

• **set defaultFeeCurrency**\(`address`: [Address](_base_.md#address) \| null\): _void_

_Defined in_ [_packages/contractkit/src/kit.ts:187_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L187)

Set the ERC20 address for the token to use to pay for transaction fees. The ERC20 must be whitelisted for gas.

Set to `null` to use cGold

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `address` | [Address](_base_.md#address) \| null | ERC20 address |

**Returns:** _void_

### gasInflationFactor

• **get gasInflationFactor**\(\): _number_

_Defined in_ [_packages/contractkit/src/kit.ts:175_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L175)

**Returns:** _number_

• **set gasInflationFactor**\(`factor`: number\): _void_

_Defined in_ [_packages/contractkit/src/kit.ts:171_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L171)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `factor` | number |

**Returns:** _void_

## Methods

### addAccount

▸ **addAccount**\(`privateKey`: string\): _void_

_Defined in_ [_packages/contractkit/src/kit.ts:152_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L152)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `privateKey` | string |

**Returns:** _void_

### getEpochNumberOfBlock

▸ **getEpochNumberOfBlock**\(`blockNumber`: number\): _Promise‹number›_

_Defined in_ [_packages/contractkit/src/kit.ts:282_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L282)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `blockNumber` | number |

**Returns:** _Promise‹number›_

### getFirstBlockNumberForEpoch

▸ **getFirstBlockNumberForEpoch**\(`epochNumber`: number\): _Promise‹number›_

_Defined in_ [_packages/contractkit/src/kit.ts:268_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L268)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `epochNumber` | number |

**Returns:** _Promise‹number›_

### getLastBlockNumberForEpoch

▸ **getLastBlockNumberForEpoch**\(`epochNumber`: number\): _Promise‹number›_

_Defined in_ [_packages/contractkit/src/kit.ts:275_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L275)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `epochNumber` | number |

**Returns:** _Promise‹number›_

### getNetworkConfig

▸ **getNetworkConfig**\(\): _Promise‹_[_NetworkConfig_](../interfaces/_kit_.networkconfig.md)_›_

_Defined in_ [_packages/contractkit/src/kit.ts:102_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L102)

**Returns:** _Promise‹_[_NetworkConfig_](../interfaces/_kit_.networkconfig.md)_›_

### getTotalBalance

▸ **getTotalBalance**\(`address`: string\): _Promise‹AccountBalance›_

_Defined in_ [_packages/contractkit/src/kit.ts:86_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L86)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | string |

**Returns:** _Promise‹AccountBalance›_

### isListening

▸ **isListening**\(\): _Promise‹boolean›_

_Defined in_ [_packages/contractkit/src/kit.ts:195_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L195)

**Returns:** _Promise‹boolean›_

### isSyncing

▸ **isSyncing**\(\): _Promise‹boolean›_

_Defined in_ [_packages/contractkit/src/kit.ts:199_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L199)

**Returns:** _Promise‹boolean›_

### sendTransaction

▸ **sendTransaction**\(`tx`: Tx\): _Promise‹_[_TransactionResult_](../classes/_utils_tx_result_.transactionresult.md)_›_

_Defined in_ [_packages/contractkit/src/kit.ts:211_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L211)

Send a transaction to celo-blockchain.

Similar to `web3.eth.sendTransaction()` but with following differences:

* applies kit tx's defaults
* estimatesGas before sending
* returns a `TransactionResult` instead of `PromiEvent`

**Parameters:**

| Name | Type |
| :--- | :--- |
| `tx` | Tx |

**Returns:** _Promise‹_[_TransactionResult_](../classes/_utils_tx_result_.transactionresult.md)_›_

### sendTransactionObject

▸ **sendTransactionObject**\(`txObj`: TransactionObject‹any›, `tx?`: Omit‹Tx, "data"›\): _Promise‹_[_TransactionResult_](../classes/_utils_tx_result_.transactionresult.md)_›_

_Defined in_ [_packages/contractkit/src/kit.ts:230_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L230)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `txObj` | TransactionObject‹any› |
| `tx?` | Omit‹Tx, "data"› |

**Returns:** _Promise‹_[_TransactionResult_](../classes/_utils_tx_result_.transactionresult.md)_›_

### setFeeCurrency

▸ **setFeeCurrency**\(`token`: [CeloToken](_base_.md#celotoken)\): _Promise‹void›_

_Defined in_ [_packages/contractkit/src/kit.ts:147_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/kit.ts#L147)

Set CeloToken to use to pay for gas fees

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `token` | [CeloToken](_base_.md#celotoken) | cUsd or cGold |

**Returns:** _Promise‹void›_

