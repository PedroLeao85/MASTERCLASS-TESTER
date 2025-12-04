//Funções
//bloco de código
//Precisa ser chamado para ser executado - ok 
//pode ou não receber parametros - ok
//pode ou não retornar dados - ok
//Ser sincrona ou assincrona
//Precisa esperar algo acontecer



// function somaInicial() {
//     const numero1 = 10
//     const numero2 = 20
//     console.log("Soma: " , numero1 + numero2)
// }

// function somaParametro(numero1 , numero2) {
//     console.log("Soma: " , numero1 + numero2)
// }


function soma(numero1 , numero2) {
    const somaFinal = numero1 + numero2
    return somaFinal
}

const total = soma(4,5)
console.log(total)

console.log("Soma: " , soma(50,10))
// console.log(somaFinal)  erro


console.log(soma(5,10));
console.log(soma(5,105));
console.log(soma(5,100));

//____________________________________

async function geraMediaAluno (notas){


    let somaNotas = 0

    notas.forEach((nota, indice) => {
        somaNotas = somaNotas + nota
        
    });

    // chamar uma api
    // esperar o retorno
    // ou salvar no banco
    
    const media = (somaNotas / notas.length).toFixed(2)
    return media

    // const mensagem = `A media do aluno ${nome} é ${media}. Com as notas: ${notas}`
    // return mensagem

    
}
const nome = 'Pedro'
const notas_aluno = [6,7,4]

console.log(`A média do aluno ${nome} é ${geraMediaAluno(notas_aluno)}. Com as notas: ${notas_aluno}`)


