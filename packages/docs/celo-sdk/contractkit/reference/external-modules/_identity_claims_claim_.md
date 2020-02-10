# identity/claims/claim

## Index

### Type aliases

* [Claim](_identity_claims_claim_.md#claim)
* [ClaimPayload](_identity_claims_claim_.md#claimpayload)
* [DomainClaim](_identity_claims_claim_.md#domainclaim)
* [NameClaim](_identity_claims_claim_.md#nameclaim)

### Variables

* [ClaimType](_identity_claims_claim_.md#const-claimtype)
* [SignedClaimType](_identity_claims_claim_.md#const-signedclaimtype)

### Functions

* [createDomainClaim](_identity_claims_claim_.md#const-createdomainclaim)
* [createNameClaim](_identity_claims_claim_.md#const-createnameclaim)
* [hashOfClaim](_identity_claims_claim_.md#hashofclaim)
* [hashOfClaims](_identity_claims_claim_.md#hashofclaims)
* [isOfType](_identity_claims_claim_.md#const-isoftype)
* [serializeClaim](_identity_claims_claim_.md#serializeclaim)
* [validateClaim](_identity_claims_claim_.md#validateclaim)

## Type aliases

### Claim

Ƭ **Claim**: [_AttestationServiceURLClaim_](_identity_claims_attestation_service_url_.md#attestationserviceurlclaim) _\|_ [_DomainClaim_](_identity_claims_claim_.md#domainclaim) _\|_ [_KeybaseClaim_](_identity_claims_keybase_.md#keybaseclaim) _\|_ [_NameClaim_](_identity_claims_claim_.md#nameclaim) _\|_ [_AccountClaim_](_identity_claims_account_.md#accountclaim)

_Defined in_ [_packages/contractkit/src/identity/claims/claim.ts:40_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/claims/claim.ts#L40)

### ClaimPayload

Ƭ **ClaimPayload**: _K extends typeof DOMAIN ? DomainClaim : K extends typeof NAME ? NameClaim : K extends typeof KEYBASE ? KeybaseClaim : K extends typeof ATTESTATION\_SERVICE\_URL ? AttestationServiceURLClaim : AccountClaim_

_Defined in_ [_packages/contractkit/src/identity/claims/claim.ts:47_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/claims/claim.ts#L47)

### DomainClaim

Ƭ **DomainClaim**: _t.TypeOf‹typeof DomainClaimType›_

_Defined in_ [_packages/contractkit/src/identity/claims/claim.ts:38_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/claims/claim.ts#L38)

### NameClaim

Ƭ **NameClaim**: _t.TypeOf‹typeof NameClaimType›_

_Defined in_ [_packages/contractkit/src/identity/claims/claim.ts:39_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/claims/claim.ts#L39)

## Variables

### `Const` ClaimType

• **ClaimType**: _UnionC‹\[TypeC‹object›, Type‹object, any, unknown›, TypeC‹object›, TypeC‹object›, TypeC‹object›\]›_ = t.union\(\[ AttestationServiceURLClaimType, AccountClaimType, DomainClaimType, KeybaseClaimType, NameClaimType, \]\)

_Defined in_ [_packages/contractkit/src/identity/claims/claim.ts:25_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/claims/claim.ts#L25)

### `Const` SignedClaimType

• **SignedClaimType**: _TypeC‹object›_ = t.type\({ claim: ClaimType, signature: SignatureType, }\)

_Defined in_ [_packages/contractkit/src/identity/claims/claim.ts:33_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/claims/claim.ts#L33)

## Functions

### `Const` createDomainClaim

▸ **createDomainClaim**\(`domain`: string\): [_DomainClaim_](_identity_claims_claim_.md#domainclaim)

_Defined in_ [_packages/contractkit/src/identity/claims/claim.ts:95_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/claims/claim.ts#L95)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `domain` | string |

**Returns:** [_DomainClaim_](_identity_claims_claim_.md#domainclaim)

### `Const` createNameClaim

▸ **createNameClaim**\(`name`: string\): [_NameClaim_](_identity_claims_claim_.md#nameclaim)

_Defined in_ [_packages/contractkit/src/identity/claims/claim.ts:89_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/claims/claim.ts#L89)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `name` | string |

**Returns:** [_NameClaim_](_identity_claims_claim_.md#nameclaim)

### hashOfClaim

▸ **hashOfClaim**\(`claim`: [Claim](_identity_claims_claim_.md#claim)\): _string_

_Defined in_ [_packages/contractkit/src/identity/claims/claim.ts:76_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/claims/claim.ts#L76)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `claim` | [Claim](_identity_claims_claim_.md#claim) |

**Returns:** _string_

### hashOfClaims

▸ **hashOfClaims**\(`claims`: [Claim](_identity_claims_claim_.md#claim)\[\]\): _string_

_Defined in_ [_packages/contractkit/src/identity/claims/claim.ts:80_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/claims/claim.ts#L80)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `claims` | [Claim](_identity_claims_claim_.md#claim)\[\] |

**Returns:** _string_

### `Const` isOfType

▸ **isOfType**&lt;**K**&gt;\(`type`: K\): _\(Anonymous function\)_

_Defined in_ [_packages/contractkit/src/identity/claims/claim.ts:57_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/claims/claim.ts#L57)

**Type parameters:**

▪ **K**: [_ClaimTypes_](../enums/_identity_claims_types_.claimtypes.md)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `type` | K |

**Returns:** _\(Anonymous function\)_

### serializeClaim

▸ **serializeClaim**\(`claim`: [Claim](_identity_claims_claim_.md#claim)\): _string_

_Defined in_ [_packages/contractkit/src/identity/claims/claim.ts:85_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/claims/claim.ts#L85)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `claim` | [Claim](_identity_claims_claim_.md#claim) |

**Returns:** _string_

### validateClaim

▸ **validateClaim**\(`claim`: [Claim](_identity_claims_claim_.md#claim), `address`: string, `kit`: [ContractKit](../classes/_kit_.contractkit.md)\): _Promise‹undefined \| string›_

_Defined in_ [_packages/contractkit/src/identity/claims/claim.ts:66_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/identity/claims/claim.ts#L66)

Validates a claim made by an account, i.e. whether the claim is usable

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `claim` | [Claim](_identity_claims_claim_.md#claim) | The claim to validate |
| `address` | string | The address that is making the claim |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) | - |

**Returns:** _Promise‹undefined \| string›_

If valid, returns undefined. If invalid or unable to validate, returns a string with the error

