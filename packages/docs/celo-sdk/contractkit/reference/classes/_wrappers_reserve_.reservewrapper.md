# ReserveWrapper

Contract for handling reserve for stable currencies

## Hierarchy

* [BaseWrapper](_wrappers_basewrapper_.basewrapper.md)‹Reserve›

  ↳ **ReserveWrapper**

## Index

### Constructors

* [constructor](_wrappers_reserve_.reservewrapper.md#constructor)

### Properties

* [isSpender](_wrappers_reserve_.reservewrapper.md#isspender)
* [tobinTaxStalenessThreshold](_wrappers_reserve_.reservewrapper.md#tobintaxstalenessthreshold)
* [transferGold](_wrappers_reserve_.reservewrapper.md#transfergold)

### Accessors

* [address](_wrappers_reserve_.reservewrapper.md#address)

### Methods

* [getConfig](_wrappers_reserve_.reservewrapper.md#getconfig)

## Constructors

### constructor

+ **new ReserveWrapper**\(`kit`: [ContractKit](_kit_.contractkit.md), `contract`: Reserve\): [_ReserveWrapper_](_wrappers_reserve_.reservewrapper.md)

_Inherited from_ [_BaseWrapper_](_wrappers_basewrapper_.basewrapper.md)_._[_constructor_](_wrappers_basewrapper_.basewrapper.md#constructor)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:14_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L14)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](_kit_.contractkit.md) |
| `contract` | Reserve |

**Returns:** [_ReserveWrapper_](_wrappers_reserve_.reservewrapper.md)

## Properties

### isSpender

• **isSpender**: _function_ = proxyCall\(this.contract.methods.isSpender\)

_Defined in_ [_packages/contractkit/src/wrappers/Reserve.ts:22_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Reserve.ts#L22)

#### Type declaration:

▸ \(`account`: string\): _Promise‹boolean›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `account` | string |

### tobinTaxStalenessThreshold

• **tobinTaxStalenessThreshold**: _function_ = proxyCall\( this.contract.methods.tobinTaxStalenessThreshold, undefined, valueToBigNumber \)

_Defined in_ [_packages/contractkit/src/wrappers/Reserve.ts:17_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Reserve.ts#L17)

Query Tobin tax staleness threshold parameter.

**`returns`** Current Tobin tax staleness threshold.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### transferGold

• **transferGold**: _function_ = proxySend\(this.kit, this.contract.methods.transferGold\)

_Defined in_ [_packages/contractkit/src/wrappers/Reserve.ts:23_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Reserve.ts#L23)

#### Type declaration:

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

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

### getConfig

▸ **getConfig**\(\): _Promise‹_[_ReserveConfig_](../interfaces/_wrappers_reserve_.reserveconfig.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/Reserve.ts:28_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Reserve.ts#L28)

Returns current configuration parameters.

**Returns:** _Promise‹_[_ReserveConfig_](../interfaces/_wrappers_reserve_.reserveconfig.md)_›_

