
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
let exe10 = () => {

    let mat = []
    for(let i=0;i<5;i++){
        mat[i] = []
        for(let j=0;j<5;j++){
            mat[i][j] = Number(prompt(`Informe um número da linha ${i+1} e coluna ${j+1}`))
        }
    }
    // soma os elementos da diagonal principal
    let diagonalPrincipal = 0
    for(let i=0;i<5;i++){
        diagonalPrincipal = diagonalPrincipal + mat[i][i]
    }
    alert(diagonalPrincipal)
    // soma dos elementos da linha 4
    let linha4 = 0
    for(let j=0;j<5;j++){
        linha4 = linha4 + mat[3][j]
    }
    alert(linha4)
    // soma dos elementos da linha 4
    let coluna2 = 0
    for(let i=0;i<5;i++){
        coluna2 = coluna2 + mat[i][1]
    }
    alert(coluna2)
    // soma os elementos da diagonal secundária
    let diagonalSecundaria = 0
    for(let i=0;i<5;i++){
        diagonalSecundaria = diagonalSecundaria + mat[i][4-i]
    }
    alert(diagonalSecundaria)
}