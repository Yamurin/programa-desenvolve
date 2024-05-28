/*
    Não podemos copiar um vetor com atribuição simples, tipo
        vetor1 = vetor2
    Porque senão vai ser passado por referência, aí os dois vão
    sofrer as mesmas alterações.
    Então tem que usar o SPREAD OPERATOR:
        vetor1 = [...vetor2]
*/

const notas = [7, 7, 8, 9];

const novoNotas = [...notas];

notas.push(10);
console.log(novoNotas);