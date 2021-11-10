let principal = () => {
    let matriz = []
    let vetor = []
    let opcao
    do{
        opcao = Number(prompt(`Informe: \n1.Cadastro de 1 carro \n2.Cadastro de todas as vendas \n3.Total vendido por carro \n4.Total vendido por trimestre \n5.Carro mais vendido \n6.Trimestre que mais vendeu \n7.Sair`))
        switch(opcao){
            case 1: CadastrodeCarros(vetor)
                break
            case 2: CadstrodeVendas(matriz, vetor)
                break
            case 3: TotalvendidoporCarro(matriz, vetor)
                break
            case 4: TotalvendidoporTrimestre(matriz)
                break
            case 5: CarromaisVendido(vetor)
                break
            case 6: TrimestrequemaisVendeu(matriz)
                break
            case 7:  alert(`Saindo do programa!`)
                break
            default: alert(`Opção inválida!`)
         }

     }
     while (opcao != 7)
    }

    let CadastrodeCarros = (vetor) => {
        let objeto = {
            modelo: prompt(`Informe o modelo do carro: `),
            marca: prompt(`Informe a marca do carro:`)
        }
        vetor.push(objeto)
    }

    let CadstrodeVendas = (matriz, vetor) => {
        for(let i=0; i<vetor.length; i++){ //para cada carro cadastrado
            matriz[i] = []
            for(let j=0; j<4; j++){
                matriz[i][j] = prompt(`Informe o total de vendas da marca ${vetor[i].marca}, modelo ${vetor[i].modelo} e no ${j} trimestre`)

            }
        }
    }

    let TotalvendidoporCarro = (matriz, vetor) => {
        for(let i=0; i<vetor.length; i++){ //para cada carro
            let total = 0
            for(let j=0; j<4; j++){ //para cada trimestre
                total = total + matriz[i][j]
            }
            alert(`O total vendido do carro ${vetor[i].marca} e modelo ${vetor[i].modelo} é ${total}`)
        }
    }

    let TotalvendidoporTrimestre = (matriz) => {
        for(let j=0; j<4; j++){ //para cada trimestre
            let total = 0
            for(let i=0; i<vetor.length; i++){ //para cada carro
                total = total + matriz[i][j]
            }
            alert(`O total vendido no trimestre ${j} foi ${total}`)
        }
    }

