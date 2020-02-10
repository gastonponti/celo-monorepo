# CeloProvider

## Hierarchy

* **CeloProvider**

## Implements

* Provider

## Index

### Constructors

* [constructor](../classes/_providers_celo_provider_.celoprovider.md#constructor)

### Properties

* [existingProvider](../classes/_providers_celo_provider_.celoprovider.md#existingprovider)
* [on](../classes/_providers_celo_provider_.celoprovider.md#on)
* [privateKey](../classes/_providers_celo_provider_.celoprovider.md#privatekey)

### Methods

* [addAccount](../classes/_providers_celo_provider_.celoprovider.md#addaccount)
* [send](../classes/_providers_celo_provider_.celoprovider.md#send)
* [sendAsync](../classes/_providers_celo_provider_.celoprovider.md#sendasync)
* [start](../classes/_providers_celo_provider_.celoprovider.md#start)
* [stop](../classes/_providers_celo_provider_.celoprovider.md#stop)

## Constructors

### constructor

+ **new CeloProvider**\(`existingProvider`: Provider, `privateKey`: string\): [_CeloProvider_](../classes/_providers_celo_provider_.celoprovider.md)

_Defined in_ [_packages/contractkit/src/providers/celo-provider.ts:15_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L15)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `existingProvider` | Provider |
| `privateKey` | string |

**Returns:** [_CeloProvider_](../classes/_providers_celo_provider_.celoprovider.md)

## Properties

### existingProvider

• **existingProvider**: _Provider_

_Defined in_ [_packages/contractkit/src/providers/celo-provider.ts:17_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L17)

### on

• **on**: _null \| OnFn_ = null

_Defined in_ [_packages/contractkit/src/providers/celo-provider.ts:12_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L12)

### privateKey

• **privateKey**: _string_

_Defined in_ [_packages/contractkit/src/providers/celo-provider.ts:17_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L17)

## Methods

### addAccount

▸ **addAccount**\(`privateKey`: string\): [_CeloProvider_](../classes/_providers_celo_provider_.celoprovider.md)

_Defined in_ [_packages/contractkit/src/providers/celo-provider.ts:38_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L38)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `privateKey` | string |

**Returns:** [_CeloProvider_](../classes/_providers_celo_provider_.celoprovider.md)

### send

▸ **send**\(`payload`: JSONRPCRequestPayload, `callback`: Callback‹JsonRPCResponse›\): _void_

_Defined in_ [_packages/contractkit/src/providers/celo-provider.ts:46_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L46)

Send method as expected by web3.js

**Parameters:**

| Name | Type |
| :--- | :--- |
| `payload` | JSONRPCRequestPayload |
| `callback` | Callback‹JsonRPCResponse› |

**Returns:** _void_

### sendAsync

▸ **sendAsync**\(`payload`: JSONRPCRequestPayload, `callback`: Callback‹JsonRPCResponse›\): _void_

_Defined in_ [_packages/contractkit/src/providers/celo-provider.ts:50_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L50)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `payload` | JSONRPCRequestPayload |
| `callback` | Callback‹JsonRPCResponse› |

**Returns:** _void_

### start

▸ **start**\(`callback?`: undefined \| function\): _void_

_Defined in_ [_packages/contractkit/src/providers/celo-provider.ts:55_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L55)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `callback?` | undefined \| function |

**Returns:** _void_

### stop

▸ **stop**\(\): _void_

_Defined in_ [_packages/contractkit/src/providers/celo-provider.ts:59_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/providers/celo-provider.ts#L59)

**Returns:** _void_

