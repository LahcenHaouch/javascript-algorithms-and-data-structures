function getFund(
  inStock: Array<string | number>,
  howMany: number,
  multi: number,
  result: Array<Array<string | number>>,
  change: number
): number {
  const newChange = Number(Number(change).toFixed(2))

  if (inStock[1] !== 0 && howMany !== 0) {
    let left: number
    const inCurrentStock = Number(inStock[1]) / multi
    if (inCurrentStock >= howMany) {
      left = howMany
      result.push([inStock[0], howMany * multi])
    } else {
      result.push([inStock[0], inCurrentStock * multi])
      left = inCurrentStock
    }
    return newChange - left * multi
  }
  return newChange
}

export function checkCashRegister(
  price: number,
  cash: number,
  cid: Array<Array<string | number>>
) {
  const insufficientFunds = {
    status: 'INSUFFICIENT_FUNDS',
    change: [],
  }

  const cashInRegister = Number(
    cid
      .map(element => Number(element[1]))
      .reduce((acc, next) => acc + next, 0)
      .toFixed(2)
  )

  let change = cash - price

  if (price > cash || change > cashInRegister) {
    return insufficientFunds
  }

  const result = []

  const [
    xpenny,
    xnickel,
    xdime,
    xquarter,
    xone,
    xfive,
    xten,
    xtwenty,
    xhundred,
  ] = cid

  const money = [
    {
      xvalue: xhundred,
      multi: 100,
    },
    {
      xvalue: xtwenty,
      multi: 20,
    },
    {
      xvalue: xten,
      multi: 10,
    },
    {
      xvalue: xfive,
      multi: 5,
    },
    {
      xvalue: xone,
      multi: 1,
    },
    {
      xvalue: xquarter,
      multi: 0.25,
    },
    {
      xvalue: xdime,
      multi: 0.1,
    },
    {
      xvalue: xnickel,
      multi: 0.05,
    },
    {
      xvalue: xpenny,
      multi: 0.01,
    },
  ]

  for (let i = 0; i < money.length; i++) {
    const { xvalue, multi } = money[i]

    const value = Math.floor(change / multi)

    change = getFund(xvalue, value, multi, result, change)

    if (change === 0) {
      if (cash - price - cashInRegister === 0) {
        return {
          status: 'CLOSED',
          change: cid,
        }
      }
      return {
        status: 'OPEN',
        change: result,
      }
    }
  }
  return insufficientFunds
}
