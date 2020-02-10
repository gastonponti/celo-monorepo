# utils/web3-utils

## Index

### Functions

* [addLocalAccount](_utils_web3_utils_.md#addlocalaccount)
* [getAbiTypes](_utils_web3_utils_.md#const-getabitypes)
* [parseDecodedParams](_utils_web3_utils_.md#const-parsedecodedparams)

## Functions

### addLocalAccount

▸ **addLocalAccount**\(`web3`: Web3, `privateKey`: string\): _Web3_

_Defined in_ [_packages/contractkit/src/utils/web3-utils.ts:10_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/web3-utils.ts#L10)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `web3` | Web3 |
| `privateKey` | string |

**Returns:** _Web3_

### `Const` getAbiTypes

▸ **getAbiTypes**\(`abi`: ABIDefinition\[\], `methodName`: string\): _string\[\]_

_Defined in_ [_packages/contractkit/src/utils/web3-utils.ts:24_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/web3-utils.ts#L24)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `abi` | ABIDefinition\[\] |
| `methodName` | string |

**Returns:** _string\[\]_

### `Const` parseDecodedParams

▸ **parseDecodedParams**\(`params`: DecodedParamsObject\): _object_

_Defined in_ [_packages/contractkit/src/utils/web3-utils.ts:27_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/web3-utils.ts#L27)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `params` | DecodedParamsObject |

**Returns:** _object_

* **args**: _any\[\]_
* **params**: _DecodedParamsObject_

