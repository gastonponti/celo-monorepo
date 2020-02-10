# utils/signing-utils

## Index

### Functions

* [recoverTransaction](_utils_signing_utils_.md#recovertransaction)
* [signTransaction](_utils_signing_utils_.md#signtransaction)

## Functions

### recoverTransaction

▸ **recoverTransaction**\(`rawTx`: string\): _\[_[_CeloTx_](../interfaces/_utils_tx_signing_.celotx.md)_, string\]_

_Defined in_ [_packages/contractkit/src/utils/signing-utils.ts:131_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/signing-utils.ts#L131)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `rawTx` | string |

**Returns:** _\[_[_CeloTx_](../interfaces/_utils_tx_signing_.celotx.md)_, string\]_

### signTransaction

▸ **signTransaction**\(`txn`: any, `privateKey`: string\): _Promise‹any›_

_Defined in_ [_packages/contractkit/src/utils/signing-utils.ts:31_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/utils/signing-utils.ts#L31)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `txn` | any |
| `privateKey` | string |

**Returns:** _Promise‹any›_

