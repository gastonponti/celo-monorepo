# DowntimeSlasherWrapper

Contract handling slashing for Validator downtime

## Hierarchy

* [BaseWrapper](../classes/_wrappers_basewrapper_.basewrapper.md)‹DowntimeSlasher›

  ↳ **DowntimeSlasherWrapper**

## Index

### Constructors

* [constructor](../classes/_wrappers_downtimeslasher_.downtimeslasherwrapper.md#constructor)

### Properties

* [isDown](../classes/_wrappers_downtimeslasher_.downtimeslasherwrapper.md#isdown)
* [slashableDowntime](../classes/_wrappers_downtimeslasher_.downtimeslasherwrapper.md#slashabledowntime)
* [slashingIncentives](../classes/_wrappers_downtimeslasher_.downtimeslasherwrapper.md#slashingincentives)

### Accessors

* [address](../classes/_wrappers_downtimeslasher_.downtimeslasherwrapper.md#address)

### Methods

* [slashEndSignerIndex](../classes/_wrappers_downtimeslasher_.downtimeslasherwrapper.md#slashendsignerindex)
* [slashStartSignerIndex](../classes/_wrappers_downtimeslasher_.downtimeslasherwrapper.md#slashstartsignerindex)
* [slashValidator](../classes/_wrappers_downtimeslasher_.downtimeslasherwrapper.md#slashvalidator)

## Constructors

### constructor

+ **new DowntimeSlasherWrapper**\(`kit`: [ContractKit](../classes/_kit_.contractkit.md), `contract`: DowntimeSlasher\): [_DowntimeSlasherWrapper_](../classes/_wrappers_downtimeslasher_.downtimeslasherwrapper.md)

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_constructor_](../classes/_wrappers_basewrapper_.basewrapper.md#constructor)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:14_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L14)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) |
| `contract` | DowntimeSlasher |

**Returns:** [_DowntimeSlasherWrapper_](../classes/_wrappers_downtimeslasher_.downtimeslasherwrapper.md)

## Properties

### isDown

• **isDown**: _function_ = proxyCall\(this.contract.methods.isDown\)

_Defined in_ [_packages/contractkit/src/wrappers/DowntimeSlasher.ts:44_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/DowntimeSlasher.ts#L44)

Tests if a validator has been down.

**`param`** First block of the downtime.

**`param`** Validator index at the first block.

**`param`** Validator index at the last block.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### slashableDowntime

• **slashableDowntime**: _function_ = proxyCall\(this.contract.methods.slashableDowntime, undefined, valueToInt\)

_Defined in_ [_packages/contractkit/src/wrappers/DowntimeSlasher.ts:36_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/DowntimeSlasher.ts#L36)

Returns slashable downtime in blocks.

**`returns`** The number of consecutive blocks before a Validator missing from IBFT consensus can be slashed.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### slashingIncentives

• **slashingIncentives**: _function_ = proxyCall\(this.contract.methods.slashingIncentives, undefined, \(res\): { reward: BigNumber penalty: BigNumber } =&gt; \({ reward: valueToBigNumber\(res.reward\), penalty: valueToBigNumber\(res.penalty\), }\)\)

_Defined in_ [_packages/contractkit/src/wrappers/DowntimeSlasher.ts:23_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/DowntimeSlasher.ts#L23)

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

### slashEndSignerIndex

▸ **slashEndSignerIndex**\(`endBlock`: number, `endSignerIndex`: number\): _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

_Defined in_ [_packages/contractkit/src/wrappers/DowntimeSlasher.ts:105_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/DowntimeSlasher.ts#L105)

Slash a Validator for downtime.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `endBlock` | number | The last block of the downtime to slash for. |
| `endSignerIndex` | number | Validator index at the last block. |

**Returns:** _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

### slashStartSignerIndex

▸ **slashStartSignerIndex**\(`startBlock`: number, `startSignerIndex`: number\): _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

_Defined in_ [_packages/contractkit/src/wrappers/DowntimeSlasher.ts:81_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/DowntimeSlasher.ts#L81)

Slash a Validator for downtime.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `startBlock` | number | First block of the downtime. |
| `startSignerIndex` | number | Validator index at the first block. |

**Returns:** _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

### slashValidator

▸ **slashValidator**\(`validatorAddress`: [Address](_base_.md#address), `startBlock?`: undefined \| number, `endBlock?`: undefined \| number\): _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

_Defined in_ [_packages/contractkit/src/wrappers/DowntimeSlasher.ts:52_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/DowntimeSlasher.ts#L52)

Slash a Validator for downtime.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `validatorAddress` | [Address](_base_.md#address) | - |
| `startBlock?` | undefined \| number | First block of the downtime, undefined if using endBlock. |
| `endBlock?` | undefined \| number | Last block of the downtime. |

**Returns:** _Promise‹_[_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

