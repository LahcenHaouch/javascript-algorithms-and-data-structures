import { palindrome } from './palindrome-checker'

describe('palindrome-checker', () => {
  test('palindrome should return a boolean', () => {
    const result = palindrome('test')

    expect(typeof result === 'boolean').toBeTruthy()
  })

  test('palindrome("eye") should return true', () => {
    const result = palindrome('eye')

    expect(result).toBeTruthy()
  })

  test('palindrome("_eye") should return true', () => {
    const result = palindrome('_eye')

    expect(result).toBeTruthy()
  })

  test('palindrome("race car") should return true', () => {
    const result = palindrome('race car')

    expect(result).toBeTruthy()
  })

  test('palindrome("not a palindrome") should return false', () => {
    const result = palindrome('not a palindrome')

    expect(result).toBeFalsy()
  })

  test('palindrome("A man, a plan, a canal. Panama") should return true', () => {
    const result = palindrome('A man, a plan, a canal. Panama')

    expect(result).toBeTruthy()
  })

  test('palindrome("never odd or even") should return true', () => {
    const result = palindrome('never odd or even')

    expect(result).toBeTruthy()
  })

  test('palindrome("nope") should return false', () => {
    const result = palindrome('nope')

    expect(result).toBeFalsy()
  })

  test('palindrome("almostomla") should return false', () => {
    const result = palindrome('almostomla')

    expect(result).toBeFalsy()
  })

  test('palindrome("My age is 0, 0 si ega ym.") should return true', () => {
    const result = palindrome('My age is 0, 0 si ega ym.')

    expect(result).toBeTruthy()
  })

  test('palindrome("1 eye for of 1 eye.") should return false', () => {
    const result = palindrome('1 eye for of 1 eye.')

    expect(result).toBeFalsy()
  })

  test('palindrome("0_0 (: /-\\ :) 0-0") should return true', () => {
    const result = palindrome('0_0 (: /-\\ :) 0-0')

    expect(result).toBeTruthy()
  })

  test('palindrome("five|_/|four") should return false', () => {
    const result = palindrome('five|_/|four')

    expect(result).toBeFalsy()
  })
})
