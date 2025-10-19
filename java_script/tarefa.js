//Verificação de Maioridade
let idadeJoão = 15

if(idadeJoão >= 18){
    console.log('Você e maior de idade')
} 

else{
    console.log('Você e menor de idade')
}

//Situação do Aluno
let nota1 = 5.5
let nota2 = 8.5

let media = (nota1 + nota2) / 2

if(media >= 7){
    console.log("Aprovado")
}
else{
    console.log('Reprovado')
}

//Simulação de troco
let valorCompra = 35.50
let valorPago = 50

let troco = valorPago - valorCompra

console.log('Valor do troco: ', troco)

//Validação de Senha
let senha = 23112006
let confirmarSenha = 23112006

if(senha === confirmarSenha){
    console.log('Senha Correta')
}
else{
    console.log('Senha Incorreta')
}

//Controle de Falta 
let totalAulas = 80
let faltas = 25

let porcentagem = (faltas / totalAulas) * 100

if(porcentagem >= 20){
    console.log('Aprovado', porcentagem)
}
else{
    console.log('Reprovado por Faltas', porcentagem)
}

//Verificação de Login
let temLogin =  'João Arthur'
let temSenha = 23112006

let confirmarLogin = 'João Arthur'
let confirmarSenha2 = 23112006

if(temLogin == confirmarLogin){
    console.log('Login Correto')
}
else{
    console.log('Login Incorreto')
}

if(temSenha == confirmarSenha2){
    console.log('Senha Correta')
}
else{
    console.log('Senha Incorreta')
}

//Valor Negado
let valor = true

console.log(!valor)

//Condições Compostas
let numero1 = 12
let numero2 = 15

let resultado1 = numero1 % 2
let resultado2 = numero2 % 2

if(resultado1 == 0){
    console.log('Par')
}
else{
    console.log('Impar')
}

if(resultado2 > 0){
    console.log('Impar')
}
else{
    console.log('Par')
}

//Claculadora de Porcentagem
let num1 = 120
let num2 = 0.15

let resultadoPorcentagem = num1 * num2

console.log('15% de 120 e igual a ', resultadoPorcentagem)