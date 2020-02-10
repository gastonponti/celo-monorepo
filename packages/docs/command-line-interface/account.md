---
description: 'Manage your account, keys, and metadata'
---

# Account

## Authorize

Keep your locked Gold more secure by authorizing alternative keys to be used for signing attestations, voting, or validating. By doing so, you can continue to participate in the protocol why keeping the key with access to your locked Gold in cold storage. You must include a "proof-of-possession" of the key being authorized, which can be generated with the "account:proof-of-possession" command.

```text
USAGE
  $ celocli account:authorize

OPTIONS
  -r, --role=vote|validator|attestation                (required) Role to delegate
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d    (required) Account Address

  --signature=signature                                (required) Signature (a.k.a proof-of-possession) of the signer
                                                       key

  --signer=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Account Address

EXAMPLE
  authorize --from 0x5409ED021D9299bf6814279A6A1411A7e866A631 --role vote --signer
  0x6ecbe1db9ef729cbe972c83fb886247691fb6beb --signature
  0x1b9fca4bbb5bfb1dbe69ef1cddbd9b4202dcb6b134c5170611e1e36ecfa468d7b46c85328d504934fce6c2a1571603a50ae224d2b32685e84d4d
  1a1eebad8452eb
```

_See code:_ [_packages/cli/src/commands/account/authorize.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/account/authorize.ts)

## Balance

View Celo Dollar and Gold balances for an address

```text
USAGE
  $ celocli account:balance ADDRESS

EXAMPLE
  balance 0x5409ed021d9299bf6814279a6a1411a7e866a631
```

_See code:_ [_packages/cli/src/commands/account/balance.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/account/balance.ts)

## Claim-account

Claim another account, and optionally its public key, and add the claim to a local metadata file

```text
USAGE
  $ celocli account:claim-account FILE

ARGUMENTS
  FILE  Path of the metadata file

OPTIONS
  --address=address                                  (required) The address of the account you want to claim
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Addess of the account to set metadata for

  --publicKey=publicKey                              The public key of the account that others may use to send you
                                                     encrypted messages

EXAMPLE
  claim-account ~/metadata.json --address 0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d --from
  0x47e172F6CfB6c7D01C1574fa3E2Be7CC73269D95
```

_See code:_ [_packages/cli/src/commands/account/claim-account.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/account/claim-account.ts)

## Claim-attestation-service-url

Claim the URL of the attestation service and add the claim to a local metadata file

```text
USAGE
  $ celocli account:claim-attestation-service-url FILE

ARGUMENTS
  FILE  Path of the metadata file

OPTIONS
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Addess of the account to set metadata for
  --url=https://www.celo.org                         (required) The url you want to claim

EXAMPLE
  claim-attestation-service-url ~/metadata.json --url http://test.com/myurl --from
  0x47e172F6CfB6c7D01C1574fa3E2Be7CC73269D95
```

_See code:_ [_packages/cli/src/commands/account/claim-attestation-service-url.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/account/claim-attestation-service-url.ts)

## Claim-domain

Claim a domain and add the claim to a local metadata file

```text
USAGE
  $ celocli account:claim-domain FILE

ARGUMENTS
  FILE  Path of the metadata file

OPTIONS
  --domain=domain                                    (required) The domain you want to claim
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Addess of the account to set metadata for

EXAMPLE
  claim-domain ~/metadata.json --domain test.com --from 0x47e172F6CfB6c7D01C1574fa3E2Be7CC73269D95
```

_See code:_ [_packages/cli/src/commands/account/claim-domain.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/account/claim-domain.ts)

## Claim-keybase

Claim a keybase username and add the claim to a local metadata file

```text
USAGE
  $ celocli account:claim-keybase FILE

ARGUMENTS
  FILE  Path of the metadata file

OPTIONS
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Addess of the account to set metadata for
  --username=username                                (required) The keybase username you want to claim

EXAMPLE
  claim-keybase ~/metadata.json --from 0x47e172F6CfB6c7D01C1574fa3E2Be7CC73269D95 --username myusername
```

_See code:_ [_packages/cli/src/commands/account/claim-keybase.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/account/claim-keybase.ts)

## Claim-name

Claim a name and add the claim to a local metadata file

```text
USAGE
  $ celocli account:claim-name FILE

ARGUMENTS
  FILE  Path of the metadata file

OPTIONS
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Addess of the account to set metadata for
  --name=name                                        (required) The name you want to claim

EXAMPLE
  claim-name ~/metadata.json --from 0x47e172F6CfB6c7D01C1574fa3E2Be7CC73269D95 --name myname
```

_See code:_ [_packages/cli/src/commands/account/claim-name.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/account/claim-name.ts)

## Create-metadata

Create an empty identity metadata file. Use this metadata file to store claims attesting to ownership of off-chain resources. Claims can be generated with the account:claim-\* commands.

```text
USAGE
  $ celocli account:create-metadata FILE

ARGUMENTS
  FILE  Path where the metadata should be saved

OPTIONS
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Addess of the account to set metadata for

EXAMPLE
  create-metadata ~/metadata.json --from 0x47e172F6CfB6c7D01C1574fa3E2Be7CC73269D95
```

_See code:_ [_packages/cli/src/commands/account/create-metadata.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/account/create-metadata.ts)

## Get-metadata

Show information about an address. Retreives the metadata URL for an account from the on-chain, then fetches the metadata file off-chain and verifies proofs as able.

```text
USAGE
  $ celocli account:get-metadata ADDRESS

ARGUMENTS
  ADDRESS  Address to get metadata for

EXAMPLE
  get-metadata 0x97f7333c51897469E8D98E7af8653aAb468050a3
```

_See code:_ [_packages/cli/src/commands/account/get-metadata.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/account/get-metadata.ts)

## New

Creates a new account locally and print out the key information. Save this information for local transaction signing or import into a Celo node.

```text
USAGE
  $ celocli account:new

EXAMPLE
  new
```

_See code:_ [_packages/cli/src/commands/account/new.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/account/new.ts)

## Proof-of-possession

Generate proof-of-possession to be used to authorize a signer. See the "account:authorize" command for more details.

```text
USAGE
  $ celocli account:proof-of-possession

OPTIONS
  --account=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Address of the account that needs to proove
                                                        possession of the signer key.

  --signer=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d   (required) Address of the signer key to prove possession of.

EXAMPLE
  proof-of-possession --account 0x5409ed021d9299bf6814279a6a1411a7e866a631 --signer
  0x6ecbe1db9ef729cbe972c83fb886247691fb6beb
```

_See code:_ [_packages/cli/src/commands/account/proof-of-possession.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/account/proof-of-possession.ts)

## Register

Register an account on-chain. This allows you to lock Gold, which is a pre-requisite for registering a Validator or Group, participating in Validator elections and on-chain Governance, and earning epoch rewards.

```text
USAGE
  $ celocli account:register

OPTIONS
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Account Address
  --name=name

EXAMPLES
  register --from 0x5409ed021d9299bf6814279a6a1411a7e866a631
  register --from 0x5409ed021d9299bf6814279a6a1411a7e866a631 --name test-account
```

_See code:_ [_packages/cli/src/commands/account/register.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/account/register.ts)

## Register-metadata

Register metadata URL for an account where users will be able to retieve the metadata file and verify your claims

```text
USAGE
  $ celocli account:register-metadata

OPTIONS
  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Addess of the account to set metadata for
  --url=https://www.celo.org                         (required) The url to the metadata you want to register

EXAMPLE
  register-metadata --url https://www.mywebsite.com/celo-metadata --from 0x47e172F6CfB6c7D01C1574fa3E2Be7CC73269D95
```

_See code:_ [_packages/cli/src/commands/account/register-metadata.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/account/register-metadata.ts)

## Set-name

Sets the name of a registered account on-chain. An account's name is an optional human readable identifier

```text
USAGE
  $ celocli account:set-name

OPTIONS
  --account=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Account Address
  --name=name                                           (required)

EXAMPLE
  set-name --account 0x5409ed021d9299bf6814279a6a1411a7e866a631 --name test-account
```

_See code:_ [_packages/cli/src/commands/account/set-name.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/account/set-name.ts)

## Show

Show information for an account, including name, authorized vote, validator, and attestation signers, the URL at which account metadata is hosted, the address the account is using with the mobile wallet, and a public key that can be used to encrypt information for the account.

```text
USAGE
  $ celocli account:show ADDRESS

EXAMPLE
  show 0x5409ed021d9299bf6814279a6a1411a7e866a631
```

_See code:_ [_packages/cli/src/commands/account/show.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/account/show.ts)

## Show-claimed-accounts

Show information about claimed accounts

```text
USAGE
  $ celocli account:show-claimed-accounts ADDRESS

EXAMPLE
  show-claimed-accounts 0x5409ed021d9299bf6814279a6a1411a7e866a631
```

_See code:_ [_packages/cli/src/commands/account/show-claimed-accounts.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/account/show-claimed-accounts.ts)

## Show-metadata

Show the data in a local metadata file

```text
USAGE
  $ celocli account:show-metadata FILE

ARGUMENTS
  FILE  Path of the metadata file

EXAMPLE
  show-metadata ~/metadata.json
```

_See code:_ [_packages/cli/src/commands/account/show-metadata.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/account/show-metadata.ts)

## Unlock

Unlock an account address to send transactions or validate blocks

```text
USAGE
  $ celocli account:unlock ACCOUNT

ARGUMENTS
  ACCOUNT  Account address

OPTIONS
  --password=password

EXAMPLE
  unlock 0x5409ed021d9299bf6814279a6a1411a7e866a631
```

_See code:_ [_packages/cli/src/commands/account/unlock.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/account/unlock.ts)

