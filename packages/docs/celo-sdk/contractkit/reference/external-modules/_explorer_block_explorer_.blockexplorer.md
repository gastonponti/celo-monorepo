# BlockExplorer

## Hierarchy

* **BlockExplorer**

## Index

### Constructors

* [constructor](../classes/_explorer_block_explorer_.blockexplorer.md#constructor)

### Properties

* [contractDetails](../classes/_explorer_block_explorer_.blockexplorer.md#contractdetails)

### Methods

* [fetchBlock](../classes/_explorer_block_explorer_.blockexplorer.md#fetchblock)
* [fetchBlockByHash](../classes/_explorer_block_explorer_.blockexplorer.md#fetchblockbyhash)
* [fetchBlockRange](../classes/_explorer_block_explorer_.blockexplorer.md#fetchblockrange)
* [parseBlock](../classes/_explorer_block_explorer_.blockexplorer.md#parseblock)
* [tryParseTx](../classes/_explorer_block_explorer_.blockexplorer.md#tryparsetx)

## Constructors

### constructor

+ **new BlockExplorer**\(`kit`: [ContractKit](../classes/_kit_.contractkit.md), `contractDetails`: [ContractDetails](../interfaces/_explorer_base_.contractdetails.md)\[\]\): [_BlockExplorer_](../classes/_explorer_block_explorer_.blockexplorer.md)

_Defined in_ [_packages/contractkit/src/explorer/block-explorer.ts:35_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/explorer/block-explorer.ts#L35)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) |
| `contractDetails` | [ContractDetails](../interfaces/_explorer_base_.contractdetails.md)\[\] |

**Returns:** [_BlockExplorer_](../classes/_explorer_block_explorer_.blockexplorer.md)

## Properties

### contractDetails

• **contractDetails**: [_ContractDetails_](../interfaces/_explorer_base_.contractdetails.md)_\[\]_

_Defined in_ [_packages/contractkit/src/explorer/block-explorer.ts:37_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/explorer/block-explorer.ts#L37)

## Methods

### fetchBlock

▸ **fetchBlock**\(`blockNumber`: number\): _Promise‹Block›_

_Defined in_ [_packages/contractkit/src/explorer/block-explorer.ts:57_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/explorer/block-explorer.ts#L57)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `blockNumber` | number |

**Returns:** _Promise‹Block›_

### fetchBlockByHash

▸ **fetchBlockByHash**\(`blockHash`: string\): _Promise‹Block›_

_Defined in_ [_packages/contractkit/src/explorer/block-explorer.ts:53_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/explorer/block-explorer.ts#L53)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `blockHash` | string |

**Returns:** _Promise‹Block›_

### fetchBlockRange

▸ **fetchBlockRange**\(`from`: number, `to`: number\): _Promise‹Block\[\]›_

_Defined in_ [_packages/contractkit/src/explorer/block-explorer.ts:61_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/explorer/block-explorer.ts#L61)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `from` | number |
| `to` | number |

**Returns:** _Promise‹Block\[\]›_

### parseBlock

▸ **parseBlock**\(`block`: Block\): [_ParsedBlock_](../interfaces/_explorer_block_explorer_.parsedblock.md)

_Defined in_ [_packages/contractkit/src/explorer/block-explorer.ts:69_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/explorer/block-explorer.ts#L69)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `block` | Block |

**Returns:** [_ParsedBlock_](../interfaces/_explorer_block_explorer_.parsedblock.md)

### tryParseTx

▸ **tryParseTx**\(`tx`: Transaction\): _null \|_ [_ParsedTx_](../interfaces/_explorer_block_explorer_.parsedtx.md)

_Defined in_ [_packages/contractkit/src/explorer/block-explorer.ts:84_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/explorer/block-explorer.ts#L84)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `tx` | Transaction |

**Returns:** _null \|_ [_ParsedTx_](../interfaces/_explorer_block_explorer_.parsedtx.md)

