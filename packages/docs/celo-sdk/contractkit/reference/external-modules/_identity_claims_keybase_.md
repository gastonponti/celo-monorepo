# identity/claims/keybase

## Index

### Type aliases

* [KeybaseClaim](_identity_claims_keybase_.md#keybaseclaim)

### Variables

* [KeybaseClaimType](_identity_claims_keybase_.md#const-keybaseclaimtype)
* [keybaseFilePathToProof](_identity_claims_keybase_.md#const-keybasefilepathtoproof)

### Functions

* [createKeybaseClaim](_identity_claims_keybase_.md#const-createkeybaseclaim)
* [proofFileName](_identity_claims_keybase_.md#const-prooffilename)
* [targetURL](_identity_claims_keybase_.md#const-targeturl)
* [verifyKeybaseClaim](_identity_claims_keybase_.md#verifykeybaseclaim)

## Type aliases

### KeybaseClaim

Ƭ **KeybaseClaim**: _t.TypeOf‹typeof KeybaseClaimType›_

_Defined in_ [_packages/contractkit/src/identity/claims/keybase.ts:14_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/claims/keybase.ts#L14)

## Variables

### `Const` KeybaseClaimType

• **KeybaseClaimType**: _TypeC‹object›_ = t.type\({ type: t.literal\(ClaimTypes.KEYBASE\), timestamp: TimestampType, // TODO: Validate compliant username before just interpolating username: t.string, }\)

_Defined in_ [_packages/contractkit/src/identity/claims/keybase.ts:8_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/claims/keybase.ts#L8)

### `Const` keybaseFilePathToProof

• **keybaseFilePathToProof**: _".well-known/celo/"_ = `.well-known/celo/`

_Defined in_ [_packages/contractkit/src/identity/claims/keybase.ts:16_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/claims/keybase.ts#L16)

## Functions

### `Const` createKeybaseClaim

▸ **createKeybaseClaim**\(`username`: string\): [_KeybaseClaim_](_identity_claims_keybase_.md#keybaseclaim)

_Defined in_ [_packages/contractkit/src/identity/claims/keybase.ts:67_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/claims/keybase.ts#L67)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `username` | string |

**Returns:** [_KeybaseClaim_](_identity_claims_keybase_.md#keybaseclaim)

### `Const` proofFileName

▸ **proofFileName**\(`address`: [Address](_base_.md#address)\): _string_

_Defined in_ [_packages/contractkit/src/identity/claims/keybase.ts:17_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/claims/keybase.ts#L17)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | [Address](_base_.md#address) |

**Returns:** _string_

### `Const` targetURL

▸ **targetURL**\(`username`: string, `address`: [Address](_base_.md#address)\): _string_

_Defined in_ [_packages/contractkit/src/identity/claims/keybase.ts:18_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/claims/keybase.ts#L18)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `username` | string |
| `address` | [Address](_base_.md#address) |

**Returns:** _string_

### verifyKeybaseClaim

▸ **verifyKeybaseClaim**\(`claim`: [KeybaseClaim](_identity_claims_keybase_.md#keybaseclaim), `signer`: [Address](_base_.md#address)\): _Promise‹string \| undefined›_

_Defined in_ [_packages/contractkit/src/identity/claims/keybase.ts:23_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/claims/keybase.ts#L23)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `claim` | [KeybaseClaim](_identity_claims_keybase_.md#keybaseclaim) |
| `signer` | [Address](_base_.md#address) |

**Returns:** _Promise‹string \| undefined›_

