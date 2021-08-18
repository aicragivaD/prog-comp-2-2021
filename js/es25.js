function calcular(){
    // entrada de dados
    let nhe = Number(document.getElementById("nhe").value)
    let hf = Number(document.getElementById("hf").value)

    let gratificacao
    if (H > 2400){
        H = (nhe) - 2/3 * (hf)
        gratificacao = 500,00
    }
    else if ((H > 1800) && (H < 2400)){
        H = (nhe) - 2/3 * (hf)
        gratificacao = 400,00
    }
   
}