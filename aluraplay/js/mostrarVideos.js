import { conectarAPI  } from "./conectarApi.js";

const containerVideos = document.querySelector("[data-lista]");

// FUNÇÃO: Criar um elemento (card) para um vídeo no DOM da página. 
function construirCard(video) {
    const videoCard = document.createElement("li");
    videoCard.className = "videos__item";
    videoCard.innerHTML = `<iframe width="100%" height="72%" src="${video.url}"
                            title=${video.titulo} frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                        <div class="descricao-video">
                            <img src="${video.imagem}" alt="logo canal alura">
                            <h3>${video.titulo}</h3>
                            <p>${video.descricao}</p>
                        </div> `
    
    return videoCard;
}

// FUNÇÃO: Ler a lista de vídeos da API e chamar o construirCard() para cada vídeo do json. 
async function listarVideosNoDOM() {
    try {
        const listaDeVideos = await conectarAPI.listarVideosNaAPI();
        listaDeVideos.forEach(video => {
            containerVideos.appendChild(construirCard(video));
        });
    } catch {
        containerVideos.innerHTML = `<h2>ERRO: Não foi possível conenctar-se ao servidor de vídeos.</h2>`
    }
}

listarVideosNoDOM();