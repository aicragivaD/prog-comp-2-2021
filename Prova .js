let viagem = () => {
    let opcao
    let vetViagem = [] //vetor de viagem
    do{
        opcao = Number(prompt(`Informe: \n1. Cadastrar uma viagem \n2. Consulta preço médio da viagem \n3. Tipo de viagem \n4. Viagem mais barata
        \n5. Sair `))
        switch(opcao){
            case 1: cadastrarViagem(vetViagem)
                    break
            case 2: precoMedio(vetViagem)
                    break
            case 3: let tipo = prompt(`Qual tipo de viagem: A ou T`).toUpperCase()
                    tipodeViagem(vetViagem, tipo)
                    break
            case 4: viagemBarata(vetViagem)
                    break
            case 5: alert(`Programa foi encerrado!`)
                    break 
            default: alert(`Opção inválida`)
        }
    }
    while (opcao != 5)
}

//cadastro de viagens
let cadastrarViagem = (vetViagem) => {
    let objeto = {
        codigo: Number(prompt(`Informe o código de viagem`)),
        pais: prompt(`Informe o país de viagem`),
        cidade: prompt(`Informe a cidade de viagem`),
        preco: Number(prompt(`Informe o preço da viagem`)),
        tipo: prompt(`Informe o tipo de viagem, sendo: A p/aérea ou T p/terrestre`)
    }
    // verifica se já tem alguma viagem com mesmo código
    let achou = false
    // vetViagem.length retorna o tamanho do vetor
    for(let i=0; i<vetViagem.length; i++){
        if (vetViagem[i].codigo == objeto.codigo){
            achou = true
            alert(`Código já existente`)
        }
    }
    if (!achou){
        // adiciona objeto no vetor
        vetViagem.push(objeto)
        alert(`Viagem cadastrada com sucesso`)
    }
}

//Preço medio da viagem
let precoMedio = (vetViagem) => {
    let soma = 0
    for (let i=0; i<vetViagem.length; i++){
        soma = ((soma + vetViagem[i].valor) / vetViagem.length)      
    }
    alert(`O valor médio da viagem é ${soma}`)
}

//Tipo de viagem aérea ou terrestre
let tipodeViagem = (vetViagem, tipo) => {
    for (let i=0; i<vetViagem.length; i++){
        if (vetViagem[i].tipo == tipo){
            console.log(vetViagem[i])
        }
    }
}

//viagem mais barata
let viagemBarata = (vetViagem) => {
    for (let i=0; i<vetViagem.length; i++){
        if (vetViagem[i].preco < preco){
            alert(`Viagem mais barata é: `)
        }
    }
}