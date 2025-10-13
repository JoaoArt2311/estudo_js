const pessoa = {
    nome:'Ana',
    idade: 18,
    temCNH: true
}
//console.log(pessoa)
pessoa.sobreNome = 'Paula'

console.log('Nome: ', pessoa.nome)
console.log('Sobrenome: ',pessoa.sobreNome)

const livro = {
    titulo: 'O Hobbit',
    autor: 'J.R.R Tolkien',
    paginas: 310
}

livro.publicado = true
livro.idiomas = [
    'Ingles', 'Portugues', 'Espanhol'
]

livro.idiomas.push('Mandarim')

console.log('Livro anntes: ', livro)

delete livro.paginas

console.log('Livro agora: ', livro)

console.log('Autor: ', livro['autor'])