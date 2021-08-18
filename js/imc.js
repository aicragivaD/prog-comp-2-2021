/* JavaScript */
function organizar(){ //usamos function para organizar
    // vamos recuperar o peso digitado pelo usuário
    // document -> representa o documento HTML
    // getelementById("peso") -> recupera a caixa de texto
    //.value -> recupera o valor dentro da caixa de texto
    // let peso -> declarando uma variaável que guarda o peso
    let peso = document.getElementById("peso").value
    // vamos recuperar a altura digitado pelo usuário
    let altura = document.getElementById("altura").value
    //calcular e mostra o imc
    // comando de igual é de atribuição
    // a barra / significa divisão
    // * significa multiplicação
    let imc = peso / (altura * altura)
    alert(`O valor do imc é de ${imc.toFixed(2)}`)

}
