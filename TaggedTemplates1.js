// Tagged Templates - Processa o Template dentro de uma Função
function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return "Outra string"
}

const aluno = "Gui";
const situacao = "Aprovado";
console.log(tag `${aluno} está ${situacao}.`)