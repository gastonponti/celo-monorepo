# ElectionWrapper

Contract for voting for validators and managing validator groups.

## Hierarchy

* [BaseWrapper](_wrappers_basewrapper_.basewrapper.md)‹Election›

  ↳ **ElectionWrapper**

## Index

### Constructors

* [constructor](_wrappers_election_.electionwrapper.md#constructor)

### Properties

* [\_activate](_wrappers_election_.electionwrapper.md#_activate)
* [electValidatorSigners](_wrappers_election_.electionwrapper.md#electvalidatorsigners)
* [electabilityThreshold](_wrappers_election_.electionwrapper.md#electabilitythreshold)
* [getGroupsVotedForByAccount](_wrappers_election_.electionwrapper.md#getgroupsvotedforbyaccount)
* [getTotalVotesForGroupByAccount](_wrappers_election_.electionwrapper.md#gettotalvotesforgroupbyaccount)
* [numberValidatorsInCurrentSet](_wrappers_election_.electionwrapper.md#numbervalidatorsincurrentset)
* [numberValidatorsInSet](_wrappers_election_.electionwrapper.md#numbervalidatorsinset)
* [validatorSignerAddressFromCurrentSet](_wrappers_election_.electionwrapper.md#validatorsigneraddressfromcurrentset)
* [validatorSignerAddressFromSet](_wrappers_election_.electionwrapper.md#validatorsigneraddressfromset)

### Accessors

* [address](_wrappers_election_.electionwrapper.md#address)

### Methods

* [activate](_wrappers_election_.electionwrapper.md#activate)
* [electableValidators](_wrappers_election_.electionwrapper.md#electablevalidators)
* [findLesserAndGreaterAfterVote](_wrappers_election_.electionwrapper.md#findlesserandgreateraftervote)
* [getActiveVotesForGroup](_wrappers_election_.electionwrapper.md#getactivevotesforgroup)
* [getConfig](_wrappers_election_.electionwrapper.md#getconfig)
* [getCurrentValidatorSigners](_wrappers_election_.electionwrapper.md#getcurrentvalidatorsigners)
* [getElectedValidators](_wrappers_election_.electionwrapper.md#getelectedvalidators)
* [getEligibleValidatorGroupsVotes](_wrappers_election_.electionwrapper.md#geteligiblevalidatorgroupsvotes)
* [getGroupVoterRewards](_wrappers_election_.electionwrapper.md#getgroupvoterrewards)
* [getTotalVotesForGroup](_wrappers_election_.electionwrapper.md#gettotalvotesforgroup)
* [getValidatorGroupVotes](_wrappers_election_.electionwrapper.md#getvalidatorgroupvotes)
* [getValidatorGroupsVotes](_wrappers_election_.electionwrapper.md#getvalidatorgroupsvotes)
* [getValidatorSigners](_wrappers_election_.electionwrapper.md#getvalidatorsigners)
* [getVoter](_wrappers_election_.electionwrapper.md#getvoter)
* [getVoterRewards](_wrappers_election_.electionwrapper.md#getvoterrewards)
* [getVotesForGroupByAccount](_wrappers_election_.electionwrapper.md#getvotesforgroupbyaccount)
* [hasActivatablePendingVotes](_wrappers_election_.electionwrapper.md#hasactivatablependingvotes)
* [hasPendingVotes](_wrappers_election_.electionwrapper.md#haspendingvotes)
* [revoke](_wrappers_election_.electionwrapper.md#revoke)
* [revokeActive](_wrappers_election_.electionwrapper.md#revokeactive)
* [revokePending](_wrappers_election_.electionwrapper.md#revokepending)
* [vote](_wrappers_election_.electionwrapper.md#vote)

## Constructors

### constructor

+ **new ElectionWrapper**\(`kit`: [ContractKit](_kit_.contractkit.md), `contract`: Election\): [_ElectionWrapper_](_wrappers_election_.electionwrapper.md)

_Inherited from_ [_BaseWrapper_](_wrappers_basewrapper_.basewrapper.md)_._[_constructor_](_wrappers_basewrapper_.basewrapper.md#constructor)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:14_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L14)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](_kit_.contractkit.md) |
| `contract` | Election |

**Returns:** [_ElectionWrapper_](_wrappers_election_.electionwrapper.md)

## Properties

### \_activate

• **\_activate**: _function_ = proxySend\(this.kit, this.contract.methods.activate\)

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:300_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L300)

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### electValidatorSigners

• **electValidatorSigners**: _function_ = proxyCall\(this.contract.methods.electValidatorSigners\)

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:157_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L157)

Returns a list of elected validators with seats allocated to groups via the D'Hondt method.

**`returns`** The list of elected validators.

**`dev`** See [https://en.wikipedia.org/wiki/D%27Hondt\_method\#Allocation](https://en.wikipedia.org/wiki/D%27Hondt_method#Allocation) for more information.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### electabilityThreshold

• **electabilityThreshold**: _function_ = proxyCall\( this.contract.methods.getElectabilityThreshold, undefined, valueToBigNumber \)

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:83_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L83)

Returns the current election threshold.

**`returns`** Election threshold.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getGroupsVotedForByAccount

• **getGroupsVotedForByAccount**: _function_ = proxyCall\( this.contract.methods.getGroupsVotedForByAccount \)

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:198_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L198)

Returns the groups that `account` has voted for.

**`param`** The address of the account casting votes.

**`returns`** The groups that `account` has voted for.

#### Type declaration:

▸ \(`account`: [Address](../external-modules/_base_.md#address)\): _Promise‹_[_Address_](../external-modules/_base_.md#address)_\[\]›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | [Address](../external-modules/_base_.md#address) |

### getTotalVotesForGroupByAccount

• **getTotalVotesForGroupByAccount**: _function_ = proxyCall\( this.contract.methods.getTotalVotesForGroupByAccount, undefined, valueToBigNumber \)

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:176_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L176)

Returns the total votes for `group` made by `account`.

**`param`** The address of the validator group.

**`param`** The address of the voting account.

**`returns`** The total votes for `group` made by `account`.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### numberValidatorsInCurrentSet

• **numberValidatorsInCurrentSet**: _function_ = proxyCall\( this.contract.methods.numberValidatorsInCurrentSet, undefined, valueToInt \)

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:125_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L125)

Gets the size of the current elected validator set.

**`returns`** Size of the current elected validator set.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### numberValidatorsInSet

• **numberValidatorsInSet**: _function_ = proxyCall\( this.contract.methods.numberValidatorsInSet, undefined, valueToInt \)

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:115_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L115)

Gets the size of the validator set that must sign the given block number.

**`param`** Block number to retrieve the validator set from.

**`returns`** Size of the validator set.

#### Type declaration:

▸ \(`blockNumber`: number\): _Promise‹number›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `blockNumber` | number |

### validatorSignerAddressFromCurrentSet

• **validatorSignerAddressFromCurrentSet**: _function_ = proxyCall\( this.contract.methods.validatorSignerAddressFromCurrentSet, tupleParser\(identity\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:105_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L105)

Gets a validator address from the current validator set.

**`param`** Index of requested validator in the validator set.

**`returns`** Address of validator at the requested index.

#### Type declaration:

▸ \(`index`: number\): _Promise‹_[_Address_](../external-modules/_base_.md#address)_›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `index` | number |

### validatorSignerAddressFromSet

• **validatorSignerAddressFromSet**: _function_ = proxyCall\(this.contract.methods.validatorSignerAddressFromSet\)

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:95_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L95)

Gets a validator address from the validator set at the given block number.

**`param`** Index of requested validator in the validator set.

**`param`** Block number to retrieve the validator set from.

**`returns`** Address of validator at the requested index.

#### Type declaration:

▸ \(`signerIndex`: number, `blockNumber`: number\): _Promise‹_[_Address_](../external-modules/_base_.md#address)_›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `signerIndex` | number |
| `blockNumber` | number |

## Accessors

### address

• **get address**\(\): _string_

_Inherited from_ [_BaseWrapper_](_wrappers_basewrapper_.basewrapper.md)_._[_address_](_wrappers_basewrapper_.basewrapper.md#address)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:18_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L18)

Contract address

**Returns:** _string_

## Methods

### activate

▸ **activate**\(`account`: [Address](../external-modules/_base_.md#address)\): _Promise‹Array‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean›››_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:306_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L306)

Activates any activatable pending votes.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `account` | [Address](../external-modules/_base_.md#address) | The account with pending votes to activate. |

**Returns:** _Promise‹Array‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean›››_

### electableValidators

▸ **electableValidators**\(\): _Promise‹_[_ElectableValidators_](../interfaces/_wrappers_election_.electablevalidators.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:74_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L74)

Returns the minimum and maximum number of validators that can be elected.

**Returns:** _Promise‹_[_ElectableValidators_](../interfaces/_wrappers_election_.electablevalidators.md)_›_

The minimum and maximum number of validators that can be elected.

### findLesserAndGreaterAfterVote

▸ **findLesserAndGreaterAfterVote**\(`votedGroup`: [Address](../external-modules/_base_.md#address), `voteWeight`: BigNumber\): _Promise‹object›_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:402_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L402)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `votedGroup` | [Address](../external-modules/_base_.md#address) |
| `voteWeight` | BigNumber |

**Returns:** _Promise‹object›_

### getActiveVotesForGroup

▸ **getActiveVotesForGroup**\(`group`: [Address](../external-modules/_base_.md#address), `blockNumber?`: undefined \| number\): _Promise‹BigNumber›_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:187_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L187)

Returns the active votes for `group`.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `group` | [Address](../external-modules/_base_.md#address) | The address of the validator group. |
| `blockNumber?` | undefined \| number | - |

**Returns:** _Promise‹BigNumber›_

The active votes for `group`.

### getConfig

▸ **getConfig**\(\): _Promise‹_[_ElectionConfig_](../interfaces/_wrappers_election_.electionconfig.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:264_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L264)

Returns current configuration parameters.

**Returns:** _Promise‹_[_ElectionConfig_](../interfaces/_wrappers_election_.electionconfig.md)_›_

### getCurrentValidatorSigners

▸ **getCurrentValidatorSigners**\(`blockNumber?`: undefined \| number\): _Promise‹_[_Address_](../external-modules/_base_.md#address)_\[\]›_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:135_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L135)

Returns the current validator signers using the precompiles.

**Parameters:**

| Name | Type |
| :--- | :--- |
| `blockNumber?` | undefined \| number |

**Returns:** _Promise‹_[_Address_](../external-modules/_base_.md#address)_\[\]›_

List of current validator signers.

### getElectedValidators

▸ **getElectedValidators**\(`epochNumber`: number\): _Promise‹_[_Validator_](../interfaces/_wrappers_validators_.validator.md)_\[\]›_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:440_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L440)

Retrieves the set of validatorsparticipating in BFT at epochNumber.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `epochNumber` | number | The epoch to retrieve the elected validator set at. |

**Returns:** _Promise‹_[_Validator_](../interfaces/_wrappers_validators_.validator.md)_\[\]›_

### getEligibleValidatorGroupsVotes

▸ **getEligibleValidatorGroupsVotes**\(\): _Promise‹_[_ValidatorGroupVote_](../interfaces/_wrappers_election_.validatorgroupvote.md)_\[\]›_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:387_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L387)

Returns the current eligible validator groups and their total votes.

**Returns:** _Promise‹_[_ValidatorGroupVote_](../interfaces/_wrappers_election_.validatorgroupvote.md)_\[\]›_

### getGroupVoterRewards

▸ **getGroupVoterRewards**\(`epochNumber`: number\): _Promise‹_[_GroupVoterReward_](../interfaces/_wrappers_election_.groupvoterreward.md)_\[\]›_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:453_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L453)

Retrieves GroupVoterRewards at epochNumber.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `epochNumber` | number | The epoch to retrieve GroupVoterRewards at. |

**Returns:** _Promise‹_[_GroupVoterReward_](../interfaces/_wrappers_election_.groupvoterreward.md)_\[\]›_

### getTotalVotesForGroup

▸ **getTotalVotesForGroup**\(`group`: [Address](../external-modules/_base_.md#address), `blockNumber?`: undefined \| number\): _Promise‹BigNumber›_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:164_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L164)

Returns the total votes for `group`.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `group` | [Address](../external-modules/_base_.md#address) | The address of the validator group. |
| `blockNumber?` | undefined \| number | - |

**Returns:** _Promise‹BigNumber›_

The total votes for `group`.

### getValidatorGroupVotes

▸ **getValidatorGroupVotes**\(`address`: [Address](../external-modules/_base_.md#address)\): _Promise‹_[_ValidatorGroupVote_](../interfaces/_wrappers_election_.validatorgroupvote.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:277_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L277)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | [Address](../external-modules/_base_.md#address) |

**Returns:** _Promise‹_[_ValidatorGroupVote_](../interfaces/_wrappers_election_.validatorgroupvote.md)_›_

### getValidatorGroupsVotes

▸ **getValidatorGroupsVotes**\(\): _Promise‹_[_ValidatorGroupVote_](../interfaces/_wrappers_election_.validatorgroupvote.md)_\[\]›_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:294_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L294)

Returns the current registered validator groups and their total votes and eligibility.

**Returns:** _Promise‹_[_ValidatorGroupVote_](../interfaces/_wrappers_election_.validatorgroupvote.md)_\[\]›_

### getValidatorSigners

▸ **getValidatorSigners**\(`blockNumber`: number\): _Promise‹_[_Address_](../external-modules/_base_.md#address)_\[\]›_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:145_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L145)

Returns the validator signers for block `blockNumber`.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `blockNumber` | number | Block number to retrieve signers for. |

**Returns:** _Promise‹_[_Address_](../external-modules/_base_.md#address)_\[\]›_

Address of each signer in the validator set.

### getVoter

▸ **getVoter**\(`account`: [Address](../external-modules/_base_.md#address), `blockNumber?`: undefined \| number\): _Promise‹_[_Voter_](../interfaces/_wrappers_election_.voter.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:224_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L224)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | [Address](../external-modules/_base_.md#address) |
| `blockNumber?` | undefined \| number |

**Returns:** _Promise‹_[_Voter_](../interfaces/_wrappers_election_.voter.md)_›_

### getVoterRewards

▸ **getVoterRewards**\(`address`: [Address](../external-modules/_base_.md#address), `epochNumber`: number\): _Promise‹_[_VoterReward_](../interfaces/_wrappers_election_.voterreward.md)_\[\]›_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:477_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L477)

Retrieves VoterRewards for address at epochNumber.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `address` | [Address](../external-modules/_base_.md#address) | The address to retrieve VoterRewards for. |
| `epochNumber` | number | The epoch to retrieve VoterRewards at. |

**Returns:** _Promise‹_[_VoterReward_](../interfaces/_wrappers_election_.voterreward.md)_\[\]›_

### getVotesForGroupByAccount

▸ **getVotesForGroupByAccount**\(`account`: [Address](../external-modules/_base_.md#address), `group`: [Address](../external-modules/_base_.md#address), `blockNumber?`: undefined \| number\): _Promise‹_[_GroupVote_](../interfaces/_wrappers_election_.groupvote.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:202_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L202)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | [Address](../external-modules/_base_.md#address) |
| `group` | [Address](../external-modules/_base_.md#address) |
| `blockNumber?` | undefined \| number |

**Returns:** _Promise‹_[_GroupVote_](../interfaces/_wrappers_election_.groupvote.md)_›_

### hasActivatablePendingVotes

▸ **hasActivatablePendingVotes**\(`account`: [Address](../external-modules/_base_.md#address)\): _Promise‹boolean›_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:253_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L253)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | [Address](../external-modules/_base_.md#address) |

**Returns:** _Promise‹boolean›_

### hasPendingVotes

▸ **hasPendingVotes**\(`account`: [Address](../external-modules/_base_.md#address)\): _Promise‹boolean›_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:241_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L241)

Returns whether or not the account has any pending votes.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `account` | [Address](../external-modules/_base_.md#address) | The address of the account casting votes. |

**Returns:** _Promise‹boolean›_

The groups that `account` has voted for.

### revoke

▸ **revoke**\(`account`: [Address](../external-modules/_base_.md#address), `group`: [Address](../external-modules/_base_.md#address), `value`: BigNumber\): _Promise‹Array‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean›››_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:345_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L345)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | [Address](../external-modules/_base_.md#address) |
| `group` | [Address](../external-modules/_base_.md#address) |
| `value` | BigNumber |

**Returns:** _Promise‹Array‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean›››_

### revokeActive

▸ **revokeActive**\(`account`: [Address](../external-modules/_base_.md#address), `group`: [Address](../external-modules/_base_.md#address), `value`: BigNumber\): _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:330_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L330)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | [Address](../external-modules/_base_.md#address) |
| `group` | [Address](../external-modules/_base_.md#address) |
| `value` | BigNumber |

**Returns:** _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### revokePending

▸ **revokePending**\(`account`: [Address](../external-modules/_base_.md#address), `group`: [Address](../external-modules/_base_.md#address), `value`: BigNumber\): _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:315_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L315)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | [Address](../external-modules/_base_.md#address) |
| `group` | [Address](../external-modules/_base_.md#address) |
| `value` | BigNumber |

**Returns:** _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### vote

▸ **vote**\(`validatorGroup`: [Address](../external-modules/_base_.md#address), `value`: BigNumber\): _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_packages/contractkit/src/wrappers/Election.ts:371_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Election.ts#L371)

Increments the number of total and pending votes for `group`.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `validatorGroup` | [Address](../external-modules/_base_.md#address) | The validator group to vote for. |
| `value` | BigNumber | The amount of gold to use to vote. |

**Returns:** _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

