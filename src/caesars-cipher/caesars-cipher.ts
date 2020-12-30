const RANGE = [65, 90]
const ROTATION = 13

export function rot13(str: string): string {
  const [min, max] = RANGE
  const words = str.split(' ')

  return words
    .map(word => {
      const letters = [...word].map(letter => letter.charCodeAt(0))

      return letters
        .map(code => {
          if (code >= min && code <= max) {
            const diff = code - ROTATION
            if (diff < min) {
              return String.fromCharCode(max - (min - diff) + 1)
            }
            return String.fromCharCode(diff)
          }
          return String.fromCharCode(code)
        })
        .join('')
    })
    .join(' ')
}
