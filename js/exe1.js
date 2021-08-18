function mp(){
    //entrada de dados
   //let nome-variavel
  //converter texto para número = funcao Number ()
  let Numero1 = Number(document.getElementById("Numero1").value)
  let Numero2 = Number(document.getElementById("Numero2").value)

  //processamento
  let subtração = (Numero1 - Numero2)

  //saida na pagina
   alert(`O valor da subtração é = ${subtração.toFixed(2)}`)


}