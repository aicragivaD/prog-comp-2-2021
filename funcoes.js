function principal(){

    let opcao
    let idade //escopo local, funciona no local onde foi definido
    let peso, altura
    let vetor = [] //declaração de vetor
    do{
        opcao = Number(prompt(`Digite: \n1. F1 \n2. F2 \n3. F3 \n4. F4 \n5. Sair`))
        switch(opcao){
            case 1: idade = Number(prompt(`Informe a sua idade`))
                   idade = f1(idade)
                   break
            case 2: 
                    peso = Number(prompt(`Informe seu peso`))
                    f2(idade, peso)
                    break
            case 3: idade = Number(prompt(`Informe a sua idade`))
                    peso = Number(prompt(`Informe seu peso`))
                    altura = Number(prompt(`Informe sua altura`))
                    f3(idade, peso, altura)
                    break
            case 4: vetor.push(1)
                    vetor.push(2)
                    vetor.push(3)
                    f4(vetor) //passando um vetor como paremetro de uma funcao
                    //passar um vetor como parametro e passar uma referencia do vetor
                    alert(vetor)
                    break
            case 5: alert(`Programa Encerrado!`)
                    break
            default: alert(`Opção Inválida!`)
        }
    }
    while (opcao!= 4)
}

//funcao que recebe parametro
function f1(idade){
    //let idade = 10
    alert(`Valor de idade ${idade}`)
    idade = idade + 10
    return idade //retorna o resultado da funcao

}
//funcao que recebe parametro
function f2(idade, peso){
    alert(`Valor de idade ${idade} e do peso ${peso}`)

}
//funcao que recebe parametro
function f3(idade, peso, altura){
    alert(`Valor de idade ${idade}, peso ${peso} e altura ${altura}`)

}

function f4(vetor){
    //alterando o valor do vetor
    vetor [0] = vetor[0] + 10
    vetor [1] = vetor[1] + 10
    vetor [2] = vetor[2] + 10

}