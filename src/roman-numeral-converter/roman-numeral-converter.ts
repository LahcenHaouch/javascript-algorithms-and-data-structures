const ROMAN_SYMBOLS = {
  ONES: {
    ten: 'X',
    five: 'V',
    one: 'I',
  },
  TENS: {
    ten: 'C',
    five: 'L',
    one: 'X',
  },
  HUNDREDS: {
    ten: 'M',
    five: 'D',
    one: 'C',
  },
}

function getRomanSymbol(num: number, type: string): string {
  if (num === 0) {
    return ''
  }

  if (type === 'THOUSANDS') {
    let result = ''

    for (let i = 0; i < num; i++) {
      result += ROMAN_SYMBOLS.HUNDREDS.ten
    }
    return result
  }

  const syms = ROMAN_SYMBOLS[type]

  if (num === 5) {
    return syms.five
  }

  if (num === 4) {
    return syms.one + syms.five
  }

  if (num === 6) {
    return syms.five + syms.one
  }

  if (num === 9) {
    return syms.one + syms.ten
  }

  if (num <= 3) {
    let result = ''

    for (let i = 0; i < num; i++) {
      result += syms.one
    }
    return result
  }

  if (num > 6 && num < 9) {
    let result = syms.five

    for (let i = 0; i < num - 5; i++) {
      result += syms.one
    }
    return result
  }
  return ''
}

export function convertToRoman(num: number): string {
  const thousands = Math.floor(num / 1000)
  const thousandsReminder = Math.floor(num % 1000)

  const hundreds = Math.floor(thousandsReminder / 100)
  const hundredsReminder = Math.floor(thousandsReminder % 100)

  const tens = Math.floor(hundredsReminder / 10)
  const ones = Math.floor(hundredsReminder % 10)

  return `${getRomanSymbol(thousands, 'THOUSANDS')}${getRomanSymbol(
    hundreds,
    'HUNDREDS'
  )}${getRomanSymbol(tens, 'TENS')}${getRomanSymbol(ones, 'ONES')}`
}

convertToRoman(36)
