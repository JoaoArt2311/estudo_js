let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const numerosPares = numeros.filter((numero)=>{
    //return numero % 2 === 0
//})

//const numerosImpares = numeros.filter((numero)=>{
    //return numero % 2 != 0
//})

//console.log('Todos os numeros', numeros)
//console.log('Numeros pares:', numerosPares)
//console.log('Numeros Impares:', numerosImpares)

const numerosDobrados = numeros.map((numeros) => {
    return numeros * 2
})

console.log('Numeros mapeados: ', numerosDobrados)