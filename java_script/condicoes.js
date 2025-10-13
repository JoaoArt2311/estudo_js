const nome = ''

if (nome){
    console.log('Olá ',nome)
}
else{
    console.log('Ainda não sei seu nome')
}

const idade = null

if(idade != null && idade >= 18){
    console.log('maior de idade')
} else if (idade != null && idade >= 0 && idade < 18){
    console.log('menor de idade')
}