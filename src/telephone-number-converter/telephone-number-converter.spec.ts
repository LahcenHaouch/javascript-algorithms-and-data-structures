import { telephoneCheck } from './telephone-number-converter'

describe('telephone-number-converter', () => {
  const TEST_CASES = [
    {
      input: '555-555-5555',
      expected: true,
    },
    {
      input: '1 555-555-5555',
      expected: true,
    },
    {
      input: '1 (555) 555-5555',
      expected: true,
    },
    {
      input: '5555555555',
      expected: true,
    },
    {
      input: '555-555-5555',
      expected: true,
    },
    {
      input: '(555)555-5555',
      expected: true,
    },
    {
      input: '1(555)555-5555',
      expected: true,
    },
    {
      input: '555-5555',
      expected: false,
    },
    {
      input: '5555555',
      expected: false,
    },
    {
      input: '1 555)555-5555',
      expected: false,
    },
    {
      input: '1 555 555 5555',
      expected: true,
    },
    {
      input: '1 456 789 4444',
      expected: true,
    },
    {
      input: '123**&!!asdf#',
      expected: false,
    },
    {
      input: '55555555',
      expected: false,
    },
    {
      input: '(6054756961)',
      expected: false,
    },
    {
      input: '2 (757) 622-7382',
      expected: false,
    },
    {
      input: '0 (757) 622-7382',
      expected: false,
    },
    {
      input: '-1 (757) 622-7382',
      expected: false,
    },
    {
      input: '2 757 622-7382',
      expected: false,
    },
    {
      input: '10 (757) 622-7382',
      expected: false,
    },
    {
      input: '27576227382',
      expected: false,
    },
    {
      input: '(275)76227382',
      expected: false,
    },
    {
      input: '2(757)6227382',
      expected: false,
    },
    {
      input: '2(757)622-7382',
      expected: false,
    },
    {
      input: '555)-555-5555',
      expected: false,
    },
    {
      input: '(555-555-5555',
      expected: false,
    },
    {
      input: '(555)5(55?)-5555',
      expected: false,
    },
  ]

  TEST_CASES.forEach(element => {
    const { input, expected } = element

    test(`telephoneCheck(${input}) should return ${expected}`, () => {
      const result = telephoneCheck(input)

      expect(result).toEqual(expected)
    })
  })
})
