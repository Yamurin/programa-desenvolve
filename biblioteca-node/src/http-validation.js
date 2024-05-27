import chalk from 'chalk';

function extractLinks (arrLinks) {
    return arrLinks.map((objectLink) => Object.values(objectLink).join());  // Gera, a partr do vetor de objetos de link, uma lista k=somente com os links (em formato de string)
}

// Parâmetro: Array com todos os URLs que eu quero verificar.
// Retorno: Array com os códigos de rsposta de cada URL.
async function checkStatus (urlsList) {
    const arrStatus = await Promise
    .all(                    
        urlsList.map(async (url) => {                                       // Para cada elemento da lista passada (ou seja, os URLs que separei na função exctractLinks)
            try {
                const response = await fetch(url, {method: 'HEAD'})               // Vá pra cada link e pegue a sua HTTP response (com o método fetch). O método HEAD serve para que o código não precise acessar todo oc onteudo dos links, somente seu cabeçalho.  
                return `${response.status}: ${response.statusText}`;                                         // responde.status extrai a chave 'código' (404, 200, 400, etc...) de cada response, de cada link.
            } catch (err) {
                return handleError(err);
            }
        })
    )
    return(arrStatus);
}

function handleError(err) {
    if (err.cause.code === 'ENOTFOUND') {
        return 'link não encontrado';
    } else {
        return 'algo deu errado';
    }
}

// Parâmetro: Lista de objetos com todos os links e nomes do arquivo que etsou lendo
export default async function listValidation (linksList) {
    const links = extractLinks(linksList);
    const status = await checkStatus(links);

    return linksList.map((object, index) => ({
        ...object,
        status: status[index]
    }))
}
