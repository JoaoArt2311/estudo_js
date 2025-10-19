//Varificação de idade
const idade = 18

if(idade >= 18){
    console.log('Pode comprar bebidas alcoólicas')
}
else{
    console.log('Venda proibida para menores de 18 anos')
}

//Saudação de Acordo com a hora 
const horaAtual = 3

switch(horaAtual){
    case 3:
    case 4:
    case 5:
    case 6:
    case 7: 
    case 8:
    case 9: 
    case 10:
    case 11:
    case 12:
        console.log('Bom dia')
        break
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18: 
        console.log('Boa Tarde')
        break
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 1:
    case 2:
        console.log("Boa Noite")

}

//Verificação de numero positivo ou negativo
const numero = 0

if(numero > 0){
    console.log('Número Positivo')
} else if(numero < 0){
    console.log('Número Negativo')
}
else if(numero == 0){
    console.log('Número 0')
}

//Conversão de notas
const num = 5

if(num >= 9){
    console.log('A')
} else if(num >= 8){
    console.log('B')
} else if (num >= 6){
    console.log('C')
} else if(num >= 4){
    console.log('D')
} 
else{
    console.log('E')
}

//Numero par ou impar
const numParouImp = 3 % 2

if(numParouImp == 0){
    console.log('Numero e Par')
}
else{
    console.log('Numero e Impar')
}

//Menu com switch-case
const numeracao = 1

switch(numeracao){
    case 1:
        console.log('Cadastrar')
        break
    case 2: 
        console.log('Listar')
        break
    case 3: 
        console.log('Sair')
        break 
}

//Validação de campo obrigatorio
let email = 'joaoarthurmendesnunes@gmail.com'

if(email){
    console.log('Email',email,'Valido')
}
else{
    console.log('Preencha o campo do e-mail')
}

//Validação de senha segura
let senha = '23654';

if( senha.length < 6){
    console.log('Senha muito curta')
}
else{
    console.log('Senha Válida')
}

//Compra com saldo
