# SortedOraclesWrapper

Currency price oracle contract.

## Hierarchy

* [BaseWrapper](_wrappers_basewrapper_.basewrapper.md)‹SortedOracles›

  ↳ **SortedOraclesWrapper**

## Index

### Constructors

* [constructor](_wrappers_sortedoracles_.sortedoracleswrapper.md#constructor)

### Properties

* [reportExpirySeconds](_wrappers_sortedoracles_.sortedoracleswrapper.md#reportexpiryseconds)

### Accessors

* [address](_wrappers_sortedoracles_.sortedoracleswrapper.md#address)

### Methods

* [getConfig](_wrappers_sortedoracles_.sortedoracleswrapper.md#getconfig)
* [getRates](_wrappers_sortedoracles_.sortedoracleswrapper.md#getrates)
* [getStableTokenRates](_wrappers_sortedoracles_.sortedoracleswrapper.md#getstabletokenrates)
* [isOracle](_wrappers_sortedoracles_.sortedoracleswrapper.md#isoracle)
* [medianRate](_wrappers_sortedoracles_.sortedoracleswrapper.md#medianrate)
* [numRates](_wrappers_sortedoracles_.sortedoracleswrapper.md#numrates)
* [report](_wrappers_sortedoracles_.sortedoracleswrapper.md#report)
* [reportStableToken](_wrappers_sortedoracles_.sortedoracleswrapper.md#reportstabletoken)

## Constructors

### constructor

+ **new SortedOraclesWrapper**\(`kit`: [ContractKit](_kit_.contractkit.md), `contract`: SortedOracles\): [_SortedOraclesWrapper_](_wrappers_sortedoracles_.sortedoracleswrapper.md)

_Inherited from_ [_BaseWrapper_](_wrappers_basewrapper_.basewrapper.md)_._[_constructor_](_wrappers_basewrapper_.basewrapper.md#constructor)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:14_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L14)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](_kit_.contractkit.md) |
| `contract` | SortedOracles |

**Returns:** [_SortedOraclesWrapper_](_wrappers_sortedoracles_.sortedoracleswrapper.md)

## Properties

### reportExpirySeconds

• **reportExpirySeconds**: _function_ = proxyCall\( this.contract.methods.reportExpirySeconds, undefined, valueToBigNumber \)

_Defined in_ [_packages/contractkit/src/wrappers/SortedOracles.ts:80_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/SortedOracles.ts#L80)

Returns the report expiry parameter.

**`returns`** Current report expiry.

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

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

▸ **getConfig**\(\): _Promise‹_[_SortedOraclesConfig_](../interfaces/_wrappers_sortedoracles_.sortedoraclesconfig.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/SortedOracles.ts:131_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/SortedOracles.ts#L131)

Returns current configuration parameters.

**Returns:** _Promise‹_[_SortedOraclesConfig_](../interfaces/_wrappers_sortedoracles_.sortedoraclesconfig.md)_›_

### getRates

▸ **getRates**\(`token`: [CeloToken](../external-modules/_base_.md#celotoken)\): _Promise‹_[_OracleRate_](../interfaces/_wrappers_sortedoracles_.oraclerate.md)_\[\]›_

_Defined in_ [_packages/contractkit/src/wrappers/SortedOracles.ts:149_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/SortedOracles.ts#L149)

Gets all elements from the doubly linked list.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `token` | [CeloToken](../external-modules/_base_.md#celotoken) | The CeloToken representing the token for which the Celo   Gold exchange rate is being reported. Example: CeloContract.StableToken |

**Returns:** _Promise‹_[_OracleRate_](../interfaces/_wrappers_sortedoracles_.oraclerate.md)_\[\]›_

An unpacked list of elements from largest to smallest.

### getStableTokenRates

▸ **getStableTokenRates**\(\): _Promise‹_[_OracleRate_](../interfaces/_wrappers_sortedoracles_.oraclerate.md)_\[\]›_

_Defined in_ [_packages/contractkit/src/wrappers/SortedOracles.ts:141_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/SortedOracles.ts#L141)

Helper function to get the rates for StableToken, by passing the address of StableToken to `getRates`.

**Returns:** _Promise‹_[_OracleRate_](../interfaces/_wrappers_sortedoracles_.oraclerate.md)_\[\]›_

### isOracle

▸ **isOracle**\(`token`: [CeloToken](../external-modules/_base_.md#celotoken), `oracle`: [Address](../external-modules/_base_.md#address)\): _Promise‹boolean›_

_Defined in_ [_packages/contractkit/src/wrappers/SortedOracles.ts:71_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/SortedOracles.ts#L71)

Checks if the given address is whitelisted as an oracle for the token

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `token` | [CeloToken](../external-modules/_base_.md#celotoken) | The CeloToken token |
| `oracle` | [Address](../external-modules/_base_.md#address) | The address that we're checking the oracle status of |

**Returns:** _Promise‹boolean›_

boolean describing whether this account is an oracle

### medianRate

▸ **medianRate**\(`token`: [CeloToken](../external-modules/_base_.md#celotoken)\): _Promise‹_[_MedianRate_](../interfaces/_wrappers_sortedoracles_.medianrate.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/SortedOracles.ts:57_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/SortedOracles.ts#L57)

Returns the median rate for the given token

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `token` | [CeloToken](../external-modules/_base_.md#celotoken) | The CeloToken token for which the Celo Gold exchange rate is being reported. |

**Returns:** _Promise‹_[_MedianRate_](../interfaces/_wrappers_sortedoracles_.medianrate.md)_›_

The median exchange rate for `token`, expressed as: amount of that token / equivalent amount in Celo Gold

### numRates

▸ **numRates**\(`token`: [CeloToken](../external-modules/_base_.md#celotoken)\): _Promise‹number›_

_Defined in_ [_packages/contractkit/src/wrappers/SortedOracles.ts:45_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/SortedOracles.ts#L45)

Gets the number of rates that have been reported for the given token

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `token` | [CeloToken](../external-modules/_base_.md#celotoken) | The CeloToken token for which the Celo Gold exchange rate is being reported. |

**Returns:** _Promise‹number›_

The number of reported oracle rates for `token`.

### report

▸ **report**\(`token`: [CeloToken](../external-modules/_base_.md#celotoken), `numerator`: number, `denominator`: number, `oracleAddress`: [Address](../external-modules/_base_.md#address)\): _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

_Defined in_ [_packages/contractkit/src/wrappers/SortedOracles.ts:92_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/SortedOracles.ts#L92)

Updates an oracle value and the median.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `token` | [CeloToken](../external-modules/_base_.md#celotoken) | The address of the token for which the Celo Gold exchange rate is being reported. |
| `numerator` | number | The amount of tokens equal to `denominator` Celo Gold. |
| `denominator` | number | The amount of Celo Gold that the `numerator` tokens are equal to. |
| `oracleAddress` | [Address](../external-modules/_base_.md#address) | - |

**Returns:** _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

### reportStableToken

▸ **reportStableToken**\(`numerator`: number, `denominator`: number, `oracleAddress`: [Address](../external-modules/_base_.md#address)\): _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

_Defined in_ [_packages/contractkit/src/wrappers/SortedOracles.ts:120_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/SortedOracles.ts#L120)

Updates an oracle value and the median.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `numerator` | number | The amount of tokens equal to `denominator` Celo Gold. |
| `denominator` | number | The amount of Celo Gold that the `numerator` tokens are equal to. |
| `oracleAddress` | [Address](../external-modules/_base_.md#address) | - |

**Returns:** _Promise‹_[_CeloTransactionObject_](_wrappers_basewrapper_.celotransactionobject.md)_‹void››_

