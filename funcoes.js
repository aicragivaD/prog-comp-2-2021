function principal(){

    do{
        opcao = Number(prompt(`Digite: \n1. F1 \n2. F2 \n3. F3 \n4. Sair`))
        switch(opcao){
            case 1: f1()
                break
            case 2: f2()
                break
            case 3: f3()
                break
            case 4: alert(`Programa Encerrado!`)
                break
            default: alert(`Opção Inválida!`)
        }
    }
    while (opcao!= 4)
}


function f1(){
    alert(`Chamada de F1`)

}
function f2(){
    alert(`Chamada de F2`)

}
function f3(){
    alert(`Chamada de F3`)

}