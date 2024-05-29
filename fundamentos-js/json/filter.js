const data = require("./clientes.json");

// Retorna uma nova lista de elementos filtrados a partir da lista de clientes 
function filterApartamentoSemComplemento(data) {    
    return data.filter((cliente) => {                            // No método filter, se a função retornar verdadeiro, o método seleciona a entrada. Se não, ela é ignorada.
        return (
            cliente.endereco.apartamento  &&                    // Verifica se apartamento (que é um booleano) é verdadeir
            !cliente.endereco.hasOwnProperty("complemento")     // Verifica se o objeto não tem a chave inidicada como parâmetro
        );
    });
}

const filteredList = filterApartamentoSemComplemento(data);
console.log(filteredList);