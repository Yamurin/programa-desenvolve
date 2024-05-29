const data = require("./clientes.json");

// Encontra um objeto dentro de uma lista de objetos
// Parâmetros: Lista de objetos, chave a ser usada como filtro, valor a ser comparado
// Retorno: Um objeto que cumpre os requisitos da pesquisa
// Lembrando que a chave age como um tipo de índice no array de atributos de um objeto
function findObject (list, key, value) {
    return list.find((item) => item[key].includes(value));
}

const found = findObject(data, "nome", "Kirby");
console.log(found);