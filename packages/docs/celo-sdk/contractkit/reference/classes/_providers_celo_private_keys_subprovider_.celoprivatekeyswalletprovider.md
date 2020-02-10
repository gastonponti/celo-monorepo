# CeloPrivateKeysWalletProvider

This class supports storing multiple private keys for signing. The base class PrivateKeyWalletSubprovider only supports one key.

## Hierarchy

* PrivateKeyWalletSubprovider

  ↳ **CeloPrivateKeysWalletProvider**

## Index

### Constructors

* [constructor](_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md#constructor)

### Properties

* [privateKey](_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md#privatekey)

### Methods

* [addAccount](_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md#addaccount)
* [emitPayloadAsync](_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md#emitpayloadasync)
* [getAccounts](_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md#getaccounts)
* [getAccountsAsync](_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md#getaccountsasync)
* [handleRequest](_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md#handlerequest)
* [setEngine](_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md#setengine)
* [signPersonalMessageAsync](_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md#signpersonalmessageasync)
* [signTransactionAsync](_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md#signtransactionasync)
* [signTypedDataAsync](_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md#signtypeddataasync)

## Constructors

### constructor

+ **new CeloPrivateKeysWalletProvider**\(`privateKey`: string\): [_CeloPrivateKeysWalletProvider_](_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md)

_Overrides void_

_Defined in_ [_packages/contractkit/src/providers/celo-private-keys-subprovider.ts:49_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-private-keys-subprovider.ts#L49)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `privateKey` | string |

**Returns:** [_CeloPrivateKeysWalletProvider_](_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md)

## Properties

### privateKey

• **privateKey**: _string_

_Defined in_ [_packages/contractkit/src/providers/celo-private-keys-subprovider.ts:51_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-private-keys-subprovider.ts#L51)

## Methods

### addAccount

▸ **addAccount**\(`privateKey`: string\): _void_

_Defined in_ [_packages/contractkit/src/providers/celo-private-keys-subprovider.ts:57_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-private-keys-subprovider.ts#L57)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `privateKey` | string |

**Returns:** _void_

### emitPayloadAsync

▸ **emitPayloadAsync**\(`payload`: Partial‹JSONRPCRequestPayloadWithMethod›\): _Promise‹JSONRPCResponsePayload›_

_Inherited from_ [_CeloPrivateKeysWalletProvider_](_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md)_._[_emitPayloadAsync_](_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md#emitpayloadasync)

Defined in node\_modules/@0x/subproviders/lib/src/subproviders/subprovider.d.ts:25

Emits a JSON RPC payload that will then be handled by the ProviderEngine instance this subprovider is a part of. The payload will cascade down the subprovider middleware stack until finding the responsible entity for handling the request.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `payload` | Partial‹JSONRPCRequestPayloadWithMethod› | JSON RPC payload |

**Returns:** _Promise‹JSONRPCResponsePayload›_

JSON RPC response payload

### getAccounts

▸ **getAccounts**\(\): _string\[\]_

_Defined in_ [_packages/contractkit/src/providers/celo-private-keys-subprovider.ts:68_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-private-keys-subprovider.ts#L68)

**Returns:** _string\[\]_

### getAccountsAsync

▸ **getAccountsAsync**\(\): _Promise‹string\[\]›_

_Overrides void_

_Defined in_ [_packages/contractkit/src/providers/celo-private-keys-subprovider.ts:73_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-private-keys-subprovider.ts#L73)

**Returns:** _Promise‹string\[\]›_

### handleRequest

▸ **handleRequest**\(`payload`: JSONRPCRequestPayload, `next`: Callback, `end`: ErrorCallback\): _Promise‹void›_

_Overrides void_

_Defined in_ [_packages/contractkit/src/providers/celo-private-keys-subprovider.ts:77_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-private-keys-subprovider.ts#L77)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `payload` | JSONRPCRequestPayload |
| `next` | Callback |
| `end` | ErrorCallback |

**Returns:** _Promise‹void›_

### setEngine

▸ **setEngine**\(`engine`: Web3ProviderEngine\): _void_

_Inherited from_ [_CeloPrivateKeysWalletProvider_](_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md)_._[_setEngine_](_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md#setengine)

Defined in node\_modules/@0x/subproviders/lib/src/subproviders/subprovider.d.ts:32

Set's the subprovider's engine to the ProviderEngine it is added to. This is only called within the ProviderEngine source code, do not call directly.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `engine` | Web3ProviderEngine | The ProviderEngine this subprovider is added to |

**Returns:** _void_

### signPersonalMessageAsync

▸ **signPersonalMessageAsync**\(`data`: string, `address`: string\): _Promise‹string›_

_Inherited from_ [_CeloPrivateKeysWalletProvider_](_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md)_._[_signPersonalMessageAsync_](_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md#signpersonalmessageasync)

_Overrides void_

Defined in node\_modules/@0x/subproviders/lib/src/subproviders/private\_key\_wallet.d.ts:44

Sign a personal Ethereum signed message. The signing address will be calculated from the private key. The address must be provided it must match the address calculated from the private key. If you've added this Subprovider to your app's provider, you can simply send an `eth_sign` or `personal_sign` JSON RPC request, and this method will be called auto-magically. If you are not using this via a ProviderEngine instance, you can call it directly.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `data` | string | Hex string message to sign |
| `address` | string | Address of the account to sign with |

**Returns:** _Promise‹string›_

Signature hex string \(order: rsv\)

### signTransactionAsync

▸ **signTransactionAsync**\(`txParamsInput`: [CeloPartialTxParams](../interfaces/_utils_tx_signing_.celopartialtxparams.md)\): _Promise‹string›_

_Overrides void_

_Defined in_ [_packages/contractkit/src/providers/celo-private-keys-subprovider.ts:101_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-private-keys-subprovider.ts#L101)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `txParamsInput` | [CeloPartialTxParams](../interfaces/_utils_tx_signing_.celopartialtxparams.md) |

**Returns:** _Promise‹string›_

### signTypedDataAsync

▸ **signTypedDataAsync**\(`address`: string, `typedData`: EIP712TypedData\): _Promise‹string›_

_Inherited from_ [_CeloPrivateKeysWalletProvider_](_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md)_._[_signTypedDataAsync_](_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md#signtypeddataasync)

_Overrides void_

Defined in node\_modules/@0x/subproviders/lib/src/subproviders/private\_key\_wallet.d.ts:55

Sign an EIP712 Typed Data message. The signing address will be calculated from the private key. The address must be provided it must match the address calculated from the private key. If you've added this Subprovider to your app's provider, you can simply send an `eth_signTypedData` JSON RPC request, and this method will be called auto-magically. If you are not using this via a ProviderEngine instance, you can call it directly.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `address` | string | Address of the account to sign with |
| `typedData` | EIP712TypedData | - |

**Returns:** _Promise‹string›_

Signature hex string \(order: rsv\)

