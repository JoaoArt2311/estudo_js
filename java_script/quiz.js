const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Bem-Vindo(a) ao Quiz de JavaScript');
console.log('Responda com as letras correta: a, b ou c\n');

let acertos = 0;

leitor.question('Questão 1) Qual palavra usamos para criar uma função\n a) define\n b) function\n c) create\n>',(resposta1)=>{
    if(resposta1 == 'b'){
        acertos++ 
        console.log('Correto')
    }
    else{
        console.log('Incorreto')
    }
    
    leitor.question('Questão 2) Qual dessas e uma estruturas de repetição\n a) loopar\n b) repeat\n c) for\n>',(resposta2)=>{
        if(resposta2 == 'c'){
            acertos++
            console.log('Correto')
        }else{
            console.log('Incorreto')
        }

        leitor.question('Questão 3) Qual valor é considerado falsy em JavaScript?\n a) 1\n b) 0\n c) "texto"\n>',(resposta3)=> {
            if(resposta3 == 'c'){
                acertos++
                console.log('Correto')
            }else{
                console.log('Incorreto')
            }

            if(acertos == 3){
                 console.log('Você acertou todas, está de parabens')
            } else if(acertos == 2){
                console.log('Você acertou 2, muito bom! Continue assim')
            }else if(acertos == 1){
                console.log('Você acertou 1, muito bem! Continuei melhorando')
            }else{
                console.log('Você não acertou nem uma, melhore!')
}
            leitor.close();
        });

    });
});
 
