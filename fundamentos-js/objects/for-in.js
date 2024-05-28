const response = {
    cache: 'no-cache',
    status: 404
}

response.username = [
    {
        name: 'john',
        password: '123'
},
];

// Captura cada uma das chaves no objeto percorrido
for(let key in response) {
    let type = typeof response[key];
    if (type !== "object" && tipo !=="function") {       // Ness caso, o response.username é um objeto dentro do próprio objeto response
        console.log(`A chave [${key}] tem valor [${response[key]}]`);
    }
}