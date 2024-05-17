// Cria nova promessa
function promessa(bool) {
    const x = bool;
    return new Promise((resolve, reject) => {
        if (!x) {
            reject(new Error("Falha na promessa"));
        }
        resolve("Sucesso na promessa");
    });
}

function printResposta(resultado) {
    console.log(resultado);
}

promessa(true)
    .then((texto) => printResposta(texto));