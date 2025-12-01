//Estrutura de Decisão

//Condição - atendida ou não
//caso seja atendida vai executar algo
// senão acontece outra coisa ou não

//if - else
//comparação texto (strings)
//comparação de números
// == 
// > >= < <=     
// boolean
// !=

const pagamento = 'Pix'

if(pagamento == "Pix"){
    console.log('Desconto de 10%')
}else if(pagamento == "Boleto"){ 
    console.log('Desconto de 5%')
}else{
    console.log ('Sem desconto')
}

if(pagamento != 'Pix' && pagamento != 'Boleto') {
    console.log('Nenhum desconto')
}

if(pagamento == 'Pix' || pagamento == 'Boleto'){
    console.log('O pagamento é boleto ou pix')
}

const maiorDeIdade = true
if(maiorDeIdade == true){
    console.log('É maior de idade , pode entrar')
}

//!pagamento - exclamação nega a expressão
if(!pagamento == "Pix"){
    console.log('Desconto de 10%')
}

//if ternario
const idade = 18

if (idade >= 18){
    console.log('Pode entrar no app')
}else{
    console.log('Não pode entrar no app')
}

idade >= 18 
    ? console.log('Pode entrar no app') 
    : console.log('Não pode entrar no app')

// switch case
const opcao = 1

switch (opcao){
    case 1 :
        console.log('Voce digitou opção 1')
        break
    case 2 :
        console.log('Voce digitou opção 2')
        break
    case 3 :
        console.log('Voce digitou opção 3')
        break        
    default:
        console.log('Voce não escolheu uma opção válida')    
}