// VARIÁVEIS

// tipos de variavel
// let - pode ter o valor alterado
// var - pode ter o valor alterado
// const - valor constante, não pode ser alterado

// tipo - nome - dado (que pode existir ou não)


//tipos de dado da variavel
// null
// undefined
// vazia
// valor

//String (texto - 'Pedro', '123456' sempre entre aspas)
//number (número - 123456, 15)
//boolean (lógico - true ou false)
//array (lista de dados - [1, 2, 3, 4, 5])

let nome = 'Pedro'
nome = nome + ' Henrique' // sobreescreve o valor da variavel
console.log('Nome: ' + nome)


let idade = 40
console.log('Idade: ' + idade + 1) // concatena o valor 1 , string number
console.log('Idade: ' , idade + 1) // soma o valor 1

let numero1 = 10
let numero2 = 20

console.log('Soma: ' , numero1 + numero2)
console.log('Subtração: ' , numero1 - numero2)
console.log('Multiplicação: ' , numero1 * numero2)
console.log('Divisão: ' , numero1 / numero2)

console.log(`Meu nome é ${nome} e minha idade é ${idade} anos`) // não funciona com aspas simples, tem que ser a crase

const maiorDeIdade = true // em const precisa ser atribuido um valor na criação da variavel
console.log('Maior de Idade: ' + maiorDeIdade)









