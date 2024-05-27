import fs from 'fs';
import chalk from 'chalk';

const green = chalk.green;                      // Personalização de texto a ser usado com a lib chalk.
const red = chalk.bold.red;

/* Percorre o texto e usa uma expressão regular para encontrar strings no formato de link. */
function extractLinks(text) {                                                  
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;           // Variável que guarda a expressão regular.
    const captures = [...text.matchAll(regex)];                                 // Pega o texto passado para a função e aplica o 'filtro' da expressão regular. O método matchAll retorna todas as strings que correspondes à expressão passada como um vetor. 
    const results = captures.map(capture => ({                                  // O .map vai aplicar um trecho de código para cada elemento do array captures (ou seja, as strings que sgeuem o padrão que eu quero) e então retornar um novo array.
        [capture[1]]: capture[2]})                                              // Cria um objeto com cada título e link.
    )

    return results.length !== 0 ? results : 'Não há links no arquivo.';         // Certifica que o arquivo não está vazio.
}

/* Dispara erros que podem depois ser identificados e analisados por outras partes do programa */
function handleError(err) {  
    throw new Error(red(err.code, 'Arquivo não encontrado.'));
}

/* Função que "chama" o arquivo do qual quero extrair os links, armazena-o e o passa como parâmetro para a função que de fato vai localizar os links.*/
async function getFile(filePath) {
    try {
        const encoding = 'utf-8';                                           // Guarda a codificação do texto que vou ler.
        const text = await fs.promises.readFile(filePath, encoding);        // Usa a lib fileSystem para buscar e aguardar a leitura do texto indicado pelo endereço na variável filePath.
        return extractLinks(text);                                          // Chama a função que já vai extrair todos os links seguindo o padrão que eu quero. Mostra na tela em seguida. 
    } catch (error) {
        handleError(error);                                                 // Se a procura pelo texto falhar, chama a função que lança um erro.
    }
}

export default getFile;