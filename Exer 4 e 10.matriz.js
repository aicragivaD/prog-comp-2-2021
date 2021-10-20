
//EXERCICIO 4

//cria a função
let sistemaAcademico = () => {

    //declaração de matriz
    //15 x 5

    //vetor alunos
    let alunos = []
    let  provas = []
    for (let i=0; i<3; i++){ //para cada aluno
        //insere o nome do aluno no vetor
        let objeto = {
            nome: (prompt(`Informe nome do aluno ${i+1}`)),
            media: 0
        }
        //insere o objeto no vetor
        alunos.push(objeto)
        provas [i] = [] //aloca espaço na memoria para matriz       
        alert(`Informe 5 notas do aluno ${alunos[i]}`)
        for (let j=0; j<5; j++){
            //adiciona a nota na matriz
            provas[i][j] = Number(prompt(`Nota ${j+1}`))
        }
    }

    //calcula média
    let turma = 0
    for (let i=0; i<3; i++){
        for (let j=0; i<5; j++){
            alunos[i].media = alunos[i].media + provas[i][j]
        }
        alunos[i].media = alunos[i].media / 5 //calculo da media
        turma = turma + alunos[i].media
        if (alunos[i].media > 6){
            alert(`O aluno ${alunos[i].nome} foi APROVADO! `)
        }
        else if (alunos[i].media >= 3){
            alert(`O aluno ${alunos[i].nome} está de EXAME! `)
        }
        else {
            alert(`O aluno ${alunos[i].nome} foi REPROVADO! `)
        }
    }
    turma = turma / 3
    alert(`A média da turma é ${turma}`)
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//EXERCICIO 10

//cria a função
let matriz = () => {

    //declaração de matriz
    //5 x 5

    let mat= []
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