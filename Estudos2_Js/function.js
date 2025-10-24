//Gerando Mensagens Personalizadas
function saudacao (nome){
    console.log(`Ola, seja Bem-Vindo ${nome}`)
}
saudacao ('João')

//Calculando Desconto
function calcularDesconto (preçoProduto , desconto){
    return preçoProduto - (preçoProduto * (desconto / 100))

}

const calculado = calcularDesconto (1000 , 15)

console.log(`O valor com desconto: ${calculado}`)

//Calculando Media de Notas
function calcularMedia  (num1, num2){
    return (num1 + num2) / 2
}

const mediaCalculada = calcularMedia (5.5,8)

console.log(`Resultado da Media: ${mediaCalculada}`)

//Verificando se um NUmero e par ou Impar 
function pariedade (par) {
    if( par % 2 === 0){
        console.log(`O Numero e par`)
    } else {
        console.log(`E impar`)
    }
}

const ePAr = pariedade(5)

//Calculo de frete por distancia 
function ifood (Km){
    if(Km <= 5){
       return 5;
    } else if( Km <= 20){
        return Km * 0.5;
    } else {
        return 20;
    }
}

console.log(ifood(32))

//Mensagem pós-processamento
function processarPedido(nome, tipoCliente, callback) {
    console.log(`Processando pedido de ${nome}...`);
    callback(nome, tipoCliente);
}
 
function mensagemPersonalizada(nome, tipo) {
    if (tipo === "vip") {
        console.log(`Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`);
    } else if (tipo === "novo") {
        console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`);
    } else {
        console.log(`Obrigado pela sua compra, ${nome}!`);
    }
}
 
processarPedido("Lucas", "vip", mensagemPersonalizada);

//Avaliando a pontuação 
function avaliarDesempenho(nota, nome){
    if(nota >= 70){
        return console.log(`${nome} foi aprovado`)
    } else if( nota >= 69){
        return console.log(`${nome} você precisa de reforço`)
    } else if (nota < 59){
        return console.log('Reprovado')
    }
}

const resultadoFinal = avaliarDesempenho(17, "João")

//Classificador de consumo eletrico

function calcularConsumo(potencia, horasPorDia) {
    return (potencia * horasPorDia * 30) / 1000;
}

function classificarConsumo(consumo) {
    if (consumo < 50) {
        return "Baixo consumo";
    } else if (consumo < 200) {
        return "Consumo moderado";
    } else {
        return "Alto consumo";
    }
}

function exibirResumo(nomeAparelho, consumo, classificacao) {
    console.log(`${nomeAparelho} tem consumo de ${consumo.toFixed(1)} kWh/mês e é classificada como ${classificacao}.`);
}

const nomeAparelho = "Geladeira";
const consumo = calcularConsumo(150, 4);
const classificacao = classificarConsumo(consumo);
exibirResumo(nomeAparelho, consumo, classificacao);

//Sistema de sorteio com avaliação de participantes 
const sortearParticipante = (lista) => {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
};
 
const avaliarPontuacao = (pontuacao) => {
    if (pontuacao > 80) {
        return "Parabéns, você foi premiado!";
    } else if (pontuacao >= 50) {
        return "Você quase conseguiu! Fique de olho nos próximos sorteios.";
    } else {
        return "Infelizmente, não foi dessa vez.";
    }
};
 
const exibirResultado = (participante) => {
    console.log("Sorteando...");
    setTimeout(() => {
        console.log(`Participante sorteado: ${participante.nome}`);
        console.log(`Pontuação: ${participante.pontuacao}`);
        console.log(avaliarPontuacao(participante.pontuacao));
    }, 2000);
};
 
function realizarSorteio(lista) {
    const sorteado = sortearParticipante(lista);
    exibirResultado(sorteado);
}
 
const participantes = [
    { nome: "Laura", pontuacao: 92 },
    { nome: "Pedro", pontuacao: 67 },
    { nome: "Clara", pontuacao: 44 }
];
 
realizarSorteio(participantes);

//Contagem Regressiva
function contagemRegressiva(numero) {
  if (numero > 0) {
    console.log(numero);
    contagemRegressiva(numero - 1);
  } else {
    console.log("Lançamento!");
  }
}
 
contagemRegressiva(5);