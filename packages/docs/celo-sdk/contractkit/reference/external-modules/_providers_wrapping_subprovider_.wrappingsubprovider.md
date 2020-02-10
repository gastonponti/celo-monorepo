# WrappingSubprovider

## Hierarchy

* Subprovider

  ↳ **WrappingSubprovider**

## Index

### Constructors

* [constructor](../classes/_providers_wrapping_subprovider_.wrappingsubprovider.md#constructor)

### Properties

* [provider](../classes/_providers_wrapping_subprovider_.wrappingsubprovider.md#provider)

### Methods

* [emitPayloadAsync](../classes/_providers_wrapping_subprovider_.wrappingsubprovider.md#emitpayloadasync)
* [handleRequest](../classes/_providers_wrapping_subprovider_.wrappingsubprovider.md#handlerequest)
* [setEngine](../classes/_providers_wrapping_subprovider_.wrappingsubprovider.md#setengine)

## Constructors

### constructor

+ **new WrappingSubprovider**\(`provider`: Provider\): [_WrappingSubprovider_](../classes/_providers_wrapping_subprovider_.wrappingsubprovider.md)

_Defined in_ [_packages/contractkit/src/providers/wrapping-subprovider.ts:7_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/wrapping-subprovider.ts#L7)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `provider` | Provider |

**Returns:** [_WrappingSubprovider_](../classes/_providers_wrapping_subprovider_.wrappingsubprovider.md)

## Properties

### provider

• **provider**: _Provider_

_Defined in_ [_packages/contractkit/src/providers/wrapping-subprovider.ts:8_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/wrapping-subprovider.ts#L8)

## Methods

### emitPayloadAsync

▸ **emitPayloadAsync**\(`payload`: Partial‹JSONRPCRequestPayloadWithMethod›\): _Promise‹JSONRPCResponsePayload›_

_Inherited from_ [_CeloPrivateKeysWalletProvider_](../classes/_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md)_._[_emitPayloadAsync_](../classes/_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md#emitpayloadasync)

Defined in node\_modules/@0x/subproviders/lib/src/subproviders/subprovider.d.ts:25

Emits a JSON RPC payload that will then be handled by the ProviderEngine instance this subprovider is a part of. The payload will cascade down the subprovider middleware stack until finding the responsible entity for handling the request.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `payload` | Partial‹JSONRPCRequestPayloadWithMethod› | JSON RPC payload |

**Returns:** _Promise‹JSONRPCResponsePayload›_

JSON RPC response payload

### handleRequest

▸ **handleRequest**\(`payload`: JSONRPCRequestPayload, `_next`: Callback, `end`: ErrorCallback\): _Promise‹void›_

_Overrides void_

_Defined in_ [_packages/contractkit/src/providers/wrapping-subprovider.ts:16_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/wrapping-subprovider.ts#L16)

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `payload` | JSONRPCRequestPayload | JSON RPC request payload |
| `_next` | Callback | - |
| `end` | ErrorCallback | A callback called once the subprovider is done handling the request |

**Returns:** _Promise‹void›_

### setEngine

▸ **setEngine**\(`engine`: Web3ProviderEngine\): _void_

_Inherited from_ [_CeloPrivateKeysWalletProvider_](../classes/_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md)_._[_setEngine_](../classes/_providers_celo_private_keys_subprovider_.celoprivatekeyswalletprovider.md#setengine)

Defined in node\_modules/@0x/subproviders/lib/src/subproviders/subprovider.d.ts:32

Set's the subprovider's engine to the ProviderEngine it is added to. This is only called within the ProviderEngine source code, do not call directly.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `engine` | Web3ProviderEngine | The ProviderEngine this subprovider is added to |

**Returns:** _void_

