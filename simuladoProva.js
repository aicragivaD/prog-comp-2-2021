let sistemaImobiliaria = () => {
    let opcao
    let vetImoveis = [] // vetor de imóveis
    do {
        opcao = Number(prompt(`Informe \n1. Cadastra \n2. Consulta A \n3. Consulta B \n4. Consulta C \n5. Sair`))
        switch(opcao){
            case 1: cadastraImovel(vetImoveis)
                    break
            case 2: let tipo = prompt(`Qual tipo do imóvel A ou C`).toUpperCase()
                    consultaImoveis(vetImoveis, tipo)
                    break
            case 3: consultaValorTotal(vetImoveis)
                    break
            case 4: consultaImoveisGrandes(vetImoveis)
                    break
            case 5: alert(`Programa será encerrado`)
                    break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao != 5)
}


let cadastraImovel = (vetImoveis) => { //cadastro do imovel
    let objeto = {
        codigo: Number(prompt(`Informe codigo do imóvel`)),
        tamanho: Number(prompt(`Informe tamanho do imóvel`)),
        tipo: prompt(`Informe tipo do imóvel. A p/ Apartamento e C p/ Casa`).toUpperCase(),
        valor: Number(prompt(`Informe valor do imóvel`)),
    }
    // verifica se já tem outro vendedor com o mesmo código
    let achou = false
    // vetVendedores.length retorna o tamanho do vetor
    for(let i=0; i<vetImoveis.length; i++){
        if (vetImoveis[i].codigo == objeto.codigo){
            achou = true
            alert(`Código já existente`)
        }
    }
    if (!achou){
        // adiciona objeto no vetor
        vetImoveis.push(objeto)
        alert(`Imóvel cadastrado com sucesso`)
    }
}



let consultaImoveis = (vetImoveis, tipo) => { //consulta se o imovel é casa ou apartamento
    for (let i=0; i<vetImoveis.length; i++){
        if (vetImoveis[i].tipo == tipo){
            console.log(vetImoveis[i])
        }
    }
}



let consultaValorTotal = (vetImoveis) => { //preço do imovel
    let soma = 0
    for (let i=0; i<vetImoveis.length; i++){
        soma = soma + vetImoveis[i].valor        
    }
    alert(`O valor total dos imóveis é ${soma}`)
}




let consultaImoveisGrandes = (vetImoveis) => { //tamanho do imovel exemplo 100m quadrados
    for (let i=0; i<vetImoveis.length; i++){
        if (vetImoveis[i].tamanho > 100){
            console.log(vetImoveis[i])
        }
    }
}