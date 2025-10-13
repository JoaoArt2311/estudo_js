const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual e o seu nome?', (nome)=>{
    console.log('Olá, ', nome)
    console.log('Boas Vindas ao nosso sistema')

    leitor.close()
})