
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notas) {
    const somaNotas = notas.reduce( (acc, nota) => {        // 'acc' significa 'Acumulador'
        return acc + nota;
    }, 0);                                                  // O segundo parâmetro do reduce é um contador, que vai ser iterado a cada índice do vetor

    const media = somaNotas / notas.length;
    return media;
}

console.log(`A média da Sala de JS é ${calculaMedia(salaJS)}`);
console.log(`A média da Sala de Java é ${calculaMedia(salaJava)}`);