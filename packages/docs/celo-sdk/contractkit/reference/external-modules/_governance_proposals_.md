# governance/proposals

## Index

### Classes

* [ProposalBuilder](../classes/_governance_proposals_.proposalbuilder.md)

### Interfaces

* [ProposalTransactionJSON](../interfaces/_governance_proposals_.proposaltransactionjson.md)

### Variables

* [HOTFIX\_PARAM\_ABI\_TYPES](_governance_proposals_.md#const-hotfix_param_abi_types)

### Functions

* [hotfixToEncodedParams](_governance_proposals_.md#const-hotfixtoencodedparams)
* [hotfixToHash](_governance_proposals_.md#const-hotfixtohash)
* [proposalToJSON](_governance_proposals_.md#const-proposaltojson)

## Variables

### `Const` HOTFIX\_PARAM\_ABI\_TYPES

• **HOTFIX\_PARAM\_ABI\_TYPES**: _string\[\]_ = getAbiTypes\(GovernanceABI as any, 'executeHotfix'\)

_Defined in_ [_packages/contractkit/src/governance/proposals.ts:15_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/governance/proposals.ts#L15)

## Functions

### `Const` hotfixToEncodedParams

▸ **hotfixToEncodedParams**\(`kit`: [ContractKit](../classes/_kit_.contractkit.md), `proposal`: [Proposal](_wrappers_governance_.md#proposal), `salt`: Buffer\): _string_

_Defined in_ [_packages/contractkit/src/governance/proposals.ts:17_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/governance/proposals.ts#L17)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) |
| `proposal` | [Proposal](_wrappers_governance_.md#proposal) |
| `salt` | Buffer |

**Returns:** _string_

### `Const` hotfixToHash

▸ **hotfixToHash**\(`kit`: [ContractKit](../classes/_kit_.contractkit.md), `proposal`: [Proposal](_wrappers_governance_.md#proposal), `salt`: Buffer\): _Buffer‹›_

_Defined in_ [_packages/contractkit/src/governance/proposals.ts:20_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/governance/proposals.ts#L20)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) |
| `proposal` | [Proposal](_wrappers_governance_.md#proposal) |
| `salt` | Buffer |

**Returns:** _Buffer‹›_

### `Const` proposalToJSON

▸ **proposalToJSON**\(`kit`: [ContractKit](../classes/_kit_.contractkit.md), `proposal`: [Proposal](_wrappers_governance_.md#proposal)\): _Promise‹_[_ProposalTransactionJSON_](../interfaces/_governance_proposals_.proposaltransactionjson.md)_\[\]›_

_Defined in_ [_packages/contractkit/src/governance/proposals.ts:31_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/governance/proposals.ts#L31)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) |
| `proposal` | [Proposal](_wrappers_governance_.md#proposal) |

**Returns:** _Promise‹_[_ProposalTransactionJSON_](../interfaces/_governance_proposals_.proposaltransactionjson.md)_\[\]›_

