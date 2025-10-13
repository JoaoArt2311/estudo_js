const frutas = [
    'Uva',
    'Banana',
    'Kiwi',
    'Maça',
    'Morango'
]

console.log(frutas)

//console.log('Primeira fruta: ',frutas[0])

//console.log('Total de frutas: ', frutas.length)

//frutas.push('Melancia')

//console.log('Novo Total de frutas: ', frutas.length)

//console.log('Nova ultima fruta:', frutas[frutas.length -1])

//frutas.splice(2,1)

//console.log(frutas)

for(let i = 0; i < frutas.length; i++){
    console.log('Indice: ',i)
    console.log(frutas[i])
}

console.log('Utilizando o forEach:')

frutas.forEach((valor, indice) =>{
    console.log('Indice: ', indice, valor)
})
