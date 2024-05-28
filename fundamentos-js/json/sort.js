const data = require("./clientes.json");

function sortList(list, key) {
    const result = list.sort((a, b) => {
        if (a[key] < b[key]) { return -1; }
        if (a[key] > b[key]) { return  1; }
        return 0;
    });

    return result;
}
const sortedNomes = sortList(data, "nome");
console.log(sortedNomes);