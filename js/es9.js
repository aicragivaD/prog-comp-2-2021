function calcular(){
    // entrada de dados
    let sm = Number(document.getElementById("sm").value)

    // calcular o credito 
    let credito
    if (sm > 400){
        credito = (30 * sm ) /100
    }
    else if ((sm <= 400) && (sm > 300)) {
        credito = (25 * sm) / 100
    }
    else if ((sm <= 300) && (sm > 200)) {
        credito = (20 * sm) /100
    }
    else if ((sm <= 200) && (sm >= 0)) {
        credito = (10 * sm) / 100
    }
    else {
        credito = 0 
    }
    document.getElementById("resultado").value = `o crédito oferecido é de ${credito.toFixed(2)}`

}