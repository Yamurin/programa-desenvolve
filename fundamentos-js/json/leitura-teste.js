const data = require("./teste.json");     // O require serve para trabalhar com arquivos externos 

const clienteStr = JSON.stringify(data);    // JSON é um objeto global, a função stringify transforma o objeto em string

const clienteObj = JSON.parse(clienteStr);  // Usamos parse para trasnformar stirng em objeto de novo
console.log(data, clienteStr, clienteObj);