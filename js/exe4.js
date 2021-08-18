function mp(){
    //entrada de dados
    //let nome-variavel
    //converter texto para número = funcao Number ()
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)

    //processamento
    let media = ((nota1 * 2) + (nota2 * 3)) / (2 + 3)

    //saida na pagina
    document.getElementById("resultado").innerHTML = media.toFixed(2)

}