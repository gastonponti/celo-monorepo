# GoldTokenWrapper

ERC-20 contract for Celo native currency.

## Hierarchy

* [BaseWrapper](../classes/_wrappers_basewrapper_.basewrapper.md)‹GoldToken›

  ↳ **GoldTokenWrapper**

## Index

### Constructors

* [constructor](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#constructor)

### Properties

* [allowance](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#allowance)
* [approve](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#approve)
* [decimals](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#decimals)
* [decreaseAllowance](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#decreaseallowance)
* [increaseAllowance](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#increaseallowance)
* [name](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#name)
* [symbol](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#symbol)
* [totalSupply](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#totalsupply)
* [transfer](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#transfer)
* [transferFrom](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#transferfrom)
* [transferWithComment](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#transferwithcomment)

### Accessors

* [address](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#address)

### Methods

* [balanceOf](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md#balanceof)

## Constructors

### constructor

+ **new GoldTokenWrapper**\(`kit`: [ContractKit](../classes/_kit_.contractkit.md), `contract`: GoldToken\): [_GoldTokenWrapper_](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md)

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_constructor_](../classes/_wrappers_basewrapper_.basewrapper.md#constructor)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:14_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L14)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) |
| `contract` | GoldToken |

**Returns:** [_GoldTokenWrapper_](../classes/_wrappers_goldtokenwrapper_.goldtokenwrapper.md)

## Properties

### allowance

• **allowance**: _function_ = proxyCall\(this.contract.methods.allowance, undefined, valueToBigNumber\)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:20_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L20)

Querying allowance.

**`param`** Account who has given the allowance.

**`param`** Address of account to whom the allowance was given.

**`returns`** Amount of allowance.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### approve

• **approve**: _function_ = proxySend\(this.kit, this.contract.methods.approve\)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:51_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L51)

Approve a user to transfer Celo Gold on behalf of another user.

**`param`** The address which is being approved to spend Celo Gold.

**`param`** The amount of Celo Gold approved to the spender.

**`returns`** True if the transaction succeeds.

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### decimals

• **decimals**: _function_ = proxyCall\(this.contract.methods.decimals, undefined, valueToInt\)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:37_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L37)

Returns the number of decimals used in the token.

**`returns`** Number of decimals.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### decreaseAllowance

• **decreaseAllowance**: _function_ = proxySend\(this.kit, this.contract.methods.decreaseAllowance\)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:65_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L65)

Decreases the allowance of another user.

**`param`** The address which is being approved to spend Celo Gold.

**`param`** The decrement of the amount of Celo Gold approved to the spender.

**`returns`** true if success.

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### increaseAllowance

• **increaseAllowance**: _function_ = proxySend\(this.kit, this.contract.methods.increaseAllowance\)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:58_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L58)

Increases the allowance of another user.

**`param`** The address which is being approved to spend Celo Gold.

**`param`** The increment of the amount of Celo Gold approved to the spender.

**`returns`** true if success.

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### name

• **name**: _function_ = proxyCall\(this.contract.methods.name, undefined, \(a: any\) =&gt; a.toString\(\)\)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:26_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L26)

Returns the name of the token.

**`returns`** Name of the token.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### symbol

• **symbol**: _function_ = proxyCall\(this.contract.methods.symbol, undefined, \(a: any\) =&gt; a.toString\(\)\)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:32_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L32)

Returns the three letter symbol of the token.

**`returns`** Symbol of the token.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### totalSupply

• **totalSupply**: _function_ = proxyCall\(this.contract.methods.totalSupply, undefined, valueToBigNumber\)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:43_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L43)

Returns the total supply of the token, that is, the amount of tokens currently minted.

**`returns`** Total supply.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### transfer

• **transfer**: _function_ = proxySend\(this.kit, this.contract.methods.transfer\)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:82_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L82)

Transfers Celo Gold from one address to another.

**`param`** The address to transfer Celo Gold to.

**`param`** The amount of Celo Gold to transfer.

**`returns`** True if the transaction succeeds.

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### transferFrom

• **transferFrom**: _function_ = proxySend\(this.kit, this.contract.methods.transferFrom\)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:91_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L91)

Transfers Celo Gold from one address to another on behalf of a user.

**`param`** The address to transfer Celo Gold from.

**`param`** The address to transfer Celo Gold to.

**`param`** The amount of Celo Gold to transfer.

**`returns`** True if the transaction succeeds.

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### transferWithComment

• **transferWithComment**: _function_ = proxySend\(this.kit, this.contract.methods.transferWithComment\)

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:74_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L74)

Transfers Celo Gold from one address to another with a comment.

**`param`** The address to transfer Celo Gold to.

**`param`** The amount of Celo Gold to transfer.

**`param`** The transfer comment

**`returns`** True if the transaction succeeds.

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

## Accessors

### address

• **get address**\(\): _string_

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_address_](../classes/_wrappers_basewrapper_.basewrapper.md#address)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:18_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L18)

Contract address

**Returns:** _string_

## Methods

### balanceOf

▸ **balanceOf**\(`account`: [Address](_base_.md#address)\): _Promise‹BigNumber‹››_

_Defined in_ [_packages/contractkit/src/wrappers/GoldTokenWrapper.ts:98_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/GoldTokenWrapper.ts#L98)

Gets the balance of the specified address.

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | [Address](_base_.md#address) |

**Returns:** _Promise‹BigNumber‹››_

The balance of the specified address.

