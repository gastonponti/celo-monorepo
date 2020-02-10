# ValidatorsWrapper

Contract for voting for validators and managing validator groups.

## Hierarchy

* [BaseWrapper](_wrappers_basewrapper_.basewrapper.md)‹Validators›

  ↳ **ValidatorsWrapper**

## Index

### Constructors

* [constructor](_wrappers_validators_.validatorswrapper.md#constructor)

### Properties

* [affiliate](_wrappers_validators_.validatorswrapper.md#affiliate)
* [deaffiliate](_wrappers_validators_.validatorswrapper.md#deaffiliate)
* [forceDeaffiliateIfValidator](_wrappers_validators_.validatorswrapper.md#forcedeaffiliateifvalidator)
* [getAccountLockedGoldRequirement](_wrappers_validators_.validatorswrapper.md#getaccountlockedgoldrequirement)
* [getEpochNumber](_wrappers_validators_.validatorswrapper.md#getepochnumber)
* [getEpochSize](_wrappers_validators_.validatorswrapper.md#getepochsize)
* [getRegisteredValidatorGroupsAddresses](_wrappers_validators_.validatorswrapper.md#getregisteredvalidatorgroupsaddresses)
* [getValidatorGroupSize](_wrappers_validators_.validatorswrapper.md#getvalidatorgroupsize)
* [getValidatorMembershipHistory](_wrappers_validators_.validatorswrapper.md#getvalidatormembershiphistory)
* [getValidatorMembershipHistoryExtraData](_wrappers_validators_.validatorswrapper.md#getvalidatormembershiphistoryextradata)
* [isValidator](_wrappers_validators_.validatorswrapper.md#isvalidator)
* [isValidatorGroup](_wrappers_validators_.validatorswrapper.md#isvalidatorgroup)
* [registerValidator](_wrappers_validators_.validatorswrapper.md#registervalidator)
* [removeMember](_wrappers_validators_.validatorswrapper.md#removemember)
* [updateBlsPublicKey](_wrappers_validators_.validatorswrapper.md#updateblspublickey)

### Accessors

* [address](_wrappers_validators_.validatorswrapper.md#address)

### Methods

* [addMember](_wrappers_validators_.validatorswrapper.md#addmember)
* [currentSignerSet](_wrappers_validators_.validatorswrapper.md#currentsignerset)
* [currentValidatorAccountsSet](_wrappers_validators_.validatorswrapper.md#currentvalidatoraccountsset)
* [deregisterValidator](_wrappers_validators_.validatorswrapper.md#deregistervalidator)
* [deregisterValidatorGroup](_wrappers_validators_.validatorswrapper.md#deregistervalidatorgroup)
* [findValidatorMembershipHistoryIndex](_wrappers_validators_.validatorswrapper.md#findvalidatormembershiphistoryindex)
* [getConfig](_wrappers_validators_.validatorswrapper.md#getconfig)
* [getGroupLockedGoldRequirements](_wrappers_validators_.validatorswrapper.md#getgrouplockedgoldrequirements)
* [getRegisteredValidatorGroups](_wrappers_validators_.validatorswrapper.md#getregisteredvalidatorgroups)
* [getRegisteredValidators](_wrappers_validators_.validatorswrapper.md#getregisteredvalidators)
* [getRegisteredValidatorsAddresses](_wrappers_validators_.validatorswrapper.md#getregisteredvalidatorsaddresses)
* [getValidator](_wrappers_validators_.validatorswrapper.md#getvalidator)
* [getValidatorFromSigner](_wrappers_validators_.validatorswrapper.md#getvalidatorfromsigner)
* [getValidatorGroup](_wrappers_validators_.validatorswrapper.md#getvalidatorgroup)
* [getValidatorLockedGoldRequirements](_wrappers_validators_.validatorswrapper.md#getvalidatorlockedgoldrequirements)
* [getValidatorMembershipHistoryIndex](_wrappers_validators_.validatorswrapper.md#getvalidatormembershiphistoryindex)
* [getValidatorRewards](_wrappers_validators_.validatorswrapper.md#getvalidatorrewards)
* [meetsValidatorBalanceRequirements](_wrappers_validators_.validatorswrapper.md#meetsvalidatorbalancerequirements)
* [meetsValidatorGroupBalanceRequirements](_wrappers_validators_.validatorswrapper.md#meetsvalidatorgroupbalancerequirements)
* [registerValidatorGroup](_wrappers_validators_.validatorswrapper.md#registervalidatorgroup)
* [reorderMember](_wrappers_validators_.validatorswrapper.md#reordermember)
* [signerToAccount](_wrappers_validators_.validatorswrapper.md#signertoaccount)
* [updateCommission](_wrappers_validators_.validatorswrapper.md#updatecommission)
* [validatorSignerToAccount](_wrappers_validators_.validatorswrapper.md#validatorsignertoaccount)

## Constructors

### constructor

+ **new ValidatorsWrapper**\(`kit`: [ContractKit](_kit_.contractkit.md), `contract`: Validators\): [_ValidatorsWrapper_](_wrappers_validators_.validatorswrapper.md)

_Inherited from_ [_BaseWrapper_](_wrappers_basewrapper_.basewrapper.md)_._[_constructor_](_wrappers_basewrapper_.basewrapper.md#constructor)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:14_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L14)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](_kit_.contractkit.md) |
| `contract` | Validators |

**Returns:** [_ValidatorsWrapper_](_wrappers_validators_.validatorswrapper.md)

## Properties

### affiliate

• **affiliate**: _function_ = proxySend\( this.kit, this.contract.methods.affiliate \)

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:394_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L394)

Affiliates a validator with a group, allowing it to be added as a member. De-affiliates with the previously affiliated group if present.

**`param`** The validator group with which to affiliate.

#### Type declaration:

▸ \(`group`: [Address](../external-modules/_base_.md#address)\): [_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `group` | [Address](../external-modules/_base_.md#address) |

### deaffiliate

• **deaffiliate**: _function_ = proxySend\(this.kit, this.contract.methods.deaffiliate\)

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:404_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L404)

De-affiliates a validator, removing it from the group for which it is a member. Fails if the account is not a validator with non-zero affiliation.

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### forceDeaffiliateIfValidator

• **forceDeaffiliateIfValidator**: _function_ = proxySend\( this.kit, this.contract.methods.forceDeaffiliateIfValidator \)

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:406_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L406)

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getAccountLockedGoldRequirement

• **getAccountLockedGoldRequirement**: _function_ = proxyCall\( this.contract.methods.getAccountLockedGoldRequirement, undefined, valueToBigNumber \)

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:109_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L109)

Returns the Locked Gold requirements for specific account.

**`returns`** The Locked Gold requirements for a specific account.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getEpochNumber

• **getEpochNumber**: _function_ = proxyCall\(this.contract.methods.getEpochNumber, undefined, valueToBigNumber\)

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:333_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L333)

Registers a validator unaffiliated with any validator group.

Fails if the account is already a validator or validator group.

**`param`** The address that the validator is using for consensus, should match the validator signer.

**`param`** The ECDSA public key that the validator is using for consensus. 64 bytes.

**`param`** The BLS public key that the validator is using for consensus, should pass proof of possession. 48 bytes.

**`param`** The BLS public key proof-of-possession, which consists of a signature on the account address. 96 bytes.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getEpochSize

• **getEpochSize**: _function_ = proxyCall\(this.contract.methods.getEpochSize, undefined, valueToBigNumber\)

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:335_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L335)

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getRegisteredValidatorGroupsAddresses

• **getRegisteredValidatorGroupsAddresses**: _function_ = proxyCall\( this.contract.methods.getRegisteredValidatorGroups \)

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:303_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L303)

Get list of registered validator group addresses

#### Type declaration:

▸ \(\): _Promise‹_[_Address_](../external-modules/_base_.md#address)_\[\]›_

### getValidatorGroupSize

• **getValidatorGroupSize**: _function_ = proxyCall\( this.contract.methods.getGroupNumMembers, undefined, valueToInt \)

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:290_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L290)

Get the size \(amount of members\) of a ValidatorGroup

#### Type declaration:

▸ \(`group`: [Address](../external-modules/_base_.md#address)\): _Promise‹number›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `group` | [Address](../external-modules/_base_.md#address) |

### getValidatorMembershipHistory

• **getValidatorMembershipHistory**: _function_ = proxyCall\( this.contract.methods.getMembershipHistory, undefined, \(res\) =&gt; zip\(\(epoch, group\): GroupMembership =&gt; \({ epoch: valueToInt\(epoch\), group }\), res\[0\], res\[1\]\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:269_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L269)

Returns the Validator's group membership history

**`param`** The validator whose membership history to return.

**`returns`** The group membership history of a validator.

#### Type declaration:

▸ \(`validator`: [Address](../external-modules/_base_.md#address)\): _Promise‹_[_GroupMembership_](../interfaces/_wrappers_validators_.groupmembership.md)_\[\]›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `validator` | [Address](../external-modules/_base_.md#address) |

### getValidatorMembershipHistoryExtraData

• **getValidatorMembershipHistoryExtraData**: _function_ = proxyCall\( this.contract.methods.getMembershipHistory, undefined, \(res\) =&gt; \({ lastRemovedFromGroupTimestamp: valueToInt\(res\[2\]\), tail: valueToInt\(res\[3\]\) }\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:281_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L281)

Returns extra data from the Validator's group membership history

**`param`** The validator whose membership history to return.

**`returns`** The group membership history of a validator.

#### Type declaration:

▸ \(`validator`: [Address](../external-modules/_base_.md#address)\): _Promise‹_[_MembershipHistoryExtraData_](../interfaces/_wrappers_validators_.membershiphistoryextradata.md)_›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `validator` | [Address](../external-modules/_base_.md#address) |

### isValidator

• **isValidator**: _function_ = proxyCall\(this.contract.methods.isValidator\)

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:177_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L177)

Returns whether a particular account has a registered validator.

**`param`** The account.

**`returns`** Whether a particular address is a registered validator.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### isValidatorGroup

• **isValidatorGroup**: _function_ = proxyCall\(this.contract.methods.isValidatorGroup\)

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:184_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L184)

Returns whether a particular account has a registered validator group.

**`param`** The account.

**`returns`** Whether a particular address is a registered validator group.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### registerValidator

• **registerValidator**: _function_ = proxySend\( this.kit, this.contract.methods.registerValidator, tupleParser\(stringToBytes, stringToBytes, stringToBytes\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:337_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L337)

#### Type declaration:

▸ \(`ecdsaPublicKey`: string, `blsPublicKey`: string, `blsPop`: string\): [_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `ecdsaPublicKey` | string |
| `blsPublicKey` | string |
| `blsPop` | string |

### removeMember

• **removeMember**: _function_ = proxySend\(this.kit, this.contract.methods.removeMember\)

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:438_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L438)

Removes a member from a ValidatorGroup The ValidatorGroup is specified by the `from` of the tx.

**`param`** The Validator to remove from the group

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### updateBlsPublicKey

• **updateBlsPublicKey**: _function_ = proxySend\( this.kit, this.contract.methods.updateBlsPublicKey, tupleParser\(stringToBytes, stringToBytes\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:163_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L163)

Updates a validator's BLS key.

**`param`** The BLS public key that the validator is using for consensus, should pass proof of possession. 48 bytes.

**`param`** The BLS public key proof-of-possession, which consists of a signature on the account address. 96 bytes.

**`returns`** True upon success.

#### Type declaration:

▸ \(`blsPublicKey`: string, `blsPop`: string\): [_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `blsPublicKey` | string |
| `blsPop` | string |

## Accessors

### address

• **get address**\(\): _string_

_Inherited from_ [_BaseWrapper_](_wrappers_basewrapper_.basewrapper.md)_._[_address_](_wrappers_basewrapper_.basewrapper.md#address)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:18_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L18)

Contract address

**Returns:** _string_

## Methods

### addMember

▸ **addMember**\(`group`: [Address](../external-modules/_base_.md#address), `validator`: [Address](../external-modules/_base_.md#address)\): _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:416_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L416)

Adds a member to the end of a validator group's list of members. Fails if `validator` has not set their affiliation to this account.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `group` | [Address](../external-modules/_base_.md#address) | - |
| `validator` | [Address](../external-modules/_base_.md#address) | The validator to add to the group |

**Returns:** _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### currentSignerSet

▸ **currentSignerSet**\(\): _Promise‹_[_Address_](../external-modules/_base_.md#address)_\[\]›_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:506_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L506)

Returns the current set of validator signer addresses

**Returns:** _Promise‹_[_Address_](../external-modules/_base_.md#address)_\[\]›_

### currentValidatorAccountsSet

▸ **currentValidatorAccountsSet**\(\): _Promise‹object\[\]›_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:516_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L516)

Returns the current set of validator signer and account addresses

**Returns:** _Promise‹object\[\]›_

### deregisterValidator

▸ **deregisterValidator**\(`validatorAddress`: [Address](../external-modules/_base_.md#address)\): _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:351_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L351)

De-registers a validator, removing it from the group for which it is a member.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `validatorAddress` | [Address](../external-modules/_base_.md#address) | Address of the validator to deregister |

**Returns:** _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### deregisterValidatorGroup

▸ **deregisterValidatorGroup**\(`validatorGroupAddress`: [Address](../external-modules/_base_.md#address)\): _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:379_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L379)

De-registers a validator Group

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `validatorGroupAddress` | [Address](../external-modules/_base_.md#address) | Address of the validator group to deregister |

**Returns:** _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### findValidatorMembershipHistoryIndex

▸ **findValidatorMembershipHistoryIndex**\(`epoch`: number, `history`: [GroupMembership](../interfaces/_wrappers_validators_.groupmembership.md)\[\]\): _number_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:548_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L548)

Returns the index into `history` for `epoch`.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `epoch` | number | The needle. |
| `history` | [GroupMembership](../interfaces/_wrappers_validators_.groupmembership.md)\[\] | The haystack. |

**Returns:** _number_

Index for epoch or -1.

### getConfig

▸ **getConfig**\(\): _Promise‹_[_ValidatorsConfig_](../interfaces/_wrappers_validators_.validatorsconfig.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:118_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L118)

Returns current configuration parameters.

**Returns:** _Promise‹_[_ValidatorsConfig_](../interfaces/_wrappers_validators_.validatorsconfig.md)_›_

### getGroupLockedGoldRequirements

▸ **getGroupLockedGoldRequirements**\(\): _Promise‹_[_LockedGoldRequirements_](../interfaces/_wrappers_validators_.lockedgoldrequirements.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:97_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L97)

Returns the Locked Gold requirements for validator groups.

**Returns:** _Promise‹_[_LockedGoldRequirements_](../interfaces/_wrappers_validators_.lockedgoldrequirements.md)_›_

The Locked Gold requirements for validator groups.

### getRegisteredValidatorGroups

▸ **getRegisteredValidatorGroups**\(\): _Promise‹_[_ValidatorGroup_](../interfaces/_wrappers_validators_.validatorgroup.md)_\[\]›_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:314_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L314)

Get list of registered validator groups

**Returns:** _Promise‹_[_ValidatorGroup_](../interfaces/_wrappers_validators_.validatorgroup.md)_\[\]›_

### getRegisteredValidators

▸ **getRegisteredValidators**\(`blockNumber?`: undefined \| number\): _Promise‹_[_Validator_](../interfaces/_wrappers_validators_.validator.md)_\[\]›_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:308_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L308)

Get list of registered validators

**Parameters:**

| Name | Type |
| :--- | :--- |
| `blockNumber?` | undefined \| number |

**Returns:** _Promise‹_[_Validator_](../interfaces/_wrappers_validators_.validator.md)_\[\]›_

### getRegisteredValidatorsAddresses

▸ **getRegisteredValidatorsAddresses**\(`blockNumber?`: undefined \| number\): _Promise‹_[_Address_](../external-modules/_base_.md#address)_\[\]›_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:297_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L297)

Get list of registered validator addresses

**Parameters:**

| Name | Type |
| :--- | :--- |
| `blockNumber?` | undefined \| number |

**Returns:** _Promise‹_[_Address_](../external-modules/_base_.md#address)_\[\]›_

### getValidator

▸ **getValidator**\(`address`: [Address](../external-modules/_base_.md#address), `blockNumber?`: undefined \| number\): _Promise‹_[_Validator_](../interfaces/_wrappers_validators_.validator.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:212_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L212)

Get Validator information

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | [Address](../external-modules/_base_.md#address) |
| `blockNumber?` | undefined \| number |

**Returns:** _Promise‹_[_Validator_](../interfaces/_wrappers_validators_.validator.md)_›_

### getValidatorFromSigner

▸ **getValidatorFromSigner**\(`address`: [Address](../external-modules/_base_.md#address), `blockNumber?`: undefined \| number\): _Promise‹_[_Validator_](../interfaces/_wrappers_validators_.validator.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:229_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L229)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | [Address](../external-modules/_base_.md#address) |
| `blockNumber?` | undefined \| number |

**Returns:** _Promise‹_[_Validator_](../interfaces/_wrappers_validators_.validator.md)_›_

### getValidatorGroup

▸ **getValidatorGroup**\(`address`: [Address](../external-modules/_base_.md#address), `getAffiliates`: boolean, `blockNumber?`: undefined \| number\): _Promise‹_[_ValidatorGroup_](../interfaces/_wrappers_validators_.validatorgroup.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:235_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L235)

Get ValidatorGroup information

**Parameters:**

| Name | Type | Default |
| :--- | :--- | :--- |
| `address` | [Address](../external-modules/_base_.md#address) | - |
| `getAffiliates` | boolean | true |
| `blockNumber?` | undefined \| number | - |

**Returns:** _Promise‹_[_ValidatorGroup_](../interfaces/_wrappers_validators_.validatorgroup.md)_›_

### getValidatorLockedGoldRequirements

▸ **getValidatorLockedGoldRequirements**\(\): _Promise‹_[_LockedGoldRequirements_](../interfaces/_wrappers_validators_.lockedgoldrequirements.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:85_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L85)

Returns the Locked Gold requirements for validators.

**Returns:** _Promise‹_[_LockedGoldRequirements_](../interfaces/_wrappers_validators_.lockedgoldrequirements.md)_›_

The Locked Gold requirements for validators.

### getValidatorMembershipHistoryIndex

▸ **getValidatorMembershipHistoryIndex**\(`validator`: [Validator](../interfaces/_wrappers_validators_.validator.md), `blockNumber?`: undefined \| number\): _Promise‹object›_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:528_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L528)

Returns the group membership for `validator`.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `validator` | [Validator](../interfaces/_wrappers_validators_.validator.md) | Address of validator to retrieve group membership for. |
| `blockNumber?` | undefined \| number | Block number to retrieve group membership at. |

**Returns:** _Promise‹object›_

Group and membership history index for `validator`.

### getValidatorRewards

▸ **getValidatorRewards**\(`epochNumber`: number\): _Promise‹_[_ValidatorReward_](../interfaces/_wrappers_validators_.validatorreward.md)_\[\]›_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:480_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L480)

Retrieves ValidatorRewards for epochNumber.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `epochNumber` | number | The epoch to retrieve ValidatorRewards at. |

**Returns:** _Promise‹_[_ValidatorReward_](../interfaces/_wrappers_validators_.validatorreward.md)_\[\]›_

### meetsValidatorBalanceRequirements

▸ **meetsValidatorBalanceRequirements**\(`address`: [Address](../external-modules/_base_.md#address)\): _Promise‹boolean›_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:191_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L191)

Returns whether an account meets the requirements to register a validator.

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | [Address](../external-modules/_base_.md#address) |

**Returns:** _Promise‹boolean›_

Whether an account meets the requirements to register a validator.

### meetsValidatorGroupBalanceRequirements

▸ **meetsValidatorGroupBalanceRequirements**\(`address`: [Address](../external-modules/_base_.md#address)\): _Promise‹boolean›_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:204_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L204)

Returns whether an account meets the requirements to register a group.

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | [Address](../external-modules/_base_.md#address) |

**Returns:** _Promise‹boolean›_

Whether an account meets the requirements to register a group.

### registerValidatorGroup

▸ **registerValidatorGroup**\(`commission`: BigNumber\): _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:368_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L368)

Registers a validator group with no member validators. Fails if the account is already a validator or validator group. Fails if the account does not have sufficient weight.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `commission` | BigNumber | the commission this group receives on epoch payments made to its members. |

**Returns:** _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### reorderMember

▸ **reorderMember**\(`groupAddr`: [Address](../external-modules/_base_.md#address), `validator`: [Address](../external-modules/_base_.md#address), `newIndex`: number\): _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:447_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L447)

Reorders a member within a validator group. Fails if `validator` is not a member of the account's validator group.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `groupAddr` | [Address](../external-modules/_base_.md#address) | The validator group |
| `validator` | [Address](../external-modules/_base_.md#address) | The validator to reorder. |
| `newIndex` | number | New position for the validator |

**Returns:** _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### signerToAccount

▸ **signerToAccount**\(`signerAddress`: [Address](../external-modules/_base_.md#address), `blockNumber?`: undefined \| number\): _Promise‹string›_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:150_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L150)

Returns the account associated with `signer`.

**`dev`** Fails if the `signer` is not an account or previously authorized signer.

**Parameters:**

| Name | Type |
| :--- | :--- |
| `signerAddress` | [Address](../external-modules/_base_.md#address) |
| `blockNumber?` | undefined \| number |

**Returns:** _Promise‹string›_

The associated account.

### updateCommission

▸ **updateCommission**\(`commission`: BigNumber\): _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:75_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L75)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `commission` | BigNumber |

**Returns:** _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### validatorSignerToAccount

▸ **validatorSignerToAccount**\(`signerAddress`: [Address](../external-modules/_base_.md#address)\): _Promise‹string›_

_Defined in_ [_packages/contractkit/src/wrappers/Validators.ts:139_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Validators.ts#L139)

Returns the account associated with `signer`.

**`dev`** Fails if the `signer` is not an account or currently authorized validator.

**Parameters:**

| Name | Type |
| :--- | :--- |
| `signerAddress` | [Address](../external-modules/_base_.md#address) |

**Returns:** _Promise‹string›_

The associated account.

