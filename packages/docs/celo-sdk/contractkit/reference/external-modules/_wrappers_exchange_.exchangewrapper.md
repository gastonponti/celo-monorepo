# ExchangeWrapper

Contract that allows to exchange StableToken for GoldToken and vice versa using a Constant Product Market Maker Model

## Hierarchy

* [BaseWrapper](../classes/_wrappers_basewrapper_.basewrapper.md)‹Exchange›

  ↳ **ExchangeWrapper**

## Index

### Constructors

* [constructor](../classes/_wrappers_exchange_.exchangewrapper.md#constructor)

### Properties

* [exchange](../classes/_wrappers_exchange_.exchangewrapper.md#exchange)
* [getBuyAndSellBuckets](../classes/_wrappers_exchange_.exchangewrapper.md#getbuyandsellbuckets)
* [getBuyTokenAmount](../classes/_wrappers_exchange_.exchangewrapper.md#getbuytokenamount)
* [getSellTokenAmount](../classes/_wrappers_exchange_.exchangewrapper.md#getselltokenamount)
* [minimumReports](../classes/_wrappers_exchange_.exchangewrapper.md#minimumreports)
* [reserveFraction](../classes/_wrappers_exchange_.exchangewrapper.md#reservefraction)
* [spread](../classes/_wrappers_exchange_.exchangewrapper.md#spread)
* [updateFrequency](../classes/_wrappers_exchange_.exchangewrapper.md#updatefrequency)

### Accessors

* [address](../classes/_wrappers_exchange_.exchangewrapper.md#address)

### Methods

* [getConfig](../classes/_wrappers_exchange_.exchangewrapper.md#getconfig)
* [getExchangeRate](../classes/_wrappers_exchange_.exchangewrapper.md#getexchangerate)
* [getGoldExchangeRate](../classes/_wrappers_exchange_.exchangewrapper.md#getgoldexchangerate)
* [getUsdExchangeRate](../classes/_wrappers_exchange_.exchangewrapper.md#getusdexchangerate)
* [quoteGoldBuy](../classes/_wrappers_exchange_.exchangewrapper.md#quotegoldbuy)
* [quoteGoldSell](../classes/_wrappers_exchange_.exchangewrapper.md#quotegoldsell)
* [quoteUsdBuy](../classes/_wrappers_exchange_.exchangewrapper.md#quoteusdbuy)
* [quoteUsdSell](../classes/_wrappers_exchange_.exchangewrapper.md#quoteusdsell)
* [sellDollar](../classes/_wrappers_exchange_.exchangewrapper.md#selldollar)
* [sellGold](../classes/_wrappers_exchange_.exchangewrapper.md#sellgold)

## Constructors

### constructor

+ **new ExchangeWrapper**\(`kit`: [ContractKit](../classes/_kit_.contractkit.md), `contract`: Exchange\): [_ExchangeWrapper_](../classes/_wrappers_exchange_.exchangewrapper.md)

_Inherited from_ [_BaseWrapper_](../classes/_wrappers_basewrapper_.basewrapper.md)_._[_constructor_](../classes/_wrappers_basewrapper_.basewrapper.md#constructor)

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:14_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L14)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) |
| `contract` | Exchange |

**Returns:** [_ExchangeWrapper_](../classes/_wrappers_exchange_.exchangewrapper.md)

## Properties

### exchange

• **exchange**: _function_ = proxySend\( this.kit, this.contract.methods.exchange, tupleParser\(valueToString, valueToString, identity\) \)

_Defined in_ [_packages/contractkit/src/wrappers/Exchange.ts:104_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Exchange.ts#L104)

Exchanges sellAmount of sellToken in exchange for at least minBuyAmount of buyToken Requires the sellAmount to have been approved to the exchange

**`param`** The amount of sellToken the user is selling to the exchange

**`param`** The minimum amount of buyToken the user has to receive for this transaction to succeed

**`param`** `true` if gold is the sell token

**`returns`** The amount of buyToken that was transfered

#### Type declaration:

▸ \(`sellAmount`: BigNumber.Value, `minBuyAmount`: BigNumber.Value, `sellGold`: boolean\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹string›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `sellAmount` | BigNumber.Value |
| `minBuyAmount` | BigNumber.Value |
| `sellGold` | boolean |

### getBuyAndSellBuckets

• **getBuyAndSellBuckets**: _function_ = proxyCall\( this.contract.methods.getBuyAndSellBuckets, undefined, \(callRes: { 0: string; 1: string }\) =&gt; \[valueToBigNumber\(callRes\[0\]\), valueToBigNumber\(callRes\[1\]\)\] as \[BigNumber, BigNumber\] \)

_Defined in_ [_packages/contractkit/src/wrappers/Exchange.ts:88_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Exchange.ts#L88)

Returns the buy token and sell token bucket sizes, in order. The ratio of the two also represents the exchange rate between the two.

**`param`** `true` if gold is the sell token

**`returns`**

#### Type declaration:

▸ \(`sellGold`: boolean\): _Promise‹\[BigNumber, BigNumber\]›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `sellGold` | boolean |

### getBuyTokenAmount

• **getBuyTokenAmount**: _function_ = proxyCall\( this.contract.methods.getBuyTokenAmount, tupleParser\(valueToString, identity\), valueToBigNumber \)

_Defined in_ [_packages/contractkit/src/wrappers/Exchange.ts:57_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Exchange.ts#L57)

**`dev`** Returns the amount of buyToken a user would get for sellAmount of sellToken

**`param`** The amount of sellToken the user is selling to the exchange

**`param`** `true` if gold is the sell token

**`returns`** The corresponding buyToken amount.

#### Type declaration:

▸ \(`sellAmount`: BigNumber.Value, `sellGold`: boolean\): _Promise‹BigNumber›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `sellAmount` | BigNumber.Value |
| `sellGold` | boolean |

### getSellTokenAmount

• **getSellTokenAmount**: _function_ = proxyCall\( this.contract.methods.getSellTokenAmount, tupleParser\(valueToString, identity\), valueToBigNumber \)

_Defined in_ [_packages/contractkit/src/wrappers/Exchange.ts:73_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Exchange.ts#L73)

Returns the amount of sellToken a user would need to exchange to receive buyAmount of buyToken.

**`param`** The amount of buyToken the user would like to purchase.

**`param`** `true` if gold is the sell token

**`returns`** The corresponding sellToken amount.

#### Type declaration:

▸ \(`buyAmount`: BigNumber.Value, `sellGold`: boolean\): _Promise‹BigNumber›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `buyAmount` | BigNumber.Value |
| `sellGold` | boolean |

### minimumReports

• **minimumReports**: _function_ = proxyCall\(this.contract.methods.minimumReports, undefined, valueToBigNumber\)

_Defined in_ [_packages/contractkit/src/wrappers/Exchange.ts:49_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Exchange.ts#L49)

Query minimum reports parameter

**`returns`** The minimum number of fresh reports that need to be present in the oracle to update buckets commit to the gold bucket

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### reserveFraction

• **reserveFraction**: _function_ = proxyCall\(this.contract.methods.reserveFraction, undefined, valueToBigNumber\)

_Defined in_ [_packages/contractkit/src/wrappers/Exchange.ts:36_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Exchange.ts#L36)

Query reserve fraction parameter

**`returns`** Current fraction to commit to the gold bucket

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### spread

• **spread**: _function_ = proxyCall\(this.contract.methods.spread, undefined, valueToBigNumber\)

_Defined in_ [_packages/contractkit/src/wrappers/Exchange.ts:31_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Exchange.ts#L31)

Query spread parameter

**`returns`** Current spread charged on exchanges

#### Type declaration:

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### updateFrequency

• **updateFrequency**: _function_ = proxyCall\(this.contract.methods.updateFrequency, undefined, valueToBigNumber\)

_Defined in_ [_packages/contractkit/src/wrappers/Exchange.ts:42_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Exchange.ts#L42)

Query update frequency parameter

**`returns`** The time period that needs to elapse between bucket updates

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

### getConfig

▸ **getConfig**\(\): _Promise‹_[_ExchangeConfig_](../interfaces/_wrappers_exchange_.exchangeconfig.md)_›_

_Defined in_ [_packages/contractkit/src/wrappers/Exchange.ts:168_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Exchange.ts#L168)

**`dev`** Returns the current configuration of the exchange contract

**Returns:** _Promise‹_[_ExchangeConfig_](../interfaces/_wrappers_exchange_.exchangeconfig.md)_›_

ExchangeConfig object

### getExchangeRate

▸ **getExchangeRate**\(`buyAmount`: BigNumber.Value, `sellGold`: boolean\): _Promise‹BigNumber›_

_Defined in_ [_packages/contractkit/src/wrappers/Exchange.ts:188_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Exchange.ts#L188)

Returns the exchange rate estimated at buyAmount.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `buyAmount` | BigNumber.Value | The amount of buyToken in wei to estimate the exchange rate at |
| `sellGold` | boolean | `true` if gold is the sell token |

**Returns:** _Promise‹BigNumber›_

The exchange rate \(number of sellTokens received for one buyToken\).

### getGoldExchangeRate

▸ **getGoldExchangeRate**\(`buyAmount`: BigNumber.Value\): _Promise‹BigNumber‹››_

_Defined in_ [_packages/contractkit/src/wrappers/Exchange.ts:205_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Exchange.ts#L205)

Returns the exchange rate for cGold estimated at the buyAmount

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `buyAmount` | BigNumber.Value | The amount of cGold in wei to estimate the exchange rate at |

**Returns:** _Promise‹BigNumber‹››_

The exchange rate \(number of cUsd received for one cGold\)

### getUsdExchangeRate

▸ **getUsdExchangeRate**\(`buyAmount`: BigNumber.Value\): _Promise‹BigNumber‹››_

_Defined in_ [_packages/contractkit/src/wrappers/Exchange.ts:198_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Exchange.ts#L198)

Returns the exchange rate for cUsd estimated at the buyAmount

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `buyAmount` | BigNumber.Value | The amount of cUsd in wei to estimate the exchange rate at |

**Returns:** _Promise‹BigNumber‹››_

The exchange rate \(number of cGold received for one cUsd\)

### quoteGoldBuy

▸ **quoteGoldBuy**\(`buyAmount`: BigNumber.Value\): _Promise‹BigNumber‹››_

_Defined in_ [_packages/contractkit/src/wrappers/Exchange.ts:162_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Exchange.ts#L162)

Returns the amount of cUsd a user would need to exchange to receive buyAmount of cGold.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `buyAmount` | BigNumber.Value | The amount of cGold the user would like to purchase. |

**Returns:** _Promise‹BigNumber‹››_

The corresponding cUsd amount.

### quoteGoldSell

▸ **quoteGoldSell**\(`sellAmount`: BigNumber.Value\): _Promise‹BigNumber‹››_

_Defined in_ [_packages/contractkit/src/wrappers/Exchange.ts:146_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Exchange.ts#L146)

Returns the amount of cUsd a user would get for sellAmount of cGold

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `sellAmount` | BigNumber.Value | The amount of cGold the user is selling to the exchange |

**Returns:** _Promise‹BigNumber‹››_

The corresponding cUsd amount.

### quoteUsdBuy

▸ **quoteUsdBuy**\(`buyAmount`: BigNumber.Value\): _Promise‹BigNumber‹››_

_Defined in_ [_packages/contractkit/src/wrappers/Exchange.ts:154_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Exchange.ts#L154)

Returns the amount of cGold a user would need to exchange to receive buyAmount of cUsd.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `buyAmount` | BigNumber.Value | The amount of cUsd the user would like to purchase. |

**Returns:** _Promise‹BigNumber‹››_

The corresponding cGold amount.

### quoteUsdSell

▸ **quoteUsdSell**\(`sellAmount`: BigNumber.Value\): _Promise‹BigNumber‹››_

_Defined in_ [_packages/contractkit/src/wrappers/Exchange.ts:139_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Exchange.ts#L139)

Returns the amount of cGold a user would get for sellAmount of cUsd

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `sellAmount` | BigNumber.Value | The amount of cUsd the user is selling to the exchange |

**Returns:** _Promise‹BigNumber‹››_

The corresponding cGold amount.

### sellDollar

▸ **sellDollar**\(`amount`: BigNumber.Value, `minGoldAmount`: BigNumber.Value\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹string›_

_Defined in_ [_packages/contractkit/src/wrappers/Exchange.ts:131_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Exchange.ts#L131)

Exchanges amount of cUsd in exchange for at least minGoldAmount of cGold Requires the amount to have been approved to the exchange

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `amount` | BigNumber.Value | The amount of cUsd the user is selling to the exchange |
| `minGoldAmount` | BigNumber.Value | The minimum amount of cGold the user has to receive for this transaction to succeed |

**Returns:** [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹string›_

### sellGold

▸ **sellGold**\(`amount`: BigNumber.Value, `minUSDAmount`: BigNumber.Value\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹string›_

_Defined in_ [_packages/contractkit/src/wrappers/Exchange.ts:121_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Exchange.ts#L121)

Exchanges amount of cGold in exchange for at least minUsdAmount of cUsd Requires the amount to have been approved to the exchange

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `amount` | BigNumber.Value | The amount of cGold the user is selling to the exchange |
| `minUSDAmount` | BigNumber.Value | - |

**Returns:** [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹string›_

