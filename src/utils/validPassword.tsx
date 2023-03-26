export const validPassword = (password: string) => {
  const numeros = /([0-9])/
  const alfabetoMinuscula = /([a-z])/
  const alfabetoMaiuscula = /([A-Z])/

  const chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/
  if (password.match(numeros) && password.match(alfabetoMinuscula) && password.match(alfabetoMaiuscula) && password.match(chEspeciais) && password.length >= 10) {
    return true
  }
  return false
}
