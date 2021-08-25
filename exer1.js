let exercicio1 = () => {

    let opcao
    let vetVendedores = []
    do {
        opcao = prompt(`Informe: 1. Cadastrar Vendedor \n2. Cadastrar Venda \n3. Sair`)
        switch(opcao){
            case 1: let objeto = {
                codigo: Number(prompt(`Informe o código do usuário`)),
                nome: prompt(`Informe o nome do vendedor`),
                RG: prompt(`Informe o RG do vendedor`)
            }
            //verificar se tem outro vendedor com o mesmo codigo
            let achou = false
            //vetVendedores.length retorna o tamanho do vetor
            for (let i=0; i<vetVendedores.length; i++){
                if (vetVendedores[i].codigo == objeto.codigo){
                    achou = true
                }         
            }
            if (!achou){
                vetVendedores.push(objeto)
                alert(`Vendedor cadastrado com sucesso!`)
            }
            else {
                alert(`Vendedor já existe com esse codigo`)
            }
            vetVendedores.push(objeto)
                break 
            case 2: 
                break
            case 3: alert(`O programa será encerrado`)
                break
            default: alert(`Opcao inválida!`)
        }
    }
    while(opcao != 3)
}