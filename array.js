// Arrays
// lista de dados (string, numeros, booleanos, etc)

const nomes = ['Pedro', 'Maria', 'João', 'Ana', 'Carlos']

nomes.push('Mariana') // adiciona um novo nome no final do array
nomes.unshift('Lucas') // adiciona um novo nome no começo do array
nomes.pop() // remove o último nome do array
nomes.shift() // remove o primeiro nome do array


console.log(nomes) // imprime o array completo
console.log('Tamanho do array: ' + nomes.length) // imprime o tamanho do array

console.log('Nome do item 2: ' + nomes[1]) // imprime o nome na posição 2 (segundo nome)
console.log('Nome do item 1: ' + nomes[0]) // imprime o nome na posição 0 (primeiro nome)

nomes.push('Fernanda') // adiciona 'Fernanda' no final do array

console.log('Ultimo nome: ' + nomes[nomes.length - 1]) // imprime o último nome do array

