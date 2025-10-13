const idade = 15
const maiorIdade = idade >= 18
const possuiCNH = false

const podeDirigir = maiorIdade && possuiCNH
console.log('Pode dirigir? ', podeDirigir)
const podeViajarSozinha = maiorIdade || possuiCNH
console.log('Pode viajar sozinho? ', podeViajarSozinha)

const precisaDeAcompanhante = !maiorIdade

console.log('Precisa de acompanhante? ', precisaDeAcompanhante)