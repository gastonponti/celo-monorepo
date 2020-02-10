# AttestationsWrapper

## Hierarchy

* [BaseWrapper](_wrappers_basewrapper_.basewrapper.md)‹Attestations›

  ↳ **AttestationsWrapper**

## Index

### Constructors

* [constructor](_wrappers_attestations_.attestationswrapper.md#constructor)

### Properties

* [attestationExpiryBlocks](_wrappers_attestations_.attestationswrapper.md#attestationexpiryblocks)
* [attestationRequestFees](_wrappers_attestations_.attestationswrapper.md#attestationrequestfees)
* [getAttestationIssuers](_wrappers_attestations_.attestationswrapper.md#getattestationissuers)
* [getAttestationStat](_wrappers_attestations_.attestationswrapper.md#getattestationstat)
* [getAttestationState](_wrappers_attestations_.attestationswrapper.md#getattestationstate)
* [getUnselectedRequest](_wrappers_attestations_.attestationswrapper.md#getunselectedrequest)
* [selectIssuersWaitBlocks](_wrappers_attestations_.attestationswrapper.md#selectissuerswaitblocks)

### Accessors

* [address](_wrappers_attestations_.attestationswrapper.md#address)

### Methods

* [approveAttestationFee](_wrappers_attestations_.attestationswrapper.md#approveattestationfee)
* [attestationFeeRequired](_wrappers_attestations_.attestationswrapper.md#attestationfeerequired)
* [complete](_wrappers_attestations_.attestationswrapper.md#complete)
* [findMatchingIssuer](_wrappers_attestations_.attestationswrapper.md#findmatchingissuer)
* [getActionableAttestations](_wrappers_attestations_.attestationswrapper.md#getactionableattestations)
* [getConfig](_wrappers_attestations_.attestationswrapper.md#getconfig)
* [getNonCompliantIssuers](_wrappers_attestations_.attestationswrapper.md#getnoncompliantissuers)
* [lookupPhoneNumbers](_wrappers_attestations_.attestationswrapper.md#lookupphonenumbers)
* [request](_wrappers_attestations_.attestationswrapper.md#request)
* [revealPhoneNumberToIssuer](_wrappers_attestations_.attestationswrapper.md#revealphonenumbertoissuer)
* [selectIssuers](_wrappers_attestations_.attestationswrapper.md#selectissuers)
* [validateAttestationCode](_wrappers_attestations_.attestationswrapper.md#validateattestationcode)
* [waitForSelectingIssuers](_wrappers_attestations_.attestationswrapper.md#waitforselectingissuers)

## Constructors

### constructor

+ **new AttestationsWrapper**\(`kit`: [ContractKit](_kit_.contractkit.md), `contract`: Attestations\): [_AttestationsWrapper_](_wrappers_attestations_.attestationswrapper.md)

_Inherited from_ [_BaseWrapper_](_wrappers_basewrapper_.basewrapper.md)_._[_constructor_](_wrappers_basewrapper_.basewrapper.md#constructor)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:14_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L14)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](_kit_.contractkit.md) |
| `contract` | Attestations |

**Returns:** [_AttestationsWrapper_](_wrappers_attestations_.attestationswrapper.md)

## Properties

### attestationExpiryBlocks

• **attestationExpiryBlocks**: _function_ = proxyCall\( this.contract.methods.attestationExpiryBlocks, undefined, valueToInt \)

_Defined in_ [_packages/contractkit/src/wrappers/Attestations.ts:90_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Attestations.ts#L90)

Returns the time an attestation can be completable before it is considered expired

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### attestationRequestFees

• **attestationRequestFees**: _function_ = proxyCall\( this.contract.methods.attestationRequestFees, undefined, valueToBigNumber \)

_Defined in_ [_packages/contractkit/src/wrappers/Attestations.ts:101_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Attestations.ts#L101)

Returns the attestation request fee in a given currency.

**`param`** Token address.

**`returns`** The fee as big number.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getAttestationIssuers

• **getAttestationIssuers**: _function_ = proxyCall\( this.contract.methods.getAttestationIssuers, tupleParser\(PhoneNumberUtils.getPhoneHash, \(x: string\) =&gt; x\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Attestations.ts:157_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Attestations.ts#L157)

Returns the issuers of attestations for a phoneNumber/account combo

**`param`** Phone Number

**`param`** Account

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getAttestationStat

• **getAttestationStat**: _function_ = proxyCall\( this.contract.methods.getAttestationStats, tupleParser\(PhoneNumberUtils.getPhoneHash, stringIdentity\), \(stat\) =&gt; \({ completed: valueToInt\(stat\[0\]\), total: valueToInt\(stat\[1\]\) }\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Attestations.ts:182_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Attestations.ts#L182)

Returns the attestation stats of a phone number/account pair

**`param`** Phone Number

**`param`** Account

#### Type declaration:

▸ \(`phoneNumber`: string, `account`: [Address](../external-modules/_base_.md#address)\): _Promise‹_[_AttestationStat_](../interfaces/_wrappers_attestations_.attestationstat.md)_›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `phoneNumber` | string |
| `account` | [Address](../external-modules/_base_.md#address) |

### getAttestationState

• **getAttestationState**: _function_ = proxyCall\( this.contract.methods.getAttestationState, tupleParser\(PhoneNumberUtils.getPhoneHash, stringIdentity, stringIdentity\), \(state\) =&gt; \({ attestationState: parseInt\(state\[0\], 10\) }\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Attestations.ts:167_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Attestations.ts#L167)

Returns the attestation state of a phone number/account/issuer tuple

**`param`** Phone Number

**`param`** Account

#### Type declaration:

▸ \(`phoneNumber`: string, `account`: [Address](../external-modules/_base_.md#address), `issuer`: [Address](../external-modules/_base_.md#address)\): _Promise‹_[_AttestationStateForIssuer_](../interfaces/_wrappers_attestations_.attestationstateforissuer.md)_›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `phoneNumber` | string |
| `account` | [Address](../external-modules/_base_.md#address) |
| `issuer` | [Address](../external-modules/_base_.md#address) |

### getUnselectedRequest

• **getUnselectedRequest**: _function_ = proxyCall\( this.contract.methods.getUnselectedRequest, tupleParser\(PhoneNumberUtils.getPhoneHash, \(x: string\) =&gt; x\), \(res\) =&gt; \({ blockNumber: valueToInt\(res\[0\]\), attestationsRequested: valueToInt\(res\[1\]\), attestationRequestFeeToken: res\[2\], }\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Attestations.ts:118_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Attestations.ts#L118)

**`notice`** Returns the unselected attestation request for an identifier/account pair, if any.

**`param`** Hash of the identifier.

**`param`** Address of the account.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### selectIssuersWaitBlocks

• **selectIssuersWaitBlocks**: _function_ = proxyCall\( this.contract.methods.selectIssuersWaitBlocks, undefined, valueToInt \)

_Defined in_ [_packages/contractkit/src/wrappers/Attestations.ts:107_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Attestations.ts#L107)

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

## Accessors

### address

• **get address**\(\): _string_

_Inherited from_ [_BaseWrapper_](_wrappers_basewrapper_.basewrapper.md)_._[_address_](_wrappers_basewrapper_.basewrapper.md#address)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:18_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L18)

Contract address

**Returns:** _string_

## Methods

### approveAttestationFee

▸ **approveAttestationFee**\(`attestationsRequested`: number\): _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

_Defined in_ [_packages/contractkit/src/wrappers/Attestations.ts:205_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Attestations.ts#L205)

Approves the necessary amount of StableToken to request Attestations

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attestationsRequested` | number | The number of attestations to request |

**Returns:** _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹boolean››_

### attestationFeeRequired

▸ **attestationFeeRequired**\(`attestationsRequested`: number\): _Promise‹BigNumber‹››_

_Defined in_ [_packages/contractkit/src/wrappers/Attestations.ts:195_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Attestations.ts#L195)

Calculates the amount of StableToken required to request Attestations

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `attestationsRequested` | number | The number of attestations to request |

**Returns:** _Promise‹BigNumber‹››_

### complete

▸ **complete**\(`phoneNumber`: string, `account`: [Address](../external-modules/_base_.md#address), `issuer`: [Address](../external-modules/_base_.md#address), `code`: string\): _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

_Defined in_ [_packages/contractkit/src/wrappers/Attestations.ts:291_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Attestations.ts#L291)

Completes an attestation with the corresponding code

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `phoneNumber` | string | The phone number of the attestation |
| `account` | [Address](../external-modules/_base_.md#address) | The account of the attestation |
| `issuer` | [Address](../external-modules/_base_.md#address) | The issuer of the attestation |
| `code` | string | The code received by the validator |

**Returns:** _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

### findMatchingIssuer

▸ **findMatchingIssuer**\(`phoneNumber`: string, `account`: [Address](../external-modules/_base_.md#address), `code`: string, `issuers`: string\[\]\): _Promise‹string \| null›_

_Defined in_ [_packages/contractkit/src/wrappers/Attestations.ts:310_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Attestations.ts#L310)

Given a list of issuers, finds the matching issuer for a given code

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `phoneNumber` | string | The phone number of the attestation |
| `account` | [Address](../external-modules/_base_.md#address) | The account of the attestation |
| `code` | string | The code received by the validator |
| `issuers` | string\[\] | The list of potential issuers |

**Returns:** _Promise‹string \| null›_

### getActionableAttestations

▸ **getActionableAttestations**\(`phoneNumber`: string, `account`: [Address](../external-modules/_base_.md#address)\): _Promise‹_[_ActionableAttestation_](../interfaces/_wrappers_attestations_.actionableattestation.md)_\[\]›_

_Defined in_ [_packages/contractkit/src/wrappers/Attestations.ts:217_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Attestations.ts#L217)

Returns an array of attestations that can be completed, along with the issuers' attestation service urls

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `phoneNumber` | string | - |
| `account` | [Address](../external-modules/_base_.md#address) |  |

**Returns:** _Promise‹_[_ActionableAttestation_](../interfaces/_wrappers_attestations_.actionableattestation.md)_\[\]›_

### getConfig

▸ **getConfig**\(`tokens`: string\[\]\): _Promise‹_[_AttestationsConfig_](../interfaces/_wrappers_attestations_.attestationsconfig.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/Attestations.ts:339_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Attestations.ts#L339)

Returns the current configuration parameters for the contract.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `tokens` | string\[\] | List of tokens used for attestation fees. |

**Returns:** _Promise‹_[_AttestationsConfig_](../interfaces/_wrappers_attestations_.attestationsconfig.md)_›_

### getNonCompliantIssuers

▸ **getNonCompliantIssuers**\(`phoneNumber`: string, `account`: [Address](../external-modules/_base_.md#address)\): _Promise‹_[_Address_](../external-modules/_base_.md#address)_\[\]›_

_Defined in_ [_packages/contractkit/src/wrappers/Attestations.ts:239_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Attestations.ts#L239)

Returns an array of issuer addresses that were found to not run the attestation service

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `phoneNumber` | string | - |
| `account` | [Address](../external-modules/_base_.md#address) |  |

**Returns:** _Promise‹_[_Address_](../external-modules/_base_.md#address)_\[\]›_

### lookupPhoneNumbers

▸ **lookupPhoneNumbers**\(`phoneNumberHashes`: string\[\]\): _Promise‹Record‹string, Record‹string,_ [_AttestationStat_](../interfaces/_wrappers_attestations_.attestationstat.md)_›››_

_Defined in_ [_packages/contractkit/src/wrappers/Attestations.ts:356_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Attestations.ts#L356)

Lookup mapped walleet addresses for a given list of hashes of phone numbers

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `phoneNumberHashes` | string\[\] | The hashes of phone numbers to lookup |

**Returns:** _Promise‹Record‹string, Record‹string,_ [_AttestationStat_](../interfaces/_wrappers_attestations_.attestationstat.md)_›››_

### request

▸ **request**\(`phoneNumber`: string, `attestationsRequested`: number\): _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

_Defined in_ [_packages/contractkit/src/wrappers/Attestations.ts:399_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Attestations.ts#L399)

Requests attestations for a phone number

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `phoneNumber` | string | The phone number for which to request attestations for |
| `attestationsRequested` | number | The number of attestations to request |

**Returns:** _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

### revealPhoneNumberToIssuer

▸ **revealPhoneNumberToIssuer**\(`phoneNumber`: string, `account`: [Address](../external-modules/_base_.md#address), `issuer`: [Address](../external-modules/_base_.md#address), `serviceURL`: string\): _Promise‹Response›_

_Defined in_ [_packages/contractkit/src/wrappers/Attestations.ts:417_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Attestations.ts#L417)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `phoneNumber` | string |
| `account` | [Address](../external-modules/_base_.md#address) |
| `issuer` | [Address](../external-modules/_base_.md#address) |
| `serviceURL` | string |

**Returns:** _Promise‹Response›_

### selectIssuers

▸ **selectIssuers**\(`phoneNumber`: string\): [_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹void›_

_Defined in_ [_packages/contractkit/src/wrappers/Attestations.ts:412_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Attestations.ts#L412)

Selects the issuers for previously requested attestations for a phone number

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `phoneNumber` | string | The phone number for which to request attestations for |

**Returns:** [_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹void›_

### validateAttestationCode

▸ **validateAttestationCode**\(`phoneNumber`: string, `account`: [Address](../external-modules/_base_.md#address), `issuer`: [Address](../external-modules/_base_.md#address), `code`: string\): _Promise‹boolean›_

_Defined in_ [_packages/contractkit/src/wrappers/Attestations.ts:443_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Attestations.ts#L443)

Validates a given code by the issuer on-chain

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `phoneNumber` | string | The phone number which requested attestation |
| `account` | [Address](../external-modules/_base_.md#address) | The account which requested attestation |
| `issuer` | [Address](../external-modules/_base_.md#address) | The address of the issuer of the attestation |
| `code` | string | The code send by the issuer |

**Returns:** _Promise‹boolean›_

### waitForSelectingIssuers

▸ **waitForSelectingIssuers**\(`phoneNumber`: string, `account`: [Address](../external-modules/_base_.md#address), `timeoutSeconds`: number, `pollDurationSeconds`: number\): _Promise‹void›_

_Defined in_ [_packages/contractkit/src/wrappers/Attestations.ts:128_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Attestations.ts#L128)

**Parameters:**

| Name | Type | Default |
| :--- | :--- | :--- |
| `phoneNumber` | string | - |
| `account` | [Address](../external-modules/_base_.md#address) | - |
| `timeoutSeconds` | number | 120 |
| `pollDurationSeconds` | number | 1 |

**Returns:** _Promise‹void›_

