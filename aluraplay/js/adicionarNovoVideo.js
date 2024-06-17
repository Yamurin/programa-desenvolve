import { conectarAPI  } from "./conectarApi.js"

const formulario = document.querySelector("[data-form]");

// FUNÇÃO: Identifica os valores submetidos no formulário e encaminha-os para função que adiciona o vídeo na API.
async function enviarNovoVideo(evento) {
    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();    // Número aleatório ilustrativo
    const url = document.querySelector("[data-url]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    
    await conectarAPI.adicionarNovoVideoNaAPI(titulo, descricao, url, imagem);

    window.location.href = "../pages/envio-concluido.html"
}

formulario.addEventListener("submit", event => enviarNovoVideo(event));