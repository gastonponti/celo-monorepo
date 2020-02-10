# TransactionResult

Replacement interface for web3's `PromiEvent`. Instead of emiting events to signal different stages, eveything is exposed as a promise. Which ends up being nicer when doing promise/async based programming.

## Hierarchy

* **TransactionResult**

## Index

### Constructors

* [constructor](../classes/_utils_tx_result_.transactionresult.md#constructor)

### Methods

* [getHash](../classes/_utils_tx_result_.transactionresult.md#gethash)
* [waitReceipt](../classes/_utils_tx_result_.transactionresult.md#waitreceipt)

## Constructors

### constructor

+ **new TransactionResult**\(`pe`: PromiEvent‹any›\): [_TransactionResult_](../classes/_utils_tx_result_.transactionresult.md)

_Defined in_ [_packages/contractkit/src/utils/tx-result.ts:24_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/tx-result.ts#L24)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `pe` | PromiEvent‹any› |

**Returns:** [_TransactionResult_](../classes/_utils_tx_result_.transactionresult.md)

## Methods

### getHash

▸ **getHash**\(\): _Promise‹string›_

_Defined in_ [_packages/contractkit/src/utils/tx-result.ts:48_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/tx-result.ts#L48)

Get \(& wait for\) transaction hash

**Returns:** _Promise‹string›_

### waitReceipt

▸ **waitReceipt**\(\): _Promise‹TransactionReceipt›_

_Defined in_ [_packages/contractkit/src/utils/tx-result.ts:60_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/tx-result.ts#L60)

Get \(& wait for\) transaction receipt

**Returns:** _Promise‹TransactionReceipt›_

