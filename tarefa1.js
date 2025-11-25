// Exercicio 1

// Dado a lista de cidades:
// const cidades = ['Rio de Janeiro', 'Belo Horizonte', 'São Paulo', 'Porto Alegre', 'Florianópolis']

// Imprima a primeira cidade
// Imprima a segunda cidade
// Adicione uma cidade no inicio
// Imprima a primeira cidade
// Adicione uma cidade no final
// Imprima a ultima cidade
// Obs: sempre informe o que está imprimindo

const cidades = ['Rio de Janeiro', 'Belo Horizonte', 'São Paulo', 'Porto Alegre', 'Florianópolis']

console.log('Primeira cidade: ' + cidades[0])
console.log('Segunda cidade: ' + cidades[1])
cidades.unshift('Curitiba') // adiciona 'Curitiba' no começo do array
console.log(cidades)
console.log('Primeira cidade:' + cidades[0])
cidades.push('Salvador') // adiciona 'Salvador' no final do array
console.log('Ultima cidade: ' + cidades[cidades.length - 1])


const nomes = ['Pedro' , 'Mariana', 'Lucas', 'Beatriz', 'Rafael']

nomes.forEach(item => {
    console.log(item)
})

nomes.forEach((nome, indice) => {
    console.log(`${indice + 1}º nome: ${nome}`)
}) 