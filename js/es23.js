function calcular(){
    //entrada de dados
    let cpc = Number(document.getElementById("cpc").value)
    let qpc = Number(document.getElementById("qpc").value)
    let precoUnitario 
    if ((cpc >= 1) && (cpc <= 10)){
        precoUnitario = 10
    }
    else if ((cpc >= 11) && (cpc <= 20)){
        precoUnitario = 15
    }
    else if ((cpc >= 21) && (cpx <= 30)){
        precoUnitario = 20
    }
    else if ((cpc >= 31) && (cpc <= 40)){
        precoUnitario =30
    }
    else {
        precoUnitario = 0
    }

    let precoTotal = precoUnitario * qpc
    let valorDesconto 
    if (precoTotal < 250){
        valorDesconto = (5 * precoTotal) / 100
    }
    else if ((precoTotal >= 250) && (precoTotal <= 500)){
        valorDesconto = (10 * precoTotal) / 100

    }
    else {
        valorDesconto = (15 * precoTotal) / 100
    }

    let precoFinal = precoTotal - valorDesconto

    document.getElementById("precoUnitario").innerHTML = precoUnitario
    document.getElementById("precoTotal").innerHTML = precoTotal
    document.getElementById("valorDesconto").innerHTML = valorDesconto
    document.getElementById("precoFinal").innerHTML = precoFinal



    
    
}