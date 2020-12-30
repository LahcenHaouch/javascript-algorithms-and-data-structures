import { rot13 } from './caesars-cipher'

describe('caesars-cipher', () => {
  test('rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"', () => {
    const result = rot13('SERR PBQR PNZC')

    expect(result).toEqual('FREE CODE CAMP')
  })

  test('rot13("SERR CVMMN!") should decode to "FREE PIZZA!"', () => {
    const result = rot13('SERR CVMMN!')

    expect(result).toEqual('FREE PIZZA!')
  })

  test('rot13("SERR YBIR?") should decode to "FREE LOVE?"', () => {
    const result = rot13('SERR YBIR?')

    expect(result).toEqual('FREE LOVE?')
  })

  test('rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."', () => {
    const result = rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')

    expect(result).toEqual('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.')
  })
})
