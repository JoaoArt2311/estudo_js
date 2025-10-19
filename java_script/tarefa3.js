//contar numeros pares e numeros impares nós temos entre 0 e 100

for (let numerosPares = 0; numerosPares <= 100; numerosPares++){
    if(numerosPares % 2 == 0){
        console.log('Numero Pares:',numerosPares)
    }
    else{
        console.log('Numeros Impares:',numerosPares)
    }

}

//Contador de 1 a 10
for(let Contador = 1; Contador <= 10; Contador++){
    console.log('Numero Atual:',Contador)
}

//Soma de 1 a 100
let soma = 0
for(let i = 1; i <= 100; i++){
    soma += i;
}
console.log('Soma de 1 a 100: ',soma);

//Tabuada Personalizada
let numeroTabuada = 2

for(let i = 1; i <= 10; i++){
    console.log(numeroTabuada, "x", i, "=", (numeroTabuada * i))
}

//Contagem Regressiva
let Contagem = 10

while(Contagem >= 0){
    console.log(Contagem)
    Contagem--
}
console.log('Contagem Finalizada')

//Receber números ate digitar 0
let entradas = [5, 10, 3, 0]

let contador = 0

let index = 0

do{
    if(entradas[index] !== 0){
        contador++
    }
    index++
} while(entradas [index - 1] !== 0)
    console.log('Total de números digitados: ', contador)

