let livros = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const containerLivros = document.querySelector('#livros')
const livroPreco = document.querySelectorAll('.livro__preco')

getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {         // A função deve ser assíncrona apara não gerar gargalos na requisição de todos os livros
    const res = await fetch(endpointAPI)
    livros = await res.json()
    console.table(livros)

    livros.forEach((livro) => {
        containerLivros.innerHTML += `
            <div class="livro">
                <img class="livro__imagens" src="${livro.imagem}" alt="${livro.capa}" />
                <h2 class="livro__titulo">
                    ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco}</p>
                <div class="tags">
                    <span class="tag">${livro.categoria}/span>
                </div>
            </div>
        `

    })
}