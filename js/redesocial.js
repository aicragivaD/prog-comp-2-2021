let gerenciamentoderedessociais = () => {
let redesSociais = []
for(let i=0; i<5; i++){
    let objeto = {
        codigo: Number(prompt(`Informe o codigo da rede social:`)),
        nome: prompt(`Informe o nome da rede social:`),
        link: prompt(`Informe o link da rede social:`)
    }
    // inserir objeto no vetor
    redesSociais.push(objeto)
}

let Usuarios = []
for (let i=0; i<4; i++){
    let objeto = {
        login: prompt(`Informe o login:`),
        nome: prompt(`Informe o nome:`),
        crs: Number(prompt(`Informe o codigo da rede social:`)),
        qtdPosts: Number(prompt(`Informe a quantidade de posts`))
    }
    // so se encontrar a rede social
    let achou = false // n encontrei a rede social
    let j = 0
    while (!achou && j<5){
        if (redessociais[j].codigo == objeto.codigoredesSociais){
            Usuarios.push(objeto)
            achou = true
            alert(`Usuario inserido com sucesso!`)
        }
        j++
    }
    if (!achou){
        alert(`Rede social não encontrada!`)
    }

    Usuarios.push(objeto)

}

// Exe1) o usuário informa informa a rede social, e o programa retorna quantos posts foram feitos
// Exe2) o programa retorna quantos posts foram feitos em todas as redes sociais
// Exe3) o usuário informa informa o login do usuário, e o programa retorna quantos posts ele fez
// Exe4) o programa retorna quantos posts foram feitos por cada usuário

}