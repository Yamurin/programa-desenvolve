// CLI - Command Line Interface
import chalk from 'chalk';
import fs, { lstat } from 'fs';
import getFile from './index.js';
import listValidation from './http-validation.js';

const path = process.argv;          // Retorna o argumento passado na command line
const yellow = chalk.yellow;
const red = chalk.red;

async function printList(validation, result, fileId = '') {
    if (validation) {
        console.log(yellow(`lista validada:`));
        console.log(await listValidation(result));
    } else {
        console.log(yellow(`lista de links: ${fileId}`), result);
    }
}

/* Função que chama todo o o processo de ler os links do arquivo inidicado no CLI */
/* Essa funçãoprecisa ser assíncrona porque as funções que realizam a leitura de arquivos/extração de links/etc tambem são assíncronas*/
async function processText(argument) {
    const path = argument[2];
    const validation = (argument[3] === '--validation');      // Confere se o argument[3] é igual a 'valida' e gera um booleano

    try {                               // VErifica se o suuário digitou um nome errado.
        fs.lstatSync(path);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log(red('Arquivo ou diretório não existe.'));
            return;
        }
    }

    if (fs.lstatSync(path).isFile()) {                      // Verifica se o caminho indicado leva à um arquivo ou à um diretório
        const result = await getFile(path); 
        printList(validation, result);
    } else if (fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path);      // Array com os nomes dos arquivos presentes nod iretório (strings).
        files.forEach(async (fileName) => {
            const list = await getFile(`${path}/${fileName}`);     // Executa a leitura de arquivo para cada arquivo presente no diretório.
            printList(validation, list, fileName);
        })
    }
}

processText(path);