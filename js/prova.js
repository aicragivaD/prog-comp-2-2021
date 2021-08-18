function mp(){
    let Number1 = Number(document.getElementById("KM").value)
    let Number2 = Number(document.getElementById("KML").value)
    let Number3 = Number(document.getElementById("VC").value)
  
    let media = (Number1 / Number2) * (Number3)

    // e &&
    // ou ||

    if (media >= 100){
        alert("Viagem muito cara")
    }
    else if ((media < 100) && (meida > 60)){
        alert("Viagem cara")
    }
    else{
        alert("Viagem barata")
    }
  
    alert(`O valor gasto de combustivel é = ${media.toFixed(2)}`)
    
  
  }