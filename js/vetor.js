let exercicio0 = function (){
    let vet = []

    for (let i=0; i<5; i++){
        vet.push(Number(prompt(`Informe o valor ${i+1}`)))
    }

    for (let i=0; i<5; i++){
        vet[i] = vet[i] + 10    
    }
    console.log(vet)
}
let exercicio1 = function (){
    let vet = [] // declaraçao de vetor
    // entrada de dados

    for (let i=0; i<6; i++){
        vet.push(Number(prompt(`Informe o número ${i+1}`)))
    }

    // processamento
    let pares = []
    let impares = []
    for (let i=0; i<6; i++){
        if (vet[i] % 2 == 0){
            pares.push(vet[i])
        }
        else {
            impares.push(vet[i])
        }  
    }
    console.log(`Os valore pares são ${pares} e a qtde deles é ${pares.length}`)
    console.log(`Os valore impares são ${impares}  e a qtde deles ${impares.length}`)
}

let exercicio2 = () => {
    let vet = []

    for (let i=0; i<7; i++){
        vet.push(Number(prompt(`Informe o número ${i+1}`)))
    }
    let M2 = []
    let M3 = []
    for (let i=0; i<7; i++){
        if (vet[i] * 2 == 0){
            M2.push(vet[i])
        }
        else {
            M3.push(vet[i])
        }

    }
    console.log(`Múltiplos de 2: ${M2}`)
    console.log(`Múltiplos de 3: ${M3}`)
    
}

let exercicio3 = () => {
    let CP = []
    let E = []

    //entrada de dados
    for (let i=0; i<10; i++){
        CP.push((prompt(`Informe o código do produto`)))
        E.push(Number(prompt(`Informe a quantidade de estoque ${E[i]} do produto`)))
    }

    //faremos as compras
    let codCliente = Number(prompt(`Informe o código do cliente`))
    do {
        //pede código para compra
        let codigo = prompt(`Informe o código de produto para compra`)
        let achou = false //variavel booleana
        //verifica se o código existe
        for (let i=0; i<10; i++){
            if (CP = [i] == codigo){
            //se existe, pede qtd para comprar
            let qtde = Number(prompt(`Informe a qtde para compra`))
            if (qtde <= E[i]){
                //se tem em estoque, atualiza-lo
                E[i] = E[i] - qtde
        }
           else {
             alert(`Infelizmente, não temos o produto em estoque`)
        }
                
    }
}
        if (achou == false){
        alert(`Infelizmente não temos o produto`)
        }
        
        

        codCliente = Number(prompt(`Informe o código do cliente para pro´xima compra. Digite 0 para encerrar`))
    }
    while (codCliente != 0)

    console.log(`O valor do estoque é ${E}`)
    
}

let exercicio4 = () => {
    let vet = []

    for (let i=0; i<15; i++){
        vet.push(Number(prompt(`Informe o número ${i+1}`)))
    }

    let posicao30 = []
    for (let i=0; i<15; i++){
        if (vet[i] == 30){
            posicao30.push(i)
        }
    }

    console.log(`As posições onde aparecem o número 30 são ${posicao30}`)

}

//arrow function
let exercicio5 = () => {
    let logica = []
    let lp = []

    for (let i=0; i<15; i++){
        logica.push(Number(prompt(`Informe o número do aluno ${i+1} matriculado na disciplina de lógica`)))
    }

    for (let j=0; j<10; j++){
        lp.push(Number(prompt(`Informe o número do aluno ${j+1} matriculado na disciplina de linguagem`)))
    }

   //intersecção
   let interseccao = []
   for (let i=0; i<15; i++){
       for (let j=0; j<10; j++){
           if (logica[i] == lp[j]){
               interseccao.push(logica[i])
           }
       }
   }

   console.log(`Os alunos que fazem as duas matérias são ${interseccao}`)
    
}

let exercicio6 = () => {
    let vendas = [] // total de vendas de cada vendedor
    let percentuais = [] // percentual de comissão de cada vendedor
    let nomes = [] // nome de cada vendedor

    // entrada de dados
    for(let i=0;i<3;i++){
        nomes.push(prompt(`Informe o nome do vendedor ${i+1}`))
        vendas.push(Number(prompt(`Informe o total de vendas do vendedor ${i+1}`)))
        percentuais.push(Number(prompt(`Informe o percentual de comissão de vendas do vendedor ${i+1}`)))
    }

    // processamento
    let comissoes = [] // valor a receber de comissão
    let totalVendas = 0 // total vendido pelos vendedores
    let maiorComissao = 0 // inicia com o primeiro vendedor
    let nomeMaiorComissao = "" // inicia com vazio
    let menorComissao = 100000 // inicia com o número bem grande
    let nomeMenorComissao = "" // inicia com vazio
    
    for(let i=0;i<3;i++){
       comissoes[i] = (vendas[i] * percentuais[i])/100
       if (comissoes[i] > maiorComissao){ // verifica se a comissão é maior que a maior comissão
           maiorComissao = comissoes[i]
           nomeMaiorComissao = nomes[i]
       }
       if (comissoes[i] < menorComissao){ // verifica se a comissão é menor que a menor comissão
            menorComissao = comissoes[i]
            nomeMenorComissao = nomes[i]
        }
       totalVendas = totalVendas + vendas[i] // acumula o total de vendas
    }
    // apresenta os resultados no console do navegador
    console.log(`Total de vendas ${totalVendas}`)
    console.log(`Comissões a receber ${comissoes}`)
    console.log(`Maior comissão ${maiorComissao} do vendedor ${nomeMaiorComissao}`)
    console.log(`Menor comissão ${menorComissao} do vendedor ${nomeMenorComissao}`)
}

