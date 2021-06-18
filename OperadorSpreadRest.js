// Operador... rest(juntar)/spread(espalhar)
// Usar rest com parâmetro de função

// Usar spread com Objeto
const funcionario = { nome: "Maria", salario: 12348.99 };
const clone = { ativo: true, ...funcionario };
console.log(clone);

// Usar spread com Array
const grupoA = ["João", "Pedro", "Glória"];
const grupoFinal = ["Maria", ...grupoA, "Rafaela"];
console.log(grupoFinal);