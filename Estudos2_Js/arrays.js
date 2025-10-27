
//Acessando e Modificando 
const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];
console.log('Lista de compras: ', listaDeCompras)

console.log('Segundo lista da lista: ', listaDeCompras[1])

listaDeCompras[3] = 'Frutas'
console.log('Lista após ser modificada: ', listaDeCompras)


//Percorrendo listas de for
const despesas = [120, 80, 45.5, 200, 60];

let total = 0;

for(let i = 0; i < despesas.length; i++){
    total += despesas[i]
}

console.log(`Total das Despessas: ${total}`)

//Exibindo nomes com for...of
const estudantes = ['Carla', 'João', 'Marina', 'Lucas', 'Beatriz'];

for (const nome of estudantes){
    console.log(`Estudante: ${nome}`)
}

//Exibindo mensagem com forEach
const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado'];

mensagens.forEach((resultado) => {
    console.log(`Notificação: ${resultado}`)
})

//Adicionando e removendo itens
const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];

tarefas.push('Pagar boleto')
console.log(`Lista após adicionar: ${tarefas}`)

tarefas.pop()
console.log(`Lista após remover a ultima tarefa: ${tarefas}`)

//Clonando Array
const pedidos = ['camiseta', 'calça', 'tênis'];

const clone = [...pedidos]
clone.push("Boné");

console.log(`Original: ${pedidos}`)
console.log(`Clone: ${clone}`)

//Buscando itens em uma lista
const livros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema'];
const livroProcurado = 'Dançarina';

if(livros.includes(livroProcurado)){
    console.log(`O livro ${livroProcurado} está disponivel`)
} else {
    console.log(`O livro ${livroProcurado} não foi encontrado`)
}

//Transformando dados com map 
const precos = [100, 80, 50, 120];

const desconto = precos.map((numeros) => {
    return numeros - (numeros * 0.10)
})

console.log(`Preços com desconto: ${desconto}`)

//FIltrando Valores 
const participantes = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 19 },
  { nome: 'Daniel', idade: 15 },
  { nome: 'Eduarda', idade: 25 }
];

const acessosLiberados = participantes.filter(p => p.idade >= 18)

acessosLiberados.forEach(p =>{
    console.log(`Acesso Liberado: ${p.nome}`)
})

const listadosAprovados = acessosLiberados.map(p => p.nome)
console.log(`Aprovados: ${listadosAprovados.join(', ')}`);

//Paniel de controle
const produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
];

let relatorio = ''; 
let produtosMaisVendidos = ''; 
 
let totalPorProduto = ''; 
 
const maisLucrativo = { nome: '', totalVendas: 0 }; 
 
produtos.forEach(prod => { 
 
  const totalVendidoProduto = prod.preco * prod.quantidadeVendida; 
 
  relatorio += `Produto: ${prod.nome} | Preço: ${prod.preco} | Quantidade vendida: ${prod.quantidadeVendida}\n`; 
 
  if (prod.quantidadeVendida > 100) { 
 
    produtosMaisVendidos += `${prod.nome}\n` 
 
  } 
 
  totalPorProduto += `${prod.nome}: R$ ${totalVendidoProduto}\n`; 
 
  if (totalVendidoProduto > maisLucrativo.totalVendas) { 
 
    maisLucrativo.nome = prod.nome; 
 
    maisLucrativo.totalVendas = totalVendidoProduto; 
 
  }  
 
}) 
 
console.log('Relatório de produtos vendidos:'); 
console.log(relatorio); 
console.log('Produtos com alto volume de vendas (> 100 unidades):'); 
console.log(produtosMaisVendidos); 
console.log('Total de vendas por produto:'); 
console.log(totalPorProduto); 
console.log('Produto mais lucrativo:'); 
console.log(`${maisLucrativo.nome} com R$ ${maisLucrativo.totalVendas} em vendas.`);