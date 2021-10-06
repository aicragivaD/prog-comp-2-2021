//cria a função
let vendasdaLoja = () => {

    //declaração de matriz
    //12 x 4

    //vetor de meses
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro",
     "Outubro", "Novembro", "Dezembro"]

     //declara a matriz
     let matriz = []
     let opcao
     do{
         opcao = Number(prompt(`1. Cadastrar venda \n2. Total vendido em cada mês \n3. Total vendido em cada semana \n4. Total vendido no ano \n5. Sair do programa`))
         switch(opcao){
            case 1: cadastraVendas(matriz, meses)
                break
            case 2: totalVendidoMes(matriz, meses)
                break
            case 3: totalVendidoSemana(matriz)
                break
            case 4: totalVendidoAno(matriz)
                break
            case 5:  alert(`Saindo do programa!`)
                break
            default: alert(`Opção inválida!`)
         }

     }
     while (opcao != 5)

    let cadastraVendas = (matriz, meses) => {
     for (let i=0; i<12; i++){ //para cada mês
        matriz[i] = []
        alert(`Informe as vendas do mês ${meses[i]}`)
        for (let j=0; j<4; j++){ //para cada semana
            matriz[i][j] = Number(prompt(`Informe o valor vendido na ${j+1}. semana`))
        }
     }
    }


    let totalVendidoMes = (matriz, meses) => {
     let soma 
     for (let i=0; i<12; i++){ //para cada mês
        soma = 0
        for (let j=0; j<4; j++){ //para cada semana
            soma = soma + matriz[i][j] 
        }
        //acabou de somar os meses
        alert(`Total vendido no mês ${meses[i]} foi ${soma}`)
     }
    }

    let totalVendidoSemana = (matriz) => {
        //para cada coluna
        let soma
        for (let j=0; j<4; j++){ //para cada semana
            soma = 0
            //para cada linha
            for (let i=0; i<12; i++){
                soma = soma + matriz[i][j]
            }
        }
        //acabaram os meses
        alert(`A soma de vendas da semana ${j+1} é ${soma}`)
    }

    let totalVendidoAno = (matriz) => {
        let soma = 0
        for (let i=0; i<12; i++){ //para cada mês
           for (let j=0; j<4; j++){ //para cada semana
               soma = soma + matriz[i][j] 
           }
        }
         alert(`Total vendido no ano foi de ${soma}`)
    }
}