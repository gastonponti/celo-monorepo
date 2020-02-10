# wrappers/Governance

## Index

### Enumerations

* [ProposalStage](../enums/_wrappers_governance_.proposalstage.md)
* [VoteValue](../enums/_wrappers_governance_.votevalue.md)

### Classes

* [GovernanceWrapper](../classes/_wrappers_governance_.governancewrapper.md)

### Interfaces

* [GovernanceConfig](../interfaces/_wrappers_governance_.governanceconfig.md)
* [HotfixRecord](../interfaces/_wrappers_governance_.hotfixrecord.md)
* [ProposalMetadata](../interfaces/_wrappers_governance_.proposalmetadata.md)
* [ProposalRecord](../interfaces/_wrappers_governance_.proposalrecord.md)
* [ProposalStageDurations](../interfaces/_wrappers_governance_.proposalstagedurations.md)
* [UpvoteRecord](../interfaces/_wrappers_governance_.upvoterecord.md)
* [Votes](../interfaces/_wrappers_governance_.votes.md)

### Type aliases

* [HotfixParams](_wrappers_governance_.md#hotfixparams)
* [Proposal](_wrappers_governance_.md#proposal)
* [ProposalParams](_wrappers_governance_.md#proposalparams)
* [ProposalTransaction](_wrappers_governance_.md#proposaltransaction)

### Functions

* [hotfixToParams](_wrappers_governance_.md#const-hotfixtoparams)
* [proposalToParams](_wrappers_governance_.md#const-proposaltoparams)

## Type aliases

### HotfixParams

Ƭ **HotfixParams**: _Parameters‹Governance\["methods"\]\["executeHotfix"\]›_

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:95_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L95)

### Proposal

Ƭ **Proposal**: [_ProposalTransaction_](_wrappers_governance_.md#proposaltransaction)_\[\]_

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:56_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L56)

### ProposalParams

Ƭ **ProposalParams**: _Parameters‹Governance\["methods"\]\["propose"\]›_

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:54_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L54)

### ProposalTransaction

Ƭ **ProposalTransaction**: _Pick‹Transaction, "to" \| "input" \| "value"›_

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:55_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L55)

## Functions

### `Const` hotfixToParams

▸ **hotfixToParams**\(`proposal`: [Proposal](_wrappers_governance_.md#proposal), `salt`: Buffer\): [_HotfixParams_](_wrappers_governance_.md#hotfixparams)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:96_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L96)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `proposal` | [Proposal](_wrappers_governance_.md#proposal) |
| `salt` | Buffer |

**Returns:** [_HotfixParams_](_wrappers_governance_.md#hotfixparams)

### `Const` proposalToParams

▸ **proposalToParams**\(`proposal`: [Proposal](_wrappers_governance_.md#proposal), `descriptionURL`: string\): [_ProposalParams_](_wrappers_governance_.md#proposalparams)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:58_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L58)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `proposal` | [Proposal](_wrappers_governance_.md#proposal) |
| `descriptionURL` | string |

**Returns:** [_ProposalParams_](_wrappers_governance_.md#proposalparams)

