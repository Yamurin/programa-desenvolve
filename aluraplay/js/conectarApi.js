// FUNÇÃO: Busca e lê a API. 
// RETORNO: Objeto com os dados legíveis do json.
async function listarVideosNaAPI() {
    const response = await fetch("http://localhost:3000/videos");
    const videos = await response.json();
    console.table(videos)
    return videos;
}

// FUNÇÃO: Enviar ao arquivo json um novo objeto de vídeo, no formato de string.
async function adicionarNovoVideoNaAPI(titulo, descricao, url, imagem) {
    const response = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    const data = await response.json();
    return data;
}

export const conectarAPI  = {
    listarVideosNaAPI, 
    adicionarNovoVideoNaAPI
}