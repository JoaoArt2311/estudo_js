const agora = new Date()

console.log(agora)

console.log('Ano: ', agora.getFullYear())
console.log('Mês: ', agora.getMonth())
console.log('Dia do Mês: ', agora.getDay())
console.log('Hora: ', agora.getHours())
console.log('Minutos: ', agora.getMinutes())

const nascimento = new Date('2006-11-23T09:00:00.000Z')

console.log(nascimento)

console.log('Data do Formato (BR): ', nascimento.toLocaleDateString('pt-BR'))
console.log('Data do Formato (USA): ', nascimento.toLocaleDateString('en-US'))