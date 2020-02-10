# wrappers/BaseWrapper

## Index

### Classes

* [BaseWrapper](../classes/_wrappers_basewrapper_.basewrapper.md)
* [CeloTransactionObject](../classes/_wrappers_basewrapper_.celotransactionobject.md)

### Type aliases

* [CeloTransactionParams](_wrappers_basewrapper_.md#celotransactionparams)

### Variables

* [stringToBuffer](_wrappers_basewrapper_.md#const-stringtobuffer)

### Functions

* [bufferToBytes](_wrappers_basewrapper_.md#const-buffertobytes)
* [bufferToString](_wrappers_basewrapper_.md#const-buffertostring)
* [bytesToString](_wrappers_basewrapper_.md#const-bytestostring)
* [identity](_wrappers_basewrapper_.md#const-identity)
* [proxyCall](_wrappers_basewrapper_.md#proxycall)
* [proxySend](_wrappers_basewrapper_.md#proxysend)
* [stringToBytes](_wrappers_basewrapper_.md#const-stringtobytes)
* [toTransactionObject](_wrappers_basewrapper_.md#totransactionobject)
* [tupleParser](_wrappers_basewrapper_.md#tupleparser)
* [valueToBigNumber](_wrappers_basewrapper_.md#const-valuetobignumber)
* [valueToFrac](_wrappers_basewrapper_.md#const-valuetofrac)
* [valueToInt](_wrappers_basewrapper_.md#const-valuetoint)
* [valueToString](_wrappers_basewrapper_.md#const-valuetostring)

## Type aliases

### CeloTransactionParams

Ƭ **CeloTransactionParams**: _Omit‹Tx, "data"›_

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:236_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L236)

## Variables

### `Const` stringToBuffer

• **stringToBuffer**: _function_ = hexToBuffer

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:49_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L49)

#### Type declaration:

▸ \(`input`: string\): _Buffer_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `input` | string |

## Functions

### `Const` bufferToBytes

▸ **bufferToBytes**\(`input`: Buffer\): _string \| number\[\]\[\]_

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:59_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L59)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `input` | Buffer |

**Returns:** _string \| number\[\]\[\]_

### `Const` bufferToString

▸ **bufferToString**\(`buf`: Buffer\): _string_

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:51_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L51)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `buf` | Buffer |

**Returns:** _string_

### `Const` bytesToString

▸ **bytesToString**\(`input`: SolBytes\): _string_

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:61_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L61)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `input` | SolBytes |

**Returns:** _string_

### `Const` identity

▸ **identity**&lt;**A**&gt;\(`a`: A\): _A_

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:66_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L66)

Identity Parser

**Type parameters:**

▪ **A**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `a` | A |

**Returns:** _A_

### proxyCall

▸ **proxyCall**&lt;**InputArgs**, **ParsedInputArgs**, **PreParsedOutput**, **Output**&gt;\(`methodFn`: Method‹ParsedInputArgs, PreParsedOutput›, `parseInputArgs`: function, `parseOutput`: function\): _function_

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:134_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L134)

Creates a proxy to call a web3 native contract method.

There are 4 cases:

* methodFn
* parseInputArgs =&gt; methodFn
* parseInputArgs =&gt; methodFn =&gt; parseOutput
* methodFn =&gt; parseOutput

**Type parameters:**

▪ **InputArgs**: _any\[\]_

▪ **ParsedInputArgs**: _any\[\]_

▪ **PreParsedOutput**

▪ **Output**

**Parameters:**

▪ **methodFn**: _Method‹ParsedInputArgs, PreParsedOutput›_

Web3 methods function

▪ **parseInputArgs**: _function_

parseInputArgs function, tranforms arguments into `methodFn` expected inputs

▸ \(...`args`: InputArgs\): _ParsedInputArgs_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

▪ **parseOutput**: _function_

parseOutput function, transforms `methodFn` output into proxy return

▸ \(`o`: PreParsedOutput\): _Output_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `o` | PreParsedOutput |

**Returns:** _function_

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

▸ **proxyCall**&lt;**InputArgs**, **PreParsedOutput**, **Output**&gt;\(`methodFn`: Method‹InputArgs, PreParsedOutput›, `x`: undefined, `parseOutput`: function\): _function_

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:144_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L144)

**Type parameters:**

▪ **InputArgs**: _any\[\]_

▪ **PreParsedOutput**

▪ **Output**

**Parameters:**

▪ **methodFn**: _Method‹InputArgs, PreParsedOutput›_

▪ **x**: _undefined_

▪ **parseOutput**: _function_

▸ \(`o`: PreParsedOutput\): _Output_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `o` | PreParsedOutput |

**Returns:** _function_

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

▸ **proxyCall**&lt;**InputArgs**, **ParsedInputArgs**, **Output**&gt;\(`methodFn`: Method‹ParsedInputArgs, Output›, `parseInputArgs`: function\): _function_

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:149_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L149)

**Type parameters:**

▪ **InputArgs**: _any\[\]_

▪ **ParsedInputArgs**: _any\[\]_

▪ **Output**

**Parameters:**

▪ **methodFn**: _Method‹ParsedInputArgs, Output›_

▪ **parseInputArgs**: _function_

▸ \(...`args`: InputArgs\): _ParsedInputArgs_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

**Returns:** _function_

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

▸ **proxyCall**&lt;**InputArgs**, **Output**&gt;\(`methodFn`: Method‹InputArgs, Output›\): _function_

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:153_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L153)

**Type parameters:**

▪ **InputArgs**: _any\[\]_

▪ **Output**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `methodFn` | Method‹InputArgs, Output› |

**Returns:** _function_

▸ \(...`args`: InputArgs\): _Promise‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### proxySend

▸ **proxySend**&lt;**InputArgs**, **ParsedInputArgs**, **Output**&gt;\(`kit`: [ContractKit](../classes/_kit_.contractkit.md), ...`sendArgs`: ProxySendArgs‹InputArgs, ParsedInputArgs, Output›\): _function_

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:214_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L214)

Creates a proxy to send a tx on a web3 native contract method.

There are 2 cases:

* call methodFn \(no pre or post parsing\)
* preParse arguments & call methodFn

**Type parameters:**

▪ **InputArgs**: _any\[\]_

▪ **ParsedInputArgs**: _any\[\]_

▪ **Output**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) |
| `...sendArgs` | ProxySendArgs‹InputArgs, ParsedInputArgs, Output› |

**Returns:** _function_

▸ \(...`args`: InputArgs\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹Output›_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | InputArgs |

### `Const` stringToBytes

▸ **stringToBytes**\(`input`: string\): _string \| number\[\]\[\]_

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:57_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L57)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `input` | string |

**Returns:** _string \| number\[\]\[\]_

### toTransactionObject

▸ **toTransactionObject**&lt;**O**&gt;\(`kit`: [ContractKit](../classes/_kit_.contractkit.md), `txo`: TransactionObject‹O›, `defaultParams?`: Omit‹Tx, "data"›\): [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹O›_

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:228_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L228)

**Type parameters:**

▪ **O**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](../classes/_kit_.contractkit.md) |
| `txo` | TransactionObject‹O› |
| `defaultParams?` | Omit‹Tx, "data"› |

**Returns:** [_CeloTransactionObject_](../classes/_wrappers_basewrapper_.celotransactionobject.md)_‹O›_

### tupleParser

▸ **tupleParser**&lt;**A0**, **B0**&gt;\(`parser0`: Parser‹A0, B0›\): _function_

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:72_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L72)

Tuple parser Useful to map different input arguments

**Type parameters:**

▪ **A0**

▪ **B0**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `parser0` | Parser‹A0, B0› |

**Returns:** _function_

▸ \(...`args`: \[A0\]\): _\[B0\]_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | \[A0\] |

▸ **tupleParser**&lt;**A0**, **B0**, **A1**, **B1**&gt;\(`parser0`: Parser‹A0, B0›, `parser1`: Parser‹A1, B1›\): _function_

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:73_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L73)

**Type parameters:**

▪ **A0**

▪ **B0**

▪ **A1**

▪ **B1**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `parser0` | Parser‹A0, B0› |
| `parser1` | Parser‹A1, B1› |

**Returns:** _function_

▸ \(...`args`: \[A0, A1\]\): _\[B0, B1\]_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | \[A0, A1\] |

▸ **tupleParser**&lt;**A0**, **B0**, **A1**, **B1**, **A2**, **B2**&gt;\(`parser0`: Parser‹A0, B0›, `parser1`: Parser‹A1, B1›, `parser2`: Parser‹A2, B2›\): _function_

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:77_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L77)

**Type parameters:**

▪ **A0**

▪ **B0**

▪ **A1**

▪ **B1**

▪ **A2**

▪ **B2**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `parser0` | Parser‹A0, B0› |
| `parser1` | Parser‹A1, B1› |
| `parser2` | Parser‹A2, B2› |

**Returns:** _function_

▸ \(...`args`: \[A0, A1, A2\]\): _\[B0, B1, B2\]_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | \[A0, A1, A2\] |

▸ **tupleParser**&lt;**A0**, **B0**, **A1**, **B1**, **A2**, **B2**, **A3**, **B3**&gt;\(`parser0`: Parser‹A0, B0›, `parser1`: Parser‹A1, B1›, `parser2`: Parser‹A2, B2›, `parser3`: Parser‹A3, B3›\): _function_

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:82_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L82)

**Type parameters:**

▪ **A0**

▪ **B0**

▪ **A1**

▪ **B1**

▪ **A2**

▪ **B2**

▪ **A3**

▪ **B3**

**Parameters:**

| Name | Type |
| :--- | :--- |
| `parser0` | Parser‹A0, B0› |
| `parser1` | Parser‹A1, B1› |
| `parser2` | Parser‹A2, B2› |
| `parser3` | Parser‹A3, B3› |

**Returns:** _function_

▸ \(...`args`: \[A0, A1, A2, A3\]\): _\[B0, B1, B2, B3\]_

**Parameters:**

| Name | Type |
| :--- | :--- |
| `...args` | \[A0, A1, A2, A3\] |

### `Const` valueToBigNumber

▸ **valueToBigNumber**\(`input`: BigNumber.Value\): _BigNumber‹›_

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:37_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L37)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `input` | BigNumber.Value |

**Returns:** _BigNumber‹›_

### `Const` valueToFrac

▸ **valueToFrac**\(`numerator`: BigNumber.Value, `denominator`: BigNumber.Value\): _BigNumber‹›_

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:46_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L46)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `numerator` | BigNumber.Value |
| `denominator` | BigNumber.Value |

**Returns:** _BigNumber‹›_

### `Const` valueToInt

▸ **valueToInt**\(`input`: BigNumber.Value\): _number_

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:41_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L41)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `input` | BigNumber.Value |

**Returns:** _number_

### `Const` valueToString

▸ **valueToString**\(`input`: BigNumber.Value\): _string_

_Defined in_ [_packages/contractkit/src/wrappers/BaseWrapper.ts:39_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L39)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `input` | BigNumber.Value |

**Returns:** _string_

