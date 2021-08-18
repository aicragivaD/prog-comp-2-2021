let exercicio1 = () => {
    let opcao // entregas
    let ava = 0 //qtd de entregas por ava
    let papel = 0 //qtd de entregas por papel
    let whats = 0 //qtd de entegas por whatsapp
    let email = 0 //qtd de entergas por email
    let tantofaz = 0 //qtd de entregas tanto faz

    //processamento
        do {
            opcao = Number(prompt("Informe uma opcao"))
            switch (entrega){

                case 1: ava++
                        break
                case 2: papel++
                        break
                case 3: whats++
                        break
                case 4: email++
                        break
                case 5: tantofaz++
                        break
                default: alert(`Opção invalida!`)
            }

        }

        //finalizar o programa digite 0
        while (entrega != 0)
       console.log(`AVA ${ava} - papel ${papel} - whatsapp ${whats} - email ${email} - tanto faz ${tantofaz} -`)
       console.log(`${(tantofaz/(ava+papel+whats+email+tantofaz)*100)}`)
       
       //ordenar
       let troca
       for(let i=0; i<4; i++){
           if (ava > papel){
               troca = ava; ava = paepl; papel = troca
           }
           if (papel > whats){
               troca = papel; papel = whats; whats = troca
           }
           if (whats > email){
               troca = whats; whats = email; email= troca
           }
           if (email > tantofaz){
               troca = email; email = tantofaz; tantofaz = troca
           }
       }
       console.log(`${tantofaz} ${email} ${papel} ${whats} ${ava}`)
      
        
    }



    

let exercicio2 = () => {
    let nomes = [] //nome dos jogadores
    let mediaJ = [] //media de pontos de cada jogador

    //entrada de dados
    for (let i=0; i<12; i++){
        nomes.push((prompt)`Informe o nome do jogador`)
        mediaJ.push(Number(prompt(`Informe os pontos do jogador ${nomes[i]}`)))
    }

    // processamento
    let soma = 0 //calculo da media
    for (let i=0; i<12; i++){
        soma = soma + mediaJ[i]
    }
    console.log(`Media de pontos de todos os jogadores: ${soma/12}`)

    //calcular cestinha
    let maior = 0
    let nome = ""
    for (let i=0; i<12; i++){
        if (mediaJ[i] > maior){
            maior = mediaJ[i]
            nome = nomes[i]
       }
    }
    console.log(`O cestinha do time é ${nome} com ${maior} pontos`)

    //calcular N de pontos pares
    let pares = []
    for (let i=0; i<12; i++){
        if (mediaJ[i] % 2 == 0){
            pares.push(nomes[i])
        }
    }
    console.log(pares)
}

