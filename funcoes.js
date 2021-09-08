function principal(){

    let opcao
    let idade //escopo local, funciona no local onde foi definido
    let peso, altura
    do{
        opcao = Number(prompt(`Digite: \n1. F1 \n2. F2 \n3. F3 \n4. Sair`))
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
            case 4: alert(`Programa Encerrado!`)
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