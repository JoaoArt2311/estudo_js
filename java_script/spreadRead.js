let pessoa1 = {
    nome: 'João',
    idade: 18,
    profissao: 'Dev'
}

const pessoa2 = { ...pessoa1 }

pessoa2.idade = 30

console.log(pessoa1)
console.log(pessoa2)

pessoa1 = {
    ...pessoa2,
    profissao: 'Dev Senior',
    possuiCNG: true
}

console.log(pessoa1)

const { nome, ...resto } = pessoa1

console.log(nome)
console.log(resto)