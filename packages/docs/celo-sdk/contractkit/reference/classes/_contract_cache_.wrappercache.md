# WrapperCache

Kit ContractWrappers factory & cache.

Provides access to all contract wrappers for celo core contracts

## Hierarchy

* **WrapperCache**

## Index

### Constructors

* [constructor](_contract_cache_.wrappercache.md#constructor)

### Properties

* [kit](_contract_cache_.wrappercache.md#kit)

### Methods

* [getAccounts](_contract_cache_.wrappercache.md#getaccounts)
* [getAttestations](_contract_cache_.wrappercache.md#getattestations)
* [getBlockchainParameters](_contract_cache_.wrappercache.md#getblockchainparameters)
* [getContract](_contract_cache_.wrappercache.md#getcontract)
* [getDoubleSigningSlasher](_contract_cache_.wrappercache.md#getdoublesigningslasher)
* [getDowntimeSlasher](_contract_cache_.wrappercache.md#getdowntimeslasher)
* [getElection](_contract_cache_.wrappercache.md#getelection)
* [getEscrow](_contract_cache_.wrappercache.md#getescrow)
* [getExchange](_contract_cache_.wrappercache.md#getexchange)
* [getGasPriceMinimum](_contract_cache_.wrappercache.md#getgaspriceminimum)
* [getGoldToken](_contract_cache_.wrappercache.md#getgoldtoken)
* [getGovernance](_contract_cache_.wrappercache.md#getgovernance)
* [getLockedGold](_contract_cache_.wrappercache.md#getlockedgold)
* [getReserve](_contract_cache_.wrappercache.md#getreserve)
* [getSortedOracles](_contract_cache_.wrappercache.md#getsortedoracles)
* [getStableToken](_contract_cache_.wrappercache.md#getstabletoken)
* [getValidators](_contract_cache_.wrappercache.md#getvalidators)

## Constructors

### constructor

+ **new WrapperCache**\(`kit`: [ContractKit](_kit_.contractkit.md)\): [_WrapperCache_](_contract_cache_.wrappercache.md)

_Defined in_ [_packages/contractkit/src/contract-cache.ts:79_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L79)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `kit` | [ContractKit](_kit_.contractkit.md) |

**Returns:** [_WrapperCache_](_contract_cache_.wrappercache.md)

## Properties

### kit

• **kit**: [_ContractKit_](_kit_.contractkit.md)

_Defined in_ [_packages/contractkit/src/contract-cache.ts:81_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L81)

## Methods

### getAccounts

▸ **getAccounts**\(\): _Promise‹_[_AccountsWrapper_](_wrappers_accounts_.accountswrapper.md)_‹››_

_Defined in_ [_packages/contractkit/src/contract-cache.ts:83_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L83)

**Returns:** _Promise‹_[_AccountsWrapper_](_wrappers_accounts_.accountswrapper.md)_‹››_

### getAttestations

▸ **getAttestations**\(\): _Promise‹_[_AttestationsWrapper_](_wrappers_attestations_.attestationswrapper.md)_‹››_

_Defined in_ [_packages/contractkit/src/contract-cache.ts:86_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L86)

**Returns:** _Promise‹_[_AttestationsWrapper_](_wrappers_attestations_.attestationswrapper.md)_‹››_

### getBlockchainParameters

▸ **getBlockchainParameters**\(\): _Promise‹_[_BlockchainParametersWrapper_](_wrappers_blockchainparameters_.blockchainparameterswrapper.md)_‹››_

_Defined in_ [_packages/contractkit/src/contract-cache.ts:89_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L89)

**Returns:** _Promise‹_[_BlockchainParametersWrapper_](_wrappers_blockchainparameters_.blockchainparameterswrapper.md)_‹››_

### getContract

▸ **getContract**&lt;**C**&gt;\(`contract`: C\): _Promise‹WrapperCacheMap\[C\] extends undefined \| null ? never : WrapperCacheMap\[C\]›_

_Defined in_ [_packages/contractkit/src/contract-cache.ts:147_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L147)

Get Contract wrapper

**Type parameters:**

▪ **C**: [_ValidWrappers_](../external-modules/_contract_cache_.md#validwrappers)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `contract` | C |

**Returns:** _Promise‹WrapperCacheMap\[C\] extends undefined \| null ? never : WrapperCacheMap\[C\]›_

### getDoubleSigningSlasher

▸ **getDoubleSigningSlasher**\(\): _Promise‹_[_DoubleSigningSlasherWrapper_](_wrappers_doublesigningslasher_.doublesigningslasherwrapper.md)_‹››_

_Defined in_ [_packages/contractkit/src/contract-cache.ts:92_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L92)

**Returns:** _Promise‹_[_DoubleSigningSlasherWrapper_](_wrappers_doublesigningslasher_.doublesigningslasherwrapper.md)_‹››_

### getDowntimeSlasher

▸ **getDowntimeSlasher**\(\): _Promise‹_[_DowntimeSlasherWrapper_](_wrappers_downtimeslasher_.downtimeslasherwrapper.md)_‹››_

_Defined in_ [_packages/contractkit/src/contract-cache.ts:95_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L95)

**Returns:** _Promise‹_[_DowntimeSlasherWrapper_](_wrappers_downtimeslasher_.downtimeslasherwrapper.md)_‹››_

### getElection

▸ **getElection**\(\): _Promise‹_[_ElectionWrapper_](_wrappers_election_.electionwrapper.md)_‹››_

_Defined in_ [_packages/contractkit/src/contract-cache.ts:98_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L98)

**Returns:** _Promise‹_[_ElectionWrapper_](_wrappers_election_.electionwrapper.md)_‹››_

### getEscrow

▸ **getEscrow**\(\): _Promise‹_[_EscrowWrapper_](_wrappers_escrow_.escrowwrapper.md)_‹››_

_Defined in_ [_packages/contractkit/src/contract-cache.ts:104_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L104)

**Returns:** _Promise‹_[_EscrowWrapper_](_wrappers_escrow_.escrowwrapper.md)_‹››_

### getExchange

▸ **getExchange**\(\): _Promise‹_[_ExchangeWrapper_](_wrappers_exchange_.exchangewrapper.md)_‹››_

_Defined in_ [_packages/contractkit/src/contract-cache.ts:107_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L107)

**Returns:** _Promise‹_[_ExchangeWrapper_](_wrappers_exchange_.exchangewrapper.md)_‹››_

### getGasPriceMinimum

▸ **getGasPriceMinimum**\(\): _Promise‹_[_GasPriceMinimumWrapper_](_wrappers_gaspriceminimum_.gaspriceminimumwrapper.md)_‹››_

_Defined in_ [_packages/contractkit/src/contract-cache.ts:113_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L113)

**Returns:** _Promise‹_[_GasPriceMinimumWrapper_](_wrappers_gaspriceminimum_.gaspriceminimumwrapper.md)_‹››_

### getGoldToken

▸ **getGoldToken**\(\): _Promise‹_[_GoldTokenWrapper_](_wrappers_goldtokenwrapper_.goldtokenwrapper.md)_‹››_

_Defined in_ [_packages/contractkit/src/contract-cache.ts:116_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L116)

**Returns:** _Promise‹_[_GoldTokenWrapper_](_wrappers_goldtokenwrapper_.goldtokenwrapper.md)_‹››_

### getGovernance

▸ **getGovernance**\(\): _Promise‹_[_GovernanceWrapper_](_wrappers_governance_.governancewrapper.md)_‹››_

_Defined in_ [_packages/contractkit/src/contract-cache.ts:119_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L119)

**Returns:** _Promise‹_[_GovernanceWrapper_](_wrappers_governance_.governancewrapper.md)_‹››_

### getLockedGold

▸ **getLockedGold**\(\): _Promise‹_[_LockedGoldWrapper_](_wrappers_lockedgold_.lockedgoldwrapper.md)_‹››_

_Defined in_ [_packages/contractkit/src/contract-cache.ts:122_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L122)

**Returns:** _Promise‹_[_LockedGoldWrapper_](_wrappers_lockedgold_.lockedgoldwrapper.md)_‹››_

### getReserve

▸ **getReserve**\(\): _Promise‹_[_ReserveWrapper_](_wrappers_reserve_.reservewrapper.md)_‹››_

_Defined in_ [_packages/contractkit/src/contract-cache.ts:131_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L131)

**Returns:** _Promise‹_[_ReserveWrapper_](_wrappers_reserve_.reservewrapper.md)_‹››_

### getSortedOracles

▸ **getSortedOracles**\(\): _Promise‹_[_SortedOraclesWrapper_](_wrappers_sortedoracles_.sortedoracleswrapper.md)_‹››_

_Defined in_ [_packages/contractkit/src/contract-cache.ts:134_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L134)

**Returns:** _Promise‹_[_SortedOraclesWrapper_](_wrappers_sortedoracles_.sortedoracleswrapper.md)_‹››_

### getStableToken

▸ **getStableToken**\(\): _Promise‹_[_StableTokenWrapper_](_wrappers_stabletokenwrapper_.stabletokenwrapper.md)_‹››_

_Defined in_ [_packages/contractkit/src/contract-cache.ts:137_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L137)

**Returns:** _Promise‹_[_StableTokenWrapper_](_wrappers_stabletokenwrapper_.stabletokenwrapper.md)_‹››_

### getValidators

▸ **getValidators**\(\): _Promise‹_[_ValidatorsWrapper_](_wrappers_validators_.validatorswrapper.md)_‹››_

_Defined in_ [_packages/contractkit/src/contract-cache.ts:140_](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/contract-cache.ts#L140)

**Returns:** _Promise‹_[_ValidatorsWrapper_](_wrappers_validators_.validatorswrapper.md)_‹››_

