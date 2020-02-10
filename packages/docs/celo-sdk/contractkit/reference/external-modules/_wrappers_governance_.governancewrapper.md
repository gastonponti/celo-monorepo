# GovernanceWrapper

Contract managing voting for governance proposals.

## Hierarchy

* [BaseWrapper](../classes/_wrappers_basewrapper_.basewrapper.md)‹Governance›

  ↳ **GovernanceWrapper**

## Index

### Constructors

* [constructor](../classes/_wrappers_governance_.governancewrapper.md#constructor)

### Properties

* [approveHotfix](../classes/_wrappers_governance_.governancewrapper.md#approvehotfix)
* [byzantineQuorumValidators](../classes/_wrappers_governance_.governancewrapper.md#byzantinequorumvalidators)
* [concurrentProposals](../classes/_wrappers_governance_.governancewrapper.md#concurrentproposals)
* [dequeueFrequency](../classes/_wrappers_governance_.governancewrapper.md#dequeuefrequency)
* [dequeueProposalsIfReady](../classes/_wrappers_governance_.governancewrapper.md#dequeueproposalsifready)
* [executeHotfix](../classes/_wrappers_governance_.governancewrapper.md#executehotfix)
* [getApprover](../classes/_wrappers_governance_.governancewrapper.md#getapprover)
* [getProposalMetadata](../classes/_wrappers_governance_.governancewrapper.md#getproposalmetadata)
* [getProposalStage](../classes/_wrappers_governance_.governancewrapper.md#getproposalstage)
* [getProposalTransaction](../classes/_wrappers_governance_.governancewrapper.md#getproposaltransaction)
* [getQueue](../classes/_wrappers_governance_.governancewrapper.md#getqueue)
* [getUpvoteRecord](../classes/_wrappers_governance_.governancewrapper.md#getupvoterecord)
* [getUpvotes](../classes/_wrappers_governance_.governancewrapper.md#getupvotes)
* [getVotes](../classes/_wrappers_governance_.governancewrapper.md#getvotes)
* [hotfixWhitelistValidatorTally](../classes/_wrappers_governance_.governancewrapper.md#hotfixwhitelistvalidatortally)
* [isApproved](../classes/_wrappers_governance_.governancewrapper.md#isapproved)
* [isDequeuedProposalExpired](../classes/_wrappers_governance_.governancewrapper.md#isdequeuedproposalexpired)
* [isHotfixPassing](../classes/_wrappers_governance_.governancewrapper.md#ishotfixpassing)
* [isHotfixWhitelistedBy](../classes/_wrappers_governance_.governancewrapper.md#ishotfixwhitelistedby)
* [isProposalPassing](../classes/_wrappers_governance_.governancewrapper.md#isproposalpassing)
* [isQueued](../classes/_wrappers_governance_.governancewrapper.md#isqueued)
* [isQueuedProposalExpired](../classes/_wrappers_governance_.governancewrapper.md#isqueuedproposalexpired)
* [minDeposit](../classes/_wrappers_governance_.governancewrapper.md#mindeposit)
* [prepareHotfix](../classes/_wrappers_governance_.governancewrapper.md#preparehotfix)
* [proposalExists](../classes/_wrappers_governance_.governancewrapper.md#proposalexists)
* [propose](../classes/_wrappers_governance_.governancewrapper.md#propose)
* [queueExpiry](../classes/_wrappers_governance_.governancewrapper.md#queueexpiry)
* [whitelistHotfix](../classes/_wrappers_governance_.governancewrapper.md#whitelisthotfix)

### Accessors

* [address](../classes/_wrappers_governance_.governancewrapper.md#address)

### Methods

* [approve](../classes/_wrappers_governance_.governancewrapper.md#approve)
* [execute](../classes/_wrappers_governance_.governancewrapper.md#execute)
* [getConfig](../classes/_wrappers_governance_.governancewrapper.md#getconfig)
* [getDequeue](../classes/_wrappers_governance_.governancewrapper.md#getdequeue)
* [getHotfixRecord](../classes/_wrappers_governance_.governancewrapper.md#gethotfixrecord)
* [getProposal](../classes/_wrappers_governance_.governancewrapper.md#getproposal)
* [getProposalRecord](../classes/_wrappers_governance_.governancewrapper.md#getproposalrecord)
* [getVoteValue](../classes/_wrappers_governance_.governancewrapper.md#getvotevalue)
* [getVoteWeight](../classes/_wrappers_governance_.governancewrapper.md#getvoteweight)
* [revokeUpvote](../classes/_wrappers_governance_.governancewrapper.md#revokeupvote)
* [sortedQueue](../classes/_wrappers_governance_.governancewrapper.md#sortedqueue)
* [stageDurations](../classes/_wrappers_governance_.governancewrapper.md#stagedurations)
* [timeUntilStages](../classes/_wrappers_governance_.governancewrapper.md#timeuntilstages)
* [upvote](../classes/_wrappers_governance_.governancewrapper.md#upvote)
* [vote](../classes/_wrappers_governance_.governancewrapper.md#vote)

## Constructors

### constructor

+ **new GovernanceWrapper**\(`kit`: [ContractKit](../classes/_kit_.contractkit.md), `contract`: Governance\): [_GovernanceWrapper_](../classes/_wrappers_governance_.governancewrapper.md)

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_constructor_](../classes/_wrappers_basewrapper_.basewrapper.md#constructor)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:14_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L14)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) |
| `contract` | Governance |

**Returns:** [_GovernanceWrapper_](../classes/_wrappers_governance_.governancewrapper.md)

## Properties

### approveHotfix

• **approveHotfix**: _function_ = proxySend\( this.kit, this.contract.methods.approveHotfix, tupleParser\(bufferToString\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:608_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L608)

Marks the given hotfix approved by `sender`.

**`param`** keccak256 hash of hotfix's associated abi encoded transactions

**`notice`** Only the `approver` address will succeed in sending this transaction

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### byzantineQuorumValidators

• **byzantineQuorumValidators**: _function_ = proxyCall\( this.contract.methods.byzantineQuorumValidatorsInCurrentSet, undefined, valueToBigNumber \)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:578_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L578)

Returns the number of validators required to reach a Byzantine quorum

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### concurrentProposals

• **concurrentProposals**: _function_ = proxyCall\( this.contract.methods.concurrentProposals, undefined, valueToBigNumber \)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:117_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L117)

Querying number of possible concurrent proposals.

**`returns`** Current number of possible concurrent proposals.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### dequeueFrequency

• **dequeueFrequency**: _function_ = proxyCall\(this.contract.methods.dequeueFrequency, undefined, valueToBigNumber\)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:126_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L126)

Query proposal dequeue frequency.

**`returns`** Current proposal dequeue frequency in seconds.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### dequeueProposalsIfReady

• **dequeueProposalsIfReady**: _function_ = proxySend\(this.kit, this.contract.methods.dequeueProposalsIfReady\)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:379_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L379)

Dequeues any queued proposals if `dequeueFrequency` seconds have elapsed since the last dequeue

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### executeHotfix

• **executeHotfix**: _function_ = proxySend\(this.kit, this.contract.methods.executeHotfix, hotfixToParams\)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:630_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L630)

Executes a given sequence of transactions if the corresponding hash is prepared and approved.

**`param`** Governance hotfix proposal

**`param`** Secret which guarantees uniqueness of hash

**`notice`** keccak256 hash of abi encoded transactions computed on-chain

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getApprover

• **getApprover**: _function_ = proxyCall\(this.contract.methods.approver\)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:234_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L234)

Returns the approver address for proposals and hotfixes.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getProposalMetadata

• **getProposalMetadata**: _function_ = proxyCall\( this.contract.methods.getProposal, tupleParser\(valueToString\), \(res\) =&gt; \({ proposer: res\[0\], deposit: valueToBigNumber\(res\[1\]\), timestamp: valueToBigNumber\(res\[2\]\), transactionCount: valueToInt\(res\[3\]\), descriptionURL: res\[4\], }\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:174_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L174)

Returns the metadata associated with a given proposal.

**`param`** Governance proposal UUID

#### Type declaration:

▸ \(`proposalID`: BigNumber.Value\): _Promise‹_[_ProposalMetadata_](../interfaces/_wrappers_governance_.proposalmetadata.md)_›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `proposalID` | BigNumber.Value |

### getProposalStage

• **getProposalStage**: _function_ = proxyCall\( this.contract.methods.getProposalStage, tupleParser\(valueToString\), \(res\) =&gt; Object.keys\(ProposalStage\)\[valueToInt\(res\)\] as ProposalStage \)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:236_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L236)

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getProposalTransaction

• **getProposalTransaction**: _function_ = proxyCall\( this.contract.methods.getProposalTransaction, tupleParser\(valueToString, valueToString\), \(res\) =&gt; \({ value: res\[0\], to: res\[1\], input: bytesToString\(res\[2\]\), }\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:191_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L191)

Returns the transaction at the given index associated with a given proposal.

**`param`** Governance proposal UUID

**`param`** Transaction index

#### Type declaration:

▸ \(`proposalID`: BigNumber.Value, `txIndex`: number\): _Promise‹_[_ProposalTransaction_](_wrappers_governance_.md#proposaltransaction)_›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `proposalID` | BigNumber.Value |
| `txIndex` | number |

### getQueue

• **getQueue**: _function_ = proxyCall\(this.contract.methods.getQueue, undefined, \(arraysObject\) =&gt; zip\( \(\_id, \_upvotes\) =&gt; \({ proposalID: valueToBigNumber\(\_id\), upvotes: valueToBigNumber\(\_upvotes\), }\), arraysObject\[0\], arraysObject\[1\] \) \)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:355_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L355)

Returns the proposal queue as list of upvote records.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getUpvoteRecord

• **getUpvoteRecord**: _function_ = proxyCall\( this.contract.methods.getUpvoteRecord, tupleParser\(identity\), \(o\) =&gt; \({ proposalID: valueToBigNumber\(o\[0\]\), upvotes: valueToBigNumber\(o\[1\]\), }\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:313_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L313)

Returns the current upvoted governance proposal ID and applied vote weight \(zeroes if none\).

**`param`** Address of upvoter

#### Type declaration:

▸ \(`upvoter`: [Address](_base_.md#address)\): _Promise‹_[_UpvoteRecord_](../interfaces/_wrappers_governance_.upvoterecord.md)_›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `upvoter` | [Address](_base_.md#address) |

### getUpvotes

• **getUpvotes**: _function_ = proxyCall\( this.contract.methods.getUpvotes, tupleParser\(valueToString\), valueToBigNumber \)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:332_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L332)

Returns the upvotes applied to a given proposal.

**`param`** Governance proposal UUID

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getVotes

• **getVotes**: _function_ = proxyCall\( this.contract.methods.getVoteTotals, tupleParser\(valueToString\), \(res\): Votes =&gt; \({ \[VoteValue.Yes\]: valueToBigNumber\(res\[0\]\), \[VoteValue.No\]: valueToBigNumber\(res\[1\]\), \[VoteValue.Abstain\]: valueToBigNumber\(res\[2\]\), }\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:342_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L342)

Returns the yes, no, and abstain votes applied to a given proposal.

**`param`** Governance proposal UUID

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### hotfixWhitelistValidatorTally

• **hotfixWhitelistValidatorTally**: _function_ = proxyCall\( this.contract.methods.hotfixWhitelistValidatorTally, tupleParser\(bufferToString\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:588_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L588)

Returns the number of validators that whitelisted the hotfix

**`param`** keccak256 hash of hotfix's associated abi encoded transactions

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### isApproved

• **isApproved**: _function_ = proxyCall\( this.contract.methods.isApproved, tupleParser\(valueToString\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:208_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L208)

Returns whether a given proposal is approved.

**`param`** Governance proposal UUID

#### Type declaration:

▸ \(`proposalID`: BigNumber.Value\): _Promise‹boolean›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `proposalID` | BigNumber.Value |

### isDequeuedProposalExpired

• **isDequeuedProposalExpired**: _function_ = proxyCall\( this.contract.methods.isDequeuedProposalExpired, tupleParser\(valueToString\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:217_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L217)

Returns whether a dequeued proposal is expired.

**`param`** Governance proposal UUID

#### Type declaration:

▸ \(`proposalID`: BigNumber.Value\): _Promise‹boolean›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `proposalID` | BigNumber.Value |

### isHotfixPassing

• **isHotfixPassing**: _function_ = proxyCall\(this.contract.methods.isHotfixPassing, tupleParser\(bufferToString\)\)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:573_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L573)

Returns whether a given hotfix can be passed.

**`param`** keccak256 hash of hotfix's associated abi encoded transactions

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### isHotfixWhitelistedBy

• **isHotfixWhitelistedBy**: _function_ = proxyCall\( this.contract.methods.isHotfixWhitelistedBy, tupleParser\(bufferToString, \(s: Address\) =&gt; identity\(s\)\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:564_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L564)

Returns whether a given hotfix has been whitelisted by a given address.

**`param`** keccak256 hash of hotfix's associated abi encoded transactions

**`param`** address of whitelister

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### isProposalPassing

• **isProposalPassing**: _function_ = proxyCall\(this.contract.methods.isProposalPassing, tupleParser\(valueToString\)\)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:291_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L291)

Returns whether a given proposal is passing relative to the constitution's threshold.

**`param`** Governance proposal UUID

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### isQueued

• **isQueued**: _function_ = proxyCall\(this.contract.methods.isQueued, tupleParser\(valueToString\)\)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:326_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L326)

Returns whether a given proposal is queued.

**`param`** Governance proposal UUID

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### isQueuedProposalExpired

• **isQueuedProposalExpired**: _function_ = proxyCall\( this.contract.methods.isQueuedProposalExpired, tupleParser\(valueToString\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:226_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L226)

Returns whether a dequeued proposal is expired.

**`param`** Governance proposal UUID

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### minDeposit

• **minDeposit**: _function_ = proxyCall\(this.contract.methods.minDeposit, undefined, valueToBigNumber\)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:131_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L131)

Query minimum deposit required to make a proposal.

**`returns`** Current minimum deposit.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### prepareHotfix

• **prepareHotfix**: _function_ = proxySend\( this.kit, this.contract.methods.prepareHotfix, tupleParser\(bufferToString\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:618_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L618)

Marks the given hotfix prepared for current epoch if quorum of validators have whitelisted it.

**`param`** keccak256 hash of hotfix's associated abi encoded transactions

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### proposalExists

• **proposalExists**: _function_ = proxyCall\( this.contract.methods.proposalExists, tupleParser\(valueToString\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:304_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L304)

Returns whether a governance proposal exists with the given ID.

**`param`** Governance proposal UUID

#### Type declaration:

▸ \(`proposalID`: BigNumber.Value\): _Promise‹boolean›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `proposalID` | BigNumber.Value |

### propose

• **propose**: _function_ = proxySend\(this.kit, this.contract.methods.propose, proposalToParams\)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:298_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L298)

Submits a new governance proposal.

**`param`** Governance proposal

**`param`** A URL where further information about the proposal can be viewed

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### queueExpiry

• **queueExpiry**: _function_ = proxyCall\(this.contract.methods.queueExpiry, undefined, valueToBigNumber\)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:136_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L136)

Query queue expiry parameter.

**`returns`** The number of seconds a proposal can stay in the queue before expiring.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### whitelistHotfix

• **whitelistHotfix**: _function_ = proxySend\( this.kit, this.contract.methods.whitelistHotfix, tupleParser\(bufferToString\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:597_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L597)

Marks the given hotfix whitelisted by `sender`.

**`param`** keccak256 hash of hotfix's associated abi encoded transactions

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

## Accessors

### address

• **get address**\(\): _string_

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_address_](../classes/_wrappers_basewrapper_.basewrapper.md#address)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:18_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L18)

Contract address

**Returns:** _string_

## Methods

### approve

▸ **approve**\(`proposalID`: BigNumber.Value\): _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:501_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L501)

Approves given proposal, allowing it to later move to `referendum`.

**`notice`** Only the `approver` address will succeed in sending this transaction

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `proposalID` | BigNumber.Value | Governance proposal UUID |

**Returns:** _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### execute

▸ **execute**\(`proposalID`: BigNumber.Value\): _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:538_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L538)

Executes a given proposal's associated transactions.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `proposalID` | BigNumber.Value | Governance proposal UUID |

**Returns:** _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### getConfig

▸ **getConfig**\(\): _Promise‹_[_GovernanceConfig_](../interfaces/_wrappers_governance_.governanceconfig.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:153_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L153)

Returns current configuration parameters.

**Returns:** _Promise‹_[_GovernanceConfig_](../interfaces/_wrappers_governance_.governanceconfig.md)_›_

### getDequeue

▸ **getDequeue**\(`filterZeroes`: boolean\): _Promise‹BigNumber‹›\[\]›_

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:369_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L369)

Returns the \(existing\) proposal dequeue as list of proposal IDs.

**Parameters:**

| Name | Type | Default |
| :--- | :--- | :--- |
| `filterZeroes` | boolean | false |

**Returns:** _Promise‹BigNumber‹›\[\]›_

### getHotfixRecord

▸ **getHotfixRecord**\(`hash`: Buffer\): _Promise‹_[_HotfixRecord_](../interfaces/_wrappers_governance_.hotfixrecord.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:550_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L550)

Returns approved, executed, and prepared status associated with a given hotfix.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `hash` | Buffer | keccak256 hash of hotfix's associated abi encoded transactions |

**Returns:** _Promise‹_[_HotfixRecord_](../interfaces/_wrappers_governance_.hotfixrecord.md)_›_

### getProposal

▸ **getProposal**\(`proposalID`: BigNumber.Value\): _Promise‹_[_Proposal_](_wrappers_governance_.md#proposal)_›_

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:255_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L255)

Returns the proposal associated with a given id.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `proposalID` | BigNumber.Value | Governance proposal UUID |

**Returns:** _Promise‹_[_Proposal_](_wrappers_governance_.md#proposal)_›_

### getProposalRecord

▸ **getProposalRecord**\(`proposalID`: BigNumber.Value\): _Promise‹_[_ProposalRecord_](../interfaces/_wrappers_governance_.proposalrecord.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:265_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L265)

Returns the stage, metadata, upvotes, votes, and transactions associated with a given proposal.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `proposalID` | BigNumber.Value | Governance proposal UUID |

**Returns:** _Promise‹_[_ProposalRecord_](../interfaces/_wrappers_governance_.proposalrecord.md)_›_

### getVoteValue

▸ **getVoteValue**\(`proposalID`: BigNumber.Value, `voter`: [Address](_base_.md#address)\): _Promise‹_[_VoteValue_](../enums/_wrappers_governance_.votevalue.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:528_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L528)

Returns `voter`'s vote choice on a given proposal.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `proposalID` | BigNumber.Value | Governance proposal UUID |
| `voter` | [Address](_base_.md#address) | Address of voter |

**Returns:** _Promise‹_[_VoteValue_](../enums/_wrappers_governance_.votevalue.md)_›_

### getVoteWeight

▸ **getVoteWeight**\(`voter`: [Address](_base_.md#address)\): _Promise‹BigNumber‹››_

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:385_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L385)

Returns the number of votes that will be applied to a proposal for a given voter.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `voter` | [Address](_base_.md#address) | Address of voter |

**Returns:** _Promise‹BigNumber‹››_

### revokeUpvote

▸ **revokeUpvote**\(`upvoter`: [Address](_base_.md#address)\): _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:488_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L488)

Revokes provided upvoter's upvote.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `upvoter` | [Address](_base_.md#address) | Address of upvoter |

**Returns:** _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### sortedQueue

▸ **sortedQueue**\(`queue`: [UpvoteRecord](../interfaces/_wrappers_governance_.upvoterecord.md)\[\]\): [_UpvoteRecord_](../interfaces/_wrappers_governance_.upvoterecord.md)_\[\]_

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:426_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L426)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `queue` | [UpvoteRecord](../interfaces/_wrappers_governance_.upvoterecord.md)\[\] |

**Returns:** [_UpvoteRecord_](../interfaces/_wrappers_governance_.upvoterecord.md)_\[\]_

### stageDurations

▸ **stageDurations**\(\): _Promise‹_[_ProposalStageDurations_](../interfaces/_wrappers_governance_.proposalstagedurations.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:141_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L141)

Query durations of different stages in proposal lifecycle.

**Returns:** _Promise‹_[_ProposalStageDurations_](../interfaces/_wrappers_governance_.proposalstagedurations.md)_›_

Durations for approval, referendum and execution stages in seconds.

### timeUntilStages

▸ **timeUntilStages**\(`proposalID`: BigNumber.Value\): _Promise‹object›_

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:242_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L242)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `proposalID` | BigNumber.Value |

**Returns:** _Promise‹object›_

### upvote

▸ **upvote**\(`proposalID`: BigNumber.Value, `upvoter`: [Address](_base_.md#address)\): _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:472_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L472)

Applies provided upvoter's upvote to given proposal.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `proposalID` | BigNumber.Value | Governance proposal UUID |
| `upvoter` | [Address](_base_.md#address) | Address of upvoter |

**Returns:** _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### vote

▸ **vote**\(`proposalID`: BigNumber.Value, `vote`: keyof typeof VoteValue\): _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_packages/contractkit/src/wrappers/Governance.ts:514_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Governance.ts#L514)

Applies `sender`'s vote choice to a given proposal.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `proposalID` | BigNumber.Value | Governance proposal UUID |
| `vote` | keyof typeof VoteValue | Choice to apply \(yes, no, abstain\) |

**Returns:** _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

