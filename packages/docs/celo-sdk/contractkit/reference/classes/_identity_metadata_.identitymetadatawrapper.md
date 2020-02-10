# IdentityMetadataWrapper

## Hierarchy

* **IdentityMetadataWrapper**

## Index

### Constructors

* [constructor](_identity_metadata_.identitymetadatawrapper.md#constructor)

### Properties

* [data](_identity_metadata_.identitymetadatawrapper.md#data)

### Accessors

* [claims](_identity_metadata_.identitymetadatawrapper.md#claims)

### Methods

* [addClaim](_identity_metadata_.identitymetadatawrapper.md#addclaim)
* [filterClaims](_identity_metadata_.identitymetadatawrapper.md#filterclaims)
* [findClaim](_identity_metadata_.identitymetadatawrapper.md#findclaim)
* [hashOfClaims](_identity_metadata_.identitymetadatawrapper.md#hashofclaims)
* [toString](_identity_metadata_.identitymetadatawrapper.md#tostring)
* [fetchFromURL](_identity_metadata_.identitymetadatawrapper.md#static-fetchfromurl)
* [fromEmpty](_identity_metadata_.identitymetadatawrapper.md#static-fromempty)
* [fromFile](_identity_metadata_.identitymetadatawrapper.md#static-fromfile)
* [fromRawString](_identity_metadata_.identitymetadatawrapper.md#static-fromrawstring)

## Constructors

### constructor

+ **new IdentityMetadataWrapper**\(`data`: [IdentityMetadata](../external-modules/_identity_metadata_.md#identitymetadata)\): [_IdentityMetadataWrapper_](_identity_metadata_.identitymetadatawrapper.md)

_Defined in_ [_packages/contractkit/src/identity/metadata.ts:79_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L79)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `data` | [IdentityMetadata](../external-modules/_identity_metadata_.md#identitymetadata) |

**Returns:** [_IdentityMetadataWrapper_](_identity_metadata_.identitymetadatawrapper.md)

## Properties

### data

• **data**: [_IdentityMetadata_](../external-modules/_identity_metadata_.md#identitymetadata)

_Defined in_ [_packages/contractkit/src/identity/metadata.ts:24_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L24)

## Accessors

### claims

• **get claims**\(\): _object \| object \| object \| object \| object\[\]_

_Defined in_ [_packages/contractkit/src/identity/metadata.ts:85_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L85)

**Returns:** _object \| object \| object \| object \| object\[\]_

## Methods

### addClaim

▸ **addClaim**\(`claim`: [Claim](../external-modules/_identity_claims_claim_.md#claim), `signer`: Signer\): _Promise‹void›_

_Defined in_ [_packages/contractkit/src/identity/metadata.ts:100_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L100)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `claim` | [Claim](../external-modules/_identity_claims_claim_.md#claim) |
| `signer` | Signer |

**Returns:** _Promise‹void›_

### filterClaims

▸ **filterClaims**&lt;**K**&gt;\(`type`: K\): _Array‹_[_ClaimPayload_](../external-modules/_identity_claims_claim_.md#claimpayload)_‹K››_

_Defined in_ [_packages/contractkit/src/identity/metadata.ts:127_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L127)

**Type parameters:**

▪ **K**: [_ClaimTypes_](../enums/_identity_claims_types_.claimtypes.md)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `type` | K |

**Returns:** _Array‹_[_ClaimPayload_](../external-modules/_identity_claims_claim_.md#claimpayload)_‹K››_

### findClaim

▸ **findClaim**&lt;**K**&gt;\(`type`: K\): [_ClaimPayload_](../external-modules/_identity_claims_claim_.md#claimpayload)_‹K› \| undefined_

_Defined in_ [_packages/contractkit/src/identity/metadata.ts:123_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L123)

**Type parameters:**

▪ **K**: [_ClaimTypes_](../enums/_identity_claims_types_.claimtypes.md)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `type` | K |

**Returns:** [_ClaimPayload_](../external-modules/_identity_claims_claim_.md#claimpayload)_‹K› \| undefined_

### hashOfClaims

▸ **hashOfClaims**\(\): _string_

_Defined in_ [_packages/contractkit/src/identity/metadata.ts:89_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L89)

**Returns:** _string_

### toString

▸ **toString**\(\): _string_

_Defined in_ [_packages/contractkit/src/identity/metadata.ts:93_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L93)

**Returns:** _string_

### `Static` fetchFromURL

▸ **fetchFromURL**\(`url`: string\): _Promise‹_[_IdentityMetadataWrapper_](_identity_metadata_.identitymetadatawrapper.md)_‹››_

_Defined in_ [_packages/contractkit/src/identity/metadata.ts:36_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L36)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `url` | string |

**Returns:** _Promise‹_[_IdentityMetadataWrapper_](_identity_metadata_.identitymetadatawrapper.md)_‹››_

### `Static` fromEmpty

▸ **fromEmpty**\(`address`: string\): [_IdentityMetadataWrapper_](_identity_metadata_.identitymetadatawrapper.md)_‹›_

_Defined in_ [_packages/contractkit/src/identity/metadata.ts:26_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L26)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | string |

**Returns:** [_IdentityMetadataWrapper_](_identity_metadata_.identitymetadatawrapper.md)_‹›_

### `Static` fromFile

▸ **fromFile**\(`path`: string\): [_IdentityMetadataWrapper_](_identity_metadata_.identitymetadatawrapper.md)_‹›_

_Defined in_ [_packages/contractkit/src/identity/metadata.ts:44_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L44)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `path` | string |

**Returns:** [_IdentityMetadataWrapper_](_identity_metadata_.identitymetadatawrapper.md)_‹›_

### `Static` fromRawString

▸ **fromRawString**\(`rawData`: string\): [_IdentityMetadataWrapper_](_identity_metadata_.identitymetadatawrapper.md)_‹›_

_Defined in_ [_packages/contractkit/src/identity/metadata.ts:48_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/metadata.ts#L48)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `rawData` | string |

**Returns:** [_IdentityMetadataWrapper_](_identity_metadata_.identitymetadatawrapper.md)_‹›_

