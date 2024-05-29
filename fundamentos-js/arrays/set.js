/*
 Set é o mais fácil/rápido pra remover elementos duplicados.
 Set é uma classe que automaticamente elimina todos os elementos repetidos dentro dela.
 Tem métodos diferentes dos arrays.
 */

const nomes = ["Maria", "Maria", "João", "João", "Ana"];
const nomesSet = new Set(nomes);
const novoNomes = [...nomesSet];

//const novoNomes = [...new Set(nomes)];

console.log(novoNomes);