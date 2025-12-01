//Exercicio 1

let valorDeCOmpra = 205
let metodoPagamento = "Cartão"
let frete

if(valorDeCOmpra > 200 && metodoPagamento == 'Dinheiro'){
    console.log('Valor da compra = ' + valorDeCOmpra + ' // ' + 'Metodo de pagamento = ' + metodoPagamento)
    console.log('Frete grátis')
}else if (valorDeCOmpra > 200 && metodoPagamento == 'Cartão'){
    console.log('Valor da compra = ' + valorDeCOmpra + ' // ' + 'Metodo de pagamento = ' + metodoPagamento)
    console.log('Frete 20 reais')
}else if (valorDeCOmpra <= 200 && metodoPagamento == 'Dinheiro'){
    console.log('Valor da compra = ' + valorDeCOmpra + ' // ' + 'Metodo de pagamento = ' + metodoPagamento)
    console.log('Frete 30 reais')
}else if (valorDeCOmpra <= 200 && metodoPagamento == 'Cartão'){
    console.log('Valor da compra = ' + valorDeCOmpra + ' // ' + 'Metodo de pagamento = ' + metodoPagamento)
    console.log('Frete 50 reais')
}


console.log('-----------------------------------------------------------------------------------------')

//Exercicio2

const nomes = ['Pedro', 'Maria', 'Fernando', 'Joao', 'Francisco']

nomes.forEach((nome, indice) => {
    console.log(`Execução : ${indice + 1} nome: ${nome} ------------- 
        `
    );

})

console.log('--------------------------------------------------------------------')

for(let i = 0 ; i < nomes.length ; i++){
    console.log('Execução : ' + (i + 1) + '\n' + 'Nome: '+ nomes[i] + '\n' + '------------')
}

console.log('--------------------------------------------------------------------')

//Exercicio 3

const cidades = ['Florianopolis' , 'São Paulo', 'Recife', 'Salvador', 'Rio de Janeiro', 'Porto Alegre', 'Teresina']

cidades.forEach((cidade,indice) => {
    if(cidade == 'Salvador'){
        console.log('A cidade de Salvador esta na posição: ' + indice)
    }

})

console.log('--------------------------------------------------------------------')
//Exercicio 4

function somar(a ,b){
    return a + b;
}

console.log ('Resultado da soma é : ' + somar(3,2));

const resultado = somar(3,2)
console.log('Resultado da soma é : ' + resultado)


