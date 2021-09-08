function principal(){

    let opcao
    let idade //escopo local, funciona no local onde foi definido
    do{
        opcao = Number(prompt(`Digite: \n1. F1 \n2. F2 \n3. F3 \n4. Sair`))
        switch(opcao){
            case 1: idade = Number(prompt(`Informe a sua idade`))
                f1(idade)
                break
            case 2: idade = Number(prompt(`Informe a sua idade`))
                f2(idade)
                break
            case 3: idade = Number(prompt(`Informe a sua idade`))
                f3(idade)
                break
            case 4: alert(`Programa Encerrado!`)
                break
            default: alert(`Opção Inválida!`)
        }
    }
    while (opcao!= 4)
}


function f1(idade){
    //let idade = 10
    alert(`Valor de idade ${idade}`)

}
function f2(idade){
    alert(`Valor de idade ${idade}`)

}
function f3(idade){
    alert(`Valor de idade ${idade}`)

}