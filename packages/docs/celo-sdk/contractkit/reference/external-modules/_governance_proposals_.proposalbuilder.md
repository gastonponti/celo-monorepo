# ProposalBuilder

## Hierarchy

* **ProposalBuilder**

## Index

### Constructors

* [constructor](../classes/_governance_proposals_.proposalbuilder.md#constructor)

### Methods

* [addJsonTx](../classes/_governance_proposals_.proposalbuilder.md#addjsontx)
* [addProxyRepointingTx](../classes/_governance_proposals_.proposalbuilder.md#addproxyrepointingtx)
* [addTx](../classes/_governance_proposals_.proposalbuilder.md#addtx)
* [addWeb3Tx](../classes/_governance_proposals_.proposalbuilder.md#addweb3tx)
* [build](../classes/_governance_proposals_.proposalbuilder.md#build)
* [fromWeb3tx](../classes/_governance_proposals_.proposalbuilder.md#fromweb3tx)

## Constructors

### constructor

+ **new ProposalBuilder**\(`kit`: [ContractKit](../classes/_kit_.contractkit.md), `builders`: Array‹function›\): [_ProposalBuilder_](../classes/_governance_proposals_.proposalbuilder.md)

_Defined in_ [_packages/contractkit/src/governance/proposals.ts:51_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/governance/proposals.ts#L51)

**Parameters:**

| Name | Type | Default |
| :--- | :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) | - |
| `builders` | Array‹function› | \[\] |

**Returns:** [_ProposalBuilder_](../classes/_governance_proposals_.proposalbuilder.md)

## Methods

### addJsonTx

▸ **addJsonTx**\(`tx`: [ProposalTransactionJSON](../interfaces/_governance_proposals_.proposaltransactionjson.md)\): _number_

_Defined in_ [_packages/contractkit/src/governance/proposals.ts:84_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/governance/proposals.ts#L84)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `tx` | [ProposalTransactionJSON](../interfaces/_governance_proposals_.proposaltransactionjson.md) |

**Returns:** _number_

### addProxyRepointingTx

▸ **addProxyRepointingTx**\(`proxyAddress`: string, `newImplementationAddress`: string\): _void_

_Defined in_ [_packages/contractkit/src/governance/proposals.ts:65_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/governance/proposals.ts#L65)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `proxyAddress` | string |
| `newImplementationAddress` | string |

**Returns:** _void_

### addTx

▸ **addTx**\(`tx`: [CeloTransactionObject](../classes/_wrappers_basewrapper_.celotransactionobject.md)‹any›, `params`: Partial‹ProposalTxParams›\): _void_

_Defined in_ [_packages/contractkit/src/governance/proposals.ts:75_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/governance/proposals.ts#L75)

**Parameters:**

| Name | Type | Default |
| :--- | :--- | :--- |
| `tx` | [CeloTransactionObject](../classes/_wrappers_basewrapper_.celotransactionobject.md)‹any› | - |
| `params` | Partial‹ProposalTxParams› | {} |

**Returns:** _void_

### addWeb3Tx

▸ **addWeb3Tx**\(`tx`: TransactionObject‹any›, `params`: ProposalTxParams\): _number_

_Defined in_ [_packages/contractkit/src/governance/proposals.ts:72_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/governance/proposals.ts#L72)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `tx` | TransactionObject‹any› |
| `params` | ProposalTxParams |

**Returns:** _number_

### build

▸ **build**\(\): _Promise‹object\[\]›_

_Defined in_ [_packages/contractkit/src/governance/proposals.ts:57_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/governance/proposals.ts#L57)

**Returns:** _Promise‹object\[\]›_

### fromWeb3tx

▸ **fromWeb3tx**\(`tx`: TransactionObject‹any›, `params`: ProposalTxParams\): [_ProposalTransaction_](_wrappers_governance_.md#proposaltransaction)

_Defined in_ [_packages/contractkit/src/governance/proposals.ts:59_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/governance/proposals.ts#L59)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `tx` | TransactionObject‹any› |
| `params` | ProposalTxParams |

**Returns:** [_ProposalTransaction_](_wrappers_governance_.md#proposaltransaction)

