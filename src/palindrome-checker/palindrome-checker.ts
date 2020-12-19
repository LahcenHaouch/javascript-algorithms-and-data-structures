export function palindrome(str: string): boolean {
  const letters = [...str.toLowerCase()].filter(element => {
    const code = element.charCodeAt(0)
    return (code >= 97 && code <= 122) || (code >= 48 && code <= 57)
  })

  return letters.join('') === letters.reverse().join('')
}
