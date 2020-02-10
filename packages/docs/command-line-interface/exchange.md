---
description: Exchange Celo Dollars and Celo Gold via the stability mechanism
---

# Exchange

## Dollars

Exchange Celo Dollars for Celo Gold via the stability mechanism

```text
USAGE
  $ celocli exchange:dollars

OPTIONS
  --forAtLeast=10000000000000000000000               [default: 0] Optional, the minimum value of Celo Gold to receive in
                                                     return

  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) The address with Celo Dollars to exchange

  --value=10000000000000000000000                    (required) The value of Celo Dollars to exchange for Celo Gold

EXAMPLES
  dollars --value 10000000000000 --from 0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d
  dollars --value 10000000000000 --forAtLeast 50000000000000 --from 0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d
```

_See code:_ [_packages/cli/src/commands/exchange/dollars.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/exchange/dollars.ts)

## Gold

Exchange Celo Gold for Celo Dollars via the stability mechanism

```text
USAGE
  $ celocli exchange:gold

OPTIONS
  --forAtLeast=10000000000000000000000               [default: 0] Optional, the minimum value of Celo Dollars to receive
                                                     in return

  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) The address with Celo Gold to exchange

  --value=10000000000000000000000                    (required) The value of Celo Gold to exchange for Celo Dollars

EXAMPLES
  gold --value 5000000000000 --from 0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d
  gold --value 5000000000000 --forAtLeast 100000000000000 --from 0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d
```

_See code:_ [_packages/cli/src/commands/exchange/gold.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/exchange/gold.ts)

## Show

Show the current exchange rates offered by the Exchange

```text
USAGE
  $ celocli exchange:show

OPTIONS
  --amount=amount  [default: 1000000000000000000] Amount of the token being exchanged to report rates for

EXAMPLE
  list
```

_See code:_ [_packages/cli/src/commands/exchange/show.ts_](https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/exchange/show.ts)

