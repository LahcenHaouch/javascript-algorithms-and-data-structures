export function telephoneCheck(str: string): boolean {
  const reg = new RegExp(
    /^(1( )?)?(-\d{3}| \d{3}|\d{3}|\(\d{3}\))( |-)?\d{3}( |-)?\d{4}$/g
  )
  return reg.test(str)
}
