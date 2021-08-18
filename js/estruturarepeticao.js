
    let exercicio0 = function (){

        let soma = 0
        
        let i = 1
        
        while (i <= 10){
            let nota = Number(prompt("informe a nota"))
        
            soma = soma + nota
        
            i++
        
        }
        
        let media = soma / 10
        
        alert(`A média das notas é ${media}`)
        
        }
        
        let exercicio = function (){
        
            let a, b, c, d, aux
        
            let contador = 1
        
            while (contador <= 5){
            a = Number(prompt(`Informe o valor de a`))
            b = Number(prompt(`Informe o valor de b`))
            c = Number(prompt(`Informe o valor de c`))
            d = Number(prompt(`Informe o valor de d`))
        
            let i = 1
            
            while (i <= 3){
                if (a > b){
                    aux = a
                    a = b
                    b = aux
                }
                if (b > c){
                    aux = b
                    b = c
                    c = aux
        
                }
                if (c > d){
                    aux = c
                    c = d
                    d = aux
        
                }
                i++
                
            }
            
            alert(`Ordem crescente ${a} ${b} ${c} ${d} e a ordem decrescente ${d} ${c} ${b} ${a}`)  
             contador++  
        } 
        }
        let exercicio2 = function (){
        
            let qtde= 120
            let lucro
            let saida = "" // variavel acumuladora
            let maiorLucro = 0 // valor bem pequeno
            let maiorQtde = 0 // qtde que da maior lucro
            let maiorPreco = 0 // preco que me da maior lucro
            for(let preco = 5.0; preco >=1; preco = preco - 0.50){
        
                lucro = (preco * qtde) - 200
                if (lucro > maiorLucro){
                    maiorLucro = lucro
                    maiorQtde = qtde
                    maiorPreco = preco
                }
                saida = saida + ` <tr> <td> ${preco.toFixed(2)} </td> <td> ${qtde} </td>  <td> R$ 200.00 </td> <td> ${lucro.toFixed(2)} </td> <tr> `
                // prepara para a proxima vez
                qtde = qtde + 26
            }
            alert(`Maior lucro: ${maiorLucro} com Qtde: ${maiorQtde} com Preco: ${maiorPreco}`)
        
        }
        let exercicio3 = function (){
        
            let i = 1
            let f1 = 0
            let f2 = 0
            let f3 = 0
            let f4 = 0
            let f5 = 0
            while (i <= 8){
                let idade = Number(prompt(`Informe sua idade ${i}`))
                if (idade <= 15){
                    f1++
                }
                else if ((idade > 15) && (idade <= 30)){
                    f2++
                }
                else if ((idade > 30) && (idade <= 45)){
                    f3++
                }
                else if ((idade > 45) && (idade <= 60)){
                    f4++
                }
                else{
                    f5++
                }
                i++
                alert(`Faixa 1: ${f1} \nFaixa 2: ${f2} \nFaixa 3: ${f3} \nFaixa 4: ${f4} \nFaixa 5: ${f5} \nF1 ${f1/8*100}% \nF5 ${f5/8*100}%`)
            }
        }
            
            let exercicio6 = function (){
                let valor // valor definido pelo usuario
                let tipo
                let totalPrazo = 0 // valur acumulativo
                let totalVista = 0
                for(let i=1;i<=15;i++){
                    valor = Number(prompt(`Informe o valor da transaçã0 ${i}`))
                    Tipo = Number(prompt(`Informe o tipo da transação(V para a vista e P para praso) ${i}`)).toUppercase() // forma de converter para maiusculo oq o usuario digitou
                    if(tipo == 'V'){ // valor a vista
                        totalVista = totalVista + valor
                    }
                    else if (tipo == 'P'){ // a prazo
                        totalPrazo = totalPrazo + valor
                    }
                }
                // soma os totais
                let totalGeral = totalPrazo + totalVista
                // primeira parcela do total a prazo
                let parcela = totalPrazo / 3
            
                alert(`Total a vista ${totalVista} - Total a prazo ${totalPrazo} - total geral ${totalGeral} - 1º parcela a prazo ${parcela}`)
            }
        
    
    let  exercicio21 = function(){

        let voto; let qtd1 = 0; let qtd2 = 0; let qtd3 = 0;  let qtd4 = 0; let nulo = 0; let branco = 0
        voto = Number(prompt("Informe um voto"))
        do {
            switch (voto){

                case 1: qtd1++
                break
                case 2: qtd2++
                break
                case 3: qtd3++
                break
                case 4: qtd4++
                break
                case 5: nulo++
                break
                case 6: branco++
                break
            }

            voto = Number(prompt("Informe um novo voto. Digite 0 para encerrar a votação"))
        }
        while (voto != 0)
        let total = qtd1 + qtd2 + qtd3 + qtd4 + nulo + branco
        console.log(`Cand1 ${qtd1} - Cand2 ${qtd2} - Cand3 ${qtd3} - Cand4 ${qtd4}`)
        console.log(`Votos Nulos ${nulo} - Percentual de votos nulos ${nulo/total*100}`)
        console.log(`Votos em Branco ${branco} - Percentual de votos Brancos ${branco/total*100}`)
        
    }
    // programaçao estruturada = function exercicio0(){}
    // programacao funcional = let exercicio0 = function (){}
    let exercicio23 = function (){
        let opcao
        let salario

        do {
            opcao = Number(prompt("Digite \n 1. Novo Salário \n 2. Férias \n 3. Décimo terceiro \n 4. Sair"))
            switch(opcao){
                case 1: salario = Number(prompt("Informe o salário"))
                        if (salario < 2100){
                            alert(`Novo salário ${salario + salario*15/100}`)
                        }
                        else if ((salario > 1200) && (salario <= 6000)){
                            alert(`Novo salario ${salario + salario*10/100}`)
                        }
                        else {
                            alert(`Novo salario ${salario + salario*5/100}`)
                        }
                     break
                case 2: salario = Number(prompt("Informe o salário"))
                        alert(`O valor das férias é ${salario + 1/3*salario}`)
                     break
                case 3: salario = Number(prompt("Informe o salário"))
                        let meses = Number(prompt("Informe número de meses trabalhos"))
                        let dt = salario * meses/12
                        alert(`Décimo terceiro a receber ${salario * meses/12}`)
                    break
                case 4: alert("O programa será encerrado !!!") 
                    break
                default: alert("Opcao inválida. Tente novamente !!!")
            }
            

        }
        while (opcao != 4)
        
    }



