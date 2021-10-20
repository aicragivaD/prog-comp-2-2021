//funcao anonima e aquela q n tem nome
//funcao forEach
let vetor = [1, 2, 3, 4, 5]
vetor.forEach( (a) => {
    console.log(`Valor do elemento ${a}`)
})

let vetor2 = [10, 20, 30, 40, 50]
vetor2.forEach(  (elemento, posicao) => {
        console.log(`Valor do elemento ${elemento} e sua posição ${posicao}`)
})

let vetor3 = [10, 20, 30, 40, 50]
vetor3.forEach(  (elemento, posicao) => {
    if (posicao % 2 == 0) //mostra elementos na posicao par
        console.log(`Valor do elemento ${elemento} e sua posição ${posicao}`)
})

let filmes = [
    {
        nome: "Vingadores",
        ano: 2018,
        classificacao: "Aventura"

    },
    {
        nome: "Batman",
        ano: 2019,
        classificacao: "Suspense"
    },
    {
        nome: "X-Men",
        ano: 2020,
        classificacao: "Ficção"
    }
]
//percorrer os filmes
filmes.forEach((elemento) => {
    console.log(`Nome do filme: ${elemento.nome}, Ano: ${elemento.ano}, Classificação: ${elemento.classificacao}`)

})



//funçao map - pode altera o conteudo do vetor original
let vetor4 = [9, 8, 7, 6, 5]
vetor4 = vetor4.map ((elemento) => {
    return Math.pow(elemento, 2) //eleva o elemento ao quadrado
})
console.log(vetor4)



//funcao reduce
let vetor5 = [5, 9, 12, 15,, 18]
//vetor5 (5, 9) = 14
//vetor5 (14, 12) = 26
//vetor5 (26 ,15) = 41
//vetor5 (41 ,18) = 59
let soma = vetor5.reduce((total, elemento) => {
    return total + elemento
})



//funcao filter
let vetor6 = [6, 9, 3, 7, 10]
let pares = vetor6.filter((elemento) => {
    return elemento % 2 == 0
})
console.log(pares)
