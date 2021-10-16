
//EXERCICIO 4

//cria a função
let alunos = () => {

    //declaração de matriz
    //15 x 5

    //vetor alunos
    let alunos = []
    let provas = []
    let opcao 
    do{
        opcao = prompt(`1. Cadastrar nome \n2.Cadastrar notas da prova`)
        switch(opcao){
            case 1:  CadastrarNome(alunos)
                break
            case 2: notasdaProva(provas)
                break
            case 3: alert(`Programa encerrado!`)
                break
            default: alert(`Opcão inválida!`)
        }
    }
    while (opcao != 3)


    let CadastrarNome = (alunos) => {
        for (let i=0; i<15; i++){ //para cada aluno
           prompt(`Informe o nome do aluno: `)
        }
        alert(`Aluno ${alunos}`)
    }


    let notasdaProva = (provas) => {
        soma = 0
        for (let j=0; j<5; j++){ //para cada aluno
           Number(prompt(`Informe a nota do aluno: `))
        }
        soma = soma + provas / 15
        if (provas < soma){
            alert(`Reprovado!`)
        }
        else{
            alert(`Aprovado!`)
        }
        alert(`Nota do ${alunos} é ${provas}`)
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//EXERCICIO 10

//cria a função
let matriz = () => {

    //declaração de matriz
    //5 x 5

    let matriz = []
    matriz[0] = [] //vetor 1
    matriz[1] = [] //vetor 2
    matriz[2] = [] //vetor 3
    matriz[3] = [] //vetor 4
    matriz[4] = [] //vetor 5

    //entrada de dados

    //somatória da 4 linha
    for (let i=0; i<5; i++){
        alert(`Informe um número: ${i+1}`)
        for (let j=0; j<5; j++){
            alert(`Informe um número: ${j+1}`)
        }   
    }
    if (i = [3]){
        soma = 0
        soma = i + i
    }
    alert(`A somatória dos números da 4 linha é ${soma}`)


    //somatória da 3 coluna
    for (let i=0; i<5; i++){
        for (let j=0; j<5; j++){
            if (j = [2]){
                soma1 = 0
                soma1 = j + j
            }
        }
    }
    alert(`A somatória dos números da 3 coluna é ${soma1}`)


    //somatória da diagonal principal
    for (let i=0; i<5; i++){
        for (let j=0; j<5; j++){
            if (i = j){
                soma2 = 0
                soma2 = j + i
            }
        }
    }
    alert(`A somatória da diagonal principal é ${soma2}`)


    //somatória da diagonal secundaria
    for (let i=0; i<5; i++){
        for (let j=0; j<5; j++){
            if (j = i){
                soma3 = 0
                soma3 = j + i
            }
        }
    }
    alert(`A somatória da diagonal secundária é ${soma3}`)


    //somatória de toda a matriz
    for (let i=0; i<5; i++){
        for (let j=0; j<5; j++){
            if (i = j){
                soma4 = 0
                soma4 = j + i
            }
        }
    }
    alert(`A somatória de toda a matriz é ${soma4}`)
}