//Criando um Objeto 
const produto = {
    nome: 'Caneta',
    preco: 2.5,
    quantidade: 100
}

console.log(`Produto: ${produto.nome}, preço: ${produto.preco}, quantidade: ${produto.quantidade}`);

//Acessando dados com ponto e colchetes
const configuracoes = {
    tema: 'Azul',
    notificacoes: false,
    idioma: ['pt-br']
}

console.log(`Tema: ${configuracoes.tema}`);
        //Forma mais facil que poderia ter usado 
console.log(`Idioma: ${configuracoes['idioma']}`)

function exibeIdioma (idioma){
    for(const lingua of idioma){
        console.log(`${lingua}`)
    }
}
exibeIdioma(configuracoes.idioma)

//Lidando com Arrays 
const receita = {
    nome: 'Arroz Bife',
    ingredientes: ['Arroz', 'Feijão', 'Bife', 'Batata-Frita'],
    tempoPreparo: 50
}

console.log(`Ingrediente Secreto: ${receita.ingredientes[2]}`)

//Removendo uma propieade
const carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2022,
  modeloAntigo: 'Corolla XEi'
};

delete carro.modeloAntigo;

console.log(carro)

//Iterando um array de objeto
const dispositivo = [
    {nome: 'Impressora', estado: true},
    {nome: 'Scaner', estado: false},
    {nome: 'Projetor', estado: true}
]

dispositivo.forEach(item =>{
    item.estado = item.estado ? "ativo" : "inativo"
})

for(let i = 0; i < dispositivo.length; i++){
    console.log(`Dispositivo: ${dispositivo[i].nome} | Status: ${dispositivo[i].estado}`)
}

//Criando metodos dentro de um objeto
const maquina = {
  nome: 'Esteira Transportadora',
  funcionando: true,
};

function exibirStatus (Status){
    if(Status.funcionando === true){
        console.log(`A maquina ${maquina.nome} está em funcionamento`)
    } else {
        console.log('A maquina está desligada')
    }
}

exibirStatus(maquina);

//Montando um Objeto a partir de pares 
function montarObjeto(arrPares) {
    const resultado = {};
 
    for (const [chave, valor] of arrPares) {
        resultado[chave] = valor;
    }
 
    return resultado;
}
 
const dados = [
    ['nome', 'João'],
    ['idade', 30],
    ['cidade', 'Curitiba']
];
 
console.log(montarObjeto(dados));

//Criando um Sistema de Inspenção
const relatorio = {
  temperatura: 75,
  vibracao: 40,
  pressao: 55,
  nivelRuido: 30
};

const categorias = Object.keys(relatorio);
const valores = Object.values(relatorio);
const entradas = Object.entries(relatorio);

console.log("Categorias avaliadas:", categorias);
console.log("Valores registrados:", valores);

console.log("\nDetalhamento:");
for (let [chave, valor] of entradas) {
  const status = valor > 50 ? "alerta" : "ok";
  console.log(`${chave}: ${valor} (${status})`);
}

//Opinião do Instrutor
const manutencao = {
  jan: 2,
  fev: 0,
  mar: 5,
  abr: 4,
  mai: 0,
  jun: 7
};

let totalDias = 0;
let mesesComParada = 0;

for (let mes in manutencao) {
  const dias = manutencao[mes];
  totalDias += dias;

  if (dias > 0) {
    mesesComParada++;
  }
}

console.log(`Total de dias parados: ${totalDias}`);
console.log(`Meses com manutenção registrada: ${mesesComParada}`);

if (totalDias > 20) {
  console.log("Status: Atenção! Acima do limite anual.");
} else {
  console.log("Status: Dentro do limite anual");
}

//Analisando Desempenho
const curso = {
  titulo: "JavaScript Intermediário",
  estudantes: [
    { nome: "João", progresso: 85 },
    { nome: "Ana", progresso: 40 },
    { nome: "Juliano", progresso: 72 },
    { nome: "Patrícia", progresso: 60 }
  ],

  gerarRelatorio: function () {
    let totalProgresso = 0;

    for (let estudante of this.estudantes) {
      const situacao = estudante.progresso >= 70 ? "Aprovado" : "Em andamento";
      console.log(`Estudante: ${estudante.nome} | Progresso: ${estudante.progresso}% | Situação: ${situacao}`);
      totalProgresso += estudante.progresso;
    }

    const media = (totalProgresso / this.estudantes.length).toFixed(2);

    console.log(`\nTotal de estudantes: ${this.estudantes.length}`);
    console.log(`Média geral da turma: ${media}%`);
  }
};

curso.gerarRelatorio();