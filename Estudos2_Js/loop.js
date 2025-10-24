//Contagem de Numeros 
const numero = 10
for (let i = 1; i <= numero; i++){
    console.log(i)
}
//Contagem Regresiva 
for (let i = 10; i >= 0; i--){
    console.log(i)
}

console.log('Lançar !')

//Listando Numeros pares
const numeroFinal = 10;

for (let i = 1; i <= numeroFinal; i++){
    if(i % 2 === 0){
        console.log(`Numeros Pares: ${i}`)
    }
}