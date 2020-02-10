# DoubleSigningSlasherWrapper

Contract handling slashing for Validator double-signing

## Hierarchy

* [BaseWrapper](../classes/_wrappers_basewrapper_.basewrapper.md)‹DoubleSigningSlasher›

  ↳ **DoubleSigningSlasherWrapper**

## Index

### Constructors

* [constructor](../classes/_wrappers_doublesigningslasher_.doublesigningslasherwrapper.md#constructor)

### Properties

* [getBlockNumberFromHeader](../classes/_wrappers_doublesigningslasher_.doublesigningslasherwrapper.md#getblocknumberfromheader)
* [slashingIncentives](../classes/_wrappers_doublesigningslasher_.doublesigningslasherwrapper.md#slashingincentives)

### Accessors

* [address](../classes/_wrappers_doublesigningslasher_.doublesigningslasherwrapper.md#address)

### Methods

* [slashSigner](../classes/_wrappers_doublesigningslasher_.doublesigningslasherwrapper.md#slashsigner)
* [slashValidator](../classes/_wrappers_doublesigningslasher_.doublesigningslasherwrapper.md#slashvalidator)

## Constructors

### constructor

+ **new DoubleSigningSlasherWrapper**\(`kit`: [ContractKit](../classes/_kit_.contractkit.md), `contract`: DoubleSigningSlasher\): [_DoubleSigningSlasherWrapper_](../classes/_wrappers_doublesigningslasher_.doublesigningslasherwrapper.md)

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_constructor_](../classes/_wrappers_basewrapper_.basewrapper.md#constructor)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:14_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L14)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) |
| `contract` | DoubleSigningSlasher |

**Returns:** [_DoubleSigningSlasherWrapper_](../classes/_wrappers_doublesigningslasher_.doublesigningslasherwrapper.md)

## Properties

### getBlockNumberFromHeader

• **getBlockNumberFromHeader**: _function_ = proxyCall\( this.contract.methods.getBlockNumberFromHeader, undefined, valueToInt \)

_Defined in_ [_packages/contractkit/src/wrappers/DoubleSigningSlasher.ts:35_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/DoubleSigningSlasher.ts#L35)

Parses block number out of header.

**`param`** RLP encoded header

**`returns`** Block number.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### slashingIncentives

• **slashingIncentives**: _function_ = proxyCall\(this.contract.methods.slashingIncentives, undefined, \(res\): { reward: BigNumber penalty: BigNumber } =&gt; \({ reward: valueToBigNumber\(res.reward\), penalty: valueToBigNumber\(res.penalty\), }\)\)

_Defined in_ [_packages/contractkit/src/wrappers/DoubleSigningSlasher.ts:22_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/DoubleSigningSlasher.ts#L22)

Returns slashing incentives.

**`returns`** Rewards and penaltys for slashing.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

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

### slashSigner

▸ **slashSigner**\(`signerAddress`: [Address](_base_.md#address), `headerA`: string, `headerB`: string\): _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

_Defined in_ [_packages/contractkit/src/wrappers/DoubleSigningSlasher.ts:69_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/DoubleSigningSlasher.ts#L69)

Slash a Validator for double-signing.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `signerAddress` | [Address](_base_.md#address) | - |
| `headerA` | string | First double signed block header. |
| `headerB` | string | Second double signed block header. |

**Returns:** _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

### slashValidator

▸ **slashValidator**\(`validatorAddress`: [Address](_base_.md#address), `headerA`: string, `headerB`: string\): _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

_Defined in_ [_packages/contractkit/src/wrappers/DoubleSigningSlasher.ts:47_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/DoubleSigningSlasher.ts#L47)

Slash a Validator for double-signing.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `validatorAddress` | [Address](_base_.md#address) | - |
| `headerA` | string | First double signed block header. |
| `headerB` | string | Second double signed block header. |

**Returns:** _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

