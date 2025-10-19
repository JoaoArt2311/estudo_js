//Listas de Nomes 
const nomes = [
    'João',
    'Jessica',
    'Julia',
    'Marula'
]

console.log('Listas de nomes: ',nomes)

//Adicionar e Remover intens
const frutas = [
    'Melancia',
    'Uva',
    'Laranja'
]

console.log('Todas as Frutas: ', frutas)

frutas.push('Tangerina')

console.log('Total de frutas agora: ', frutas)

frutas.splice(0,1)

console.log('Total de frutas agora: ',frutas)

//Contar itens em arrays
const cidades = [
    'Anapolis',
    'Trindade',
    'Aparecida',
    'Cascavel'
]

console.log('A quantidade de cidades: ', cidades.length)

//Somar todos os numeros 
const Somar = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
]

const numerosDobrados = Somar.map((Somar) => {
    return Somar + 2
})

console.log('Numeros Somados: ', numerosDobrados)

//Média de Notas
const Notas = [
    7,
    5.5,
    8
]
const media = Notas.map((Notas) =>{
    return (Notas + Notas) / 2
})

if (media >= 7){
    console.log('Aprovado', media)
} else{
    console.log('Reprovado', media)
}

//Mensagens Personalizada
const Nomes = [
    'Eduarda',
    'Vinicius',
    'Carolina'
]

Nomes.forEach(function(Usuarios){
    console.log('Olá,', Usuarios)
})

//Descontos com .map
const promocao = [
    7.99,
    25,
    151,
    239
]

const promoAplicada = promocao.map((promocao) => {
    const valorComdesconto = promocao / 10
    return valorComdesconto.toFixed(2)
})

console.log('Valor com desconto: ', promoAplicada)

//Filtrar valores altos
const idade = [
    18,
    15,
    22,
    38
]

const maioresDeIdade = idade.filter((idade) => {
    return idade >= 18
})

console.log(maioresDeIdade)

//Carrinhos de compra 
const Carrinhos = [
    23,
    55,
    23.99,
    12,35
]

const somaTotal = Carrinhos.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(`A soma total é: `, somaTotal);

const desconto = (somaTotal * 20) / 100

console.log('Valor do desconto: ', desconto.toFixed(2))

const descontoAbatido = somaTotal - desconto

console.log('Valor com Desconto: ', descontoAbatido.toFixed(2))

