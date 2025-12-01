//Estrutura de repetição
//Bloco de código é executado várias vezes - loop
//até atender uma condição

//Por array (tamanho do array)
//A condição é o tamanho do array
//Executa o bloco de código para cada elemento da lista

const cidades = ['Rio de Janeiro', 'Belo Horizonte', 'São Paulo', 'Porto Alegre', 'Florianópolis']

cidades.forEach((cidade, indice) => {
    console.log('Cidade: ' + cidade + ' na posição: ' + indice) 
})

console.log('---------------------------------------------------------')

// Por for normal
// 3 informações
// controlador do índice

for(let i = 0 ; i < cidades.length ; i++){
    console.log('Cidade: ' + cidades [i] + ' na posição: ' + i)
}
