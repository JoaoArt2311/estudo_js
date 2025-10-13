for(let contador = 1; contador <= 10; contador++){
    console.log('Numero Atual: ', contador)
}

for(let Numero = 0; Numero <= 15; Numero++){
    if(Numero % 2 == 0){
        console.log('Número par encontrado', Numero)
    }
}

for(let Numero = 0; Numero <= 15; Numero++){
    if(Numero % 2 > 0){
        console.log('Número impar encontrado', Numero)
    }
}

const palavra = 'calopsita'

for(let numeracao = 0; numeracao < palavra.length; numeracao++){
    console.log(palavra[numeracao])
}