# AccountsWrapper

Contract for handling deposits needed for voting.

## Hierarchy

* [BaseWrapper](../classes/_wrappers_basewrapper_.basewrapper.md)‹Accounts›

  ↳ **AccountsWrapper**

## Index

### Constructors

* [constructor](../classes/_wrappers_accounts_.accountswrapper.md#constructor)

### Properties

* [createAccount](../classes/_wrappers_accounts_.accountswrapper.md#createaccount)
* [getAttestationSigner](../classes/_wrappers_accounts_.accountswrapper.md#getattestationsigner)
* [getDataEncryptionKey](../classes/_wrappers_accounts_.accountswrapper.md#getdataencryptionkey)
* [getMetadataURL](../classes/_wrappers_accounts_.accountswrapper.md#getmetadataurl)
* [getValidatorSigner](../classes/_wrappers_accounts_.accountswrapper.md#getvalidatorsigner)
* [getVoteSigner](../classes/_wrappers_accounts_.accountswrapper.md#getvotesigner)
* [getWalletAddress](../classes/_wrappers_accounts_.accountswrapper.md#getwalletaddress)
* [isAccount](../classes/_wrappers_accounts_.accountswrapper.md#isaccount)
* [isSigner](../classes/_wrappers_accounts_.accountswrapper.md#issigner)
* [setAccount](../classes/_wrappers_accounts_.accountswrapper.md#setaccount)
* [setAccountDataEncryptionKey](../classes/_wrappers_accounts_.accountswrapper.md#setaccountdataencryptionkey)
* [setMetadataURL](../classes/_wrappers_accounts_.accountswrapper.md#setmetadataurl)
* [setName](../classes/_wrappers_accounts_.accountswrapper.md#setname)
* [setWalletAddress](../classes/_wrappers_accounts_.accountswrapper.md#setwalletaddress)
* [validatorSignerToAccount](../classes/_wrappers_accounts_.accountswrapper.md#validatorsignertoaccount)
* [voteSignerToAccount](../classes/_wrappers_accounts_.accountswrapper.md#votesignertoaccount)

### Accessors

* [address](../classes/_wrappers_accounts_.accountswrapper.md#address)

### Methods

* [authorizeAttestationSigner](../classes/_wrappers_accounts_.accountswrapper.md#authorizeattestationsigner)
* [authorizeValidatorSigner](../classes/_wrappers_accounts_.accountswrapper.md#authorizevalidatorsigner)
* [authorizeVoteSigner](../classes/_wrappers_accounts_.accountswrapper.md#authorizevotesigner)
* [generateProofOfSigningKeyPossession](../classes/_wrappers_accounts_.accountswrapper.md#generateproofofsigningkeypossession)
* [generateProofOfSigningKeyPossessionLocally](../classes/_wrappers_accounts_.accountswrapper.md#generateproofofsigningkeypossessionlocally)
* [getAccountSummary](../classes/_wrappers_accounts_.accountswrapper.md#getaccountsummary)
* [getName](../classes/_wrappers_accounts_.accountswrapper.md#getname)
* [parseSignatureOfAddress](../classes/_wrappers_accounts_.accountswrapper.md#parsesignatureofaddress)
* [signerToAccount](../classes/_wrappers_accounts_.accountswrapper.md#signertoaccount)

## Constructors

### constructor

+ **new AccountsWrapper**\(`kit`: [ContractKit](../classes/_kit_.contractkit.md), `contract`: Accounts\): [_AccountsWrapper_](../classes/_wrappers_accounts_.accountswrapper.md)

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_constructor_](../classes/_wrappers_basewrapper_.basewrapper.md#constructor)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:14_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L14)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) |
| `contract` | Accounts |

**Returns:** [_AccountsWrapper_](../classes/_wrappers_accounts_.accountswrapper.md)

## Properties

### createAccount

• **createAccount**: _function_ = proxySend\(this.kit, this.contract.methods.createAccount\)

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:42_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L42)

Creates an account.

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getAttestationSigner

• **getAttestationSigner**: _function_ = proxyCall\( this.contract.methods.getAttestationSigner \)

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:49_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L49)

Returns the attestation signer for the specified account.

**`param`** The address of the account.

**`returns`** The address with which the account can vote.

#### Type declaration:

▸ \(`account`: string\): _Promise‹_[_Address_](_base_.md#address)_›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | string |

### getDataEncryptionKey

• **getDataEncryptionKey**: _function_ = proxyCall\(this.contract.methods.getDataEncryptionKey\)

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:253_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L253)

Returns the set data encryption key for the account

**`param`** Account

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getMetadataURL

• **getMetadataURL**: _function_ = proxyCall\(this.contract.methods.getMetadataURL\)

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:265_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L265)

Returns the metadataURL for the account

**`param`** Account

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### getValidatorSigner

• **getValidatorSigner**: _function_ = proxyCall\( this.contract.methods.getValidatorSigner \)

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:65_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L65)

Returns the validator signer for the specified account.

**`param`** The address of the account.

**`returns`** The address with which the account can register a validator or group.

#### Type declaration:

▸ \(`account`: string\): _Promise‹_[_Address_](_base_.md#address)_›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | string |

### getVoteSigner

• **getVoteSigner**: _function_ = proxyCall\( this.contract.methods.getVoteSigner \)

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:57_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L57)

Returns the vote signer for the specified account.

**`param`** The address of the account.

**`returns`** The address with which the account can vote.

#### Type declaration:

▸ \(`account`: string\): _Promise‹_[_Address_](_base_.md#address)_›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | string |

### getWalletAddress

• **getWalletAddress**: _function_ = proxyCall\(this.contract.methods.getWalletAddress\)

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:259_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L259)

Returns the set wallet address for the account

**`param`** Account

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### isAccount

• **isAccount**: _function_ = proxyCall\(this.contract.methods.isAccount\)

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:104_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L104)

Check if an account already exists.

**`param`** The address of the account

**`returns`** Returns `true` if account exists. Returns `false` otherwise.

#### Type declaration:

▸ \(`account`: string\): _Promise‹boolean›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | string |

### isSigner

• **isSigner**: _function_ = proxyCall\( this.contract.methods.isAuthorizedSigner \)

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:111_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L111)

Check if an address is a signer address

**`param`** The address of the account

**`returns`** Returns `true` if account exists. Returns `false` otherwise.

#### Type declaration:

▸ \(`address`: string\): _Promise‹boolean›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | string |

### setAccount

• **setAccount**: _function_ = proxySend\(this.kit, this.contract.methods.setAccount\)

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:282_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L282)

Convenience Setter for the dataEncryptionKey and wallet address for an account

**`param`** A string to set as the name of the account

**`param`** secp256k1 public key for data encryption. Preferably compressed.

**`param`** The wallet address to set for the account

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### setAccountDataEncryptionKey

• **setAccountDataEncryptionKey**: _function_ = proxySend\( this.kit, this.contract.methods.setAccountDataEncryptionKey \)

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:271_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L271)

Sets the data encryption of the account

**`param`** The key to set

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### setMetadataURL

• **setMetadataURL**: _function_ = proxySend\(this.kit, this.contract.methods.setMetadataURL\)

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:294_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L294)

Sets the metadataURL for the account

**`param`** The url to set

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### setName

• **setName**: _function_ = proxySend\(this.kit, this.contract.methods.setName\)

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:288_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L288)

Sets the name for the account

**`param`** The name to set

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### setWalletAddress

• **setWalletAddress**: _function_ = proxySend\(this.kit, this.contract.methods.setWalletAddress\)

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:300_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L300)

Sets the wallet address for the account

**`param`** The address to set

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### validatorSignerToAccount

• **validatorSignerToAccount**: _function_ = proxyCall\( this.contract.methods.validatorSignerToAccount \)

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:83_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L83)

Returns the account address given the signer for validating

**`param`** Address that is authorized to sign the tx as validator

**`returns`** The Account address

#### Type declaration:

▸ \(`signer`: [Address](_base_.md#address)\): _Promise‹_[_Address_](_base_.md#address)_›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `signer` | [Address](_base_.md#address) |

### voteSignerToAccount

• **voteSignerToAccount**: _function_ = proxyCall\( this.contract.methods.voteSignerToAccount \)

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:74_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L74)

Returns the account address given the signer for voting

**`param`** Address that is authorized to sign the tx as voter

**`returns`** The Account address

#### Type declaration:

▸ \(`signer`: [Address](_base_.md#address)\): _Promise‹_[_Address_](_base_.md#address)_›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `signer` | [Address](_base_.md#address) |

## Accessors

### address

• **get address**\(\): _string_

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_address_](../classes/_wrappers_basewrapper_.basewrapper.md#address)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:18_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L18)

Contract address

**Returns:** _string_

## Methods

### authorizeAttestationSigner

▸ **authorizeAttestationSigner**\(`signer`: [Address](_base_.md#address), `proofOfSigningKeyPossession`: Signature\): _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:144_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L144)

Authorize an attestation signing key on behalf of this account to another address.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `signer` | [Address](_base_.md#address) | The address of the signing key to authorize. |
| `proofOfSigningKeyPossession` | Signature | The account address signed by the signer address. |

**Returns:** _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

A CeloTransactionObject

### authorizeValidatorSigner

▸ **authorizeValidatorSigner**\(`signer`: [Address](_base_.md#address), `proofOfSigningKeyPossession`: Signature\): _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:185_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L185)

Authorizes an address to sign consensus messages on behalf of the account.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `signer` | [Address](_base_.md#address) | The address of the signing key to authorize. |
| `proofOfSigningKeyPossession` | Signature | The account address signed by the signer address. |

**Returns:** _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

A CeloTransactionObject

### authorizeVoteSigner

▸ **authorizeVoteSigner**\(`signer`: [Address](_base_.md#address), `proofOfSigningKeyPossession`: Signature\): _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:164_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L164)

Authorizes an address to sign votes on behalf of the account.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `signer` | [Address](_base_.md#address) | The address of the vote signing key to authorize. |
| `proofOfSigningKeyPossession` | Signature | The account address signed by the signer address. |

**Returns:** _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

A CeloTransactionObject

### generateProofOfSigningKeyPossession

▸ **generateProofOfSigningKeyPossession**\(`account`: [Address](_base_.md#address), `signer`: [Address](_base_.md#address)\): _Promise‹object›_

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:223_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L223)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | [Address](_base_.md#address) |
| `signer` | [Address](_base_.md#address) |

**Returns:** _Promise‹object›_

### generateProofOfSigningKeyPossessionLocally

▸ **generateProofOfSigningKeyPossessionLocally**\(`account`: [Address](_base_.md#address), `signer`: [Address](_base_.md#address), `privateKey`: string\): _Promise‹object›_

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:231_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L231)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | [Address](_base_.md#address) |
| `signer` | [Address](_base_.md#address) |
| `privateKey` | string |

**Returns:** _Promise‹object›_

### getAccountSummary

▸ **getAccountSummary**\(`account`: string\): _Promise‹AccountSummary›_

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:115_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L115)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | string |

**Returns:** _Promise‹AccountSummary›_

### getName

▸ **getName**\(`account`: [Address](_base_.md#address), `blockNumber?`: undefined \| number\): _Promise‹string›_

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:244_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L244)

Returns the set name for the account

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `account` | [Address](_base_.md#address) | Account |
| `blockNumber?` | undefined \| number | Height of result, defaults to tip. |

**Returns:** _Promise‹string›_

### parseSignatureOfAddress

▸ **parseSignatureOfAddress**\(`address`: [Address](_base_.md#address), `signer`: string, `signature`: string\): _object_

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:302_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L302)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `address` | [Address](_base_.md#address) |
| `signer` | string |
| `signature` | string |

**Returns:** _object_

* **r**: _string_
* **s**: _string_
* **v**: _number_

### signerToAccount

▸ **signerToAccount**\(`signer`: [Address](_base_.md#address), `blockNumber?`: undefined \| number\): _Promise‹_[_Address_](_base_.md#address)_›_

_Defined in_ [_packages/contractkit/src/wrappers/Accounts.ts:94_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Accounts.ts#L94)

Returns the account associated with `signer`.

**`dev`** Fails if the `signer` is not an account or previously authorized signer.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `signer` | [Address](_base_.md#address) | The address of the account or previously authorized signer. |
| `blockNumber?` | undefined \| number | Height of result, defaults to tip. |

**Returns:** _Promise‹_[_Address_](_base_.md#address)_›_

The associated account.

