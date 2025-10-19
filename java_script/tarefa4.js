//Função de saudação
function saudacao(nome){
    console.log('Olá, meu parceiro', nome)
}
saudacao('João Arthur')

//Função com paramentros
function aprensentarPessoa(nome, idade){
    console.log('Olá meu nome e', nome, 'e tenho', idade)
}

aprensentarPessoa('João Arthur', 18)

//Calculo IMC
function calcularIMC(peso, altura){
    return peso / (altura * altura)
}

const Calculo = calcularIMC(63, 1.63)

if(Calculo < 18.5){
    console.log('Seu IMC: ', Calculo, 'magreza leve')
} else if(Calculo <= 25){
    console.log('Seu IMC: ', Calculo.toFixed(2), 'saudavel')
}else if(Calculo <= 30){
    console.log('Seu IMC: ', Calculo.toFixed(2), 'sobre-peso')
}else{
    console.log('Seu IMC: ', Calculo.toFixed(2), 'procure um medico')
}
    
//Verificar Aprovação
function verificarAprovacao(nota){
    return nota
}

const verificadaNota = verificarAprovacao(7)

if(verificadaNota >= 7){
    console.log('Aprovado')
}else{
    console.log('Reprovado')
}

//Numero par ou impar
function ehPar(Numero){
    return Numero % 2
};

const resultadoPar = ehPar(7);

if(resultadoPar == 0){
    console.log('True')
}else{
    console.log('False')
}

//Função de Soma
function calculoSoma (numero1, numero2){
    return numero1 + numero2
}

const calculoResolvido = calculoSoma(5,3)

console.log('O resultado da soma:', calculoResolvido)

//Reutilizando Código
function calculoTroco (compra, pagamento){
    return compra - pagamento
}

const resolvidoPago = calculoTroco (25,15);

console.log('O seu troco: ', resolvidoPago, 'R$');

