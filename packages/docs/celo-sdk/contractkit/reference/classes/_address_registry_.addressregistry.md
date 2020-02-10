# AddressRegistry

Celo Core Contract's Address Registry

## Hierarchy

* **AddressRegistry**

## Index

### Constructors

* [constructor](_address_registry_.addressregistry.md#constructor)

### Methods

* [addressFor](_address_registry_.addressregistry.md#addressfor)
* [allAddresses](_address_registry_.addressregistry.md#alladdresses)

## Constructors

### constructor

+ **new AddressRegistry**\(`kit`: [ContractKit](_kit_.contractkit.md)\): [_AddressRegistry_](_address_registry_.addressregistry.md)

_Defined in_ [_packages/contractkit/src/address-registry.ts:18_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/address-registry.ts#L18)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](_kit_.contractkit.md) |

**Returns:** [_AddressRegistry_](_address_registry_.addressregistry.md)

## Methods

### addressFor

▸ **addressFor**\(`contract`: [CeloContract](../enums/_base_.celocontract.md)\): _Promise‹_[_Address_](../external-modules/_base_.md#address)_›_

_Defined in_ [_packages/contractkit/src/address-registry.ts:28_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/address-registry.ts#L28)

Get the address for a `CeloContract`

**Parameters:**

| Name | Type |
| :--- | :--- |
| `contract` | [CeloContract](../enums/_base_.celocontract.md) |

**Returns:** _Promise‹_[_Address_](../external-modules/_base_.md#address)_›_

### allAddresses

▸ **allAddresses**\(\): _Promise‹Record‹_[_CeloContract_](../enums/_base_.celocontract.md)_,_ [_Address_](../external-modules/_base_.md#address)_››_

_Defined in_ [_packages/contractkit/src/address-registry.ts:48_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/address-registry.ts#L48)

Get the address for all possible `CeloContract`

**Returns:** _Promise‹Record‹_[_CeloContract_](../enums/_base_.celocontract.md)_,_ [_Address_](../external-modules/_base_.md#address)_››_

