function calcular(){
    //entrada de dados
    let idade = Number(document.getElementById("idade").value)
    let peso = Number(document.getElementById("peso").value)

    //calcular
    let risco
    if (idade < 20){
        if (peso < 60){
        risco = 9   
    }
    else if ((peso >= 60) && (peso <= 90)){
        risco = 8
    }
    else {
        risco = 7
      }
    }
    else if ((idade >= 20) && (idade <= 50)){
        if (peso < 60){
            risco = 6
        }
        else if ((peso >= 60) && (peso <= 90)){
            risco = 5
        }
        else {
            risco = 4
        }

    }
    else {
        if (peso < 60){
            risco = 3
        }
        else if ((peso >= 60) && (peso <= 90)){
            risco = 2
        }
        else {
            risco = 1
        }
    }
    document.getElementById("resultado").innerHTML = risco

    
}