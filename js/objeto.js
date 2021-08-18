// criar o objeto
// 1 Forma
let altoFalante = new Object ()
som.marca = "JL Audio"
som.modelo = "Subwoofer"
som.watts = "300W"
som.ano = 2020

console.log(altoFalante)


// criar o objeto
// 2 Forma
let altoFalante = {
    marca : "JL Audio",
    modelo : "Subwoofer",
    watts : "300W",
    ano : 2020
}

console.log(altoFalante)


// criar o objeto
// 3 Forma
let altoFalante = new Object ()

altoFalante["marca"] = "JL Audio"
altoFalante["modelo"] = "Subwoofer"
altoFalante["watts"] = "300w"
altoFalante["ano"] = "2020"

console.log(altoFalante)

let vetor = []
for (let i=0; i<4; i++){
    // criar o objeto
    let objeto = {
        nome: prompt(`Informe o nome do produto`),
        qtde: Number(prompt(`Informe a quantidade do produto`)),
        preco: Number(prompt(`Informe  preço do produto`))
    }
    vetor.push(objeto)
    
}

// calcular a media de preco dos produtos

let soma = 0
for (let i=0; i<4; i++){
    soma = soma + vetor[i].preco
}

console.log(`A média é de: ${soma/4}`)

