const os = require('os'); // Para resolver o problema da quebra de linha no windows
const fs = require('fs');
const path = require('path');

function lerArquivos(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString());
        })
    })
}

const caminho = path.join(__dirname, "dados.txt");

lerArquivos(caminho)
    .then(conteudo => conteudo.split(os.EOL))
    .then(linhas => linhas.join(', '))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log);