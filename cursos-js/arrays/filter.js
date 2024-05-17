/*
Faz uma cópia de um array com os elementos que cumprem uma condição
A condição dentro da função de parâmetro tem que ser bool.
*/

const num = [5, 10, 15, 20, 25, 30];

const result = num.filter( (num) => {
    return num > 15;
});

// const result = num.flter((num) => num < 15);

console.log(result);