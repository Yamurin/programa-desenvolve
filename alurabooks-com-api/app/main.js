let livros = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const containerLivros = document.querySelector('#livros')
const livroPreco = document.querySelectorAll('.livro__preco')


getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {         // A função deve ser assíncrona apara não gerar gargalos na requisição de todos os livros
    const res = await fetch(endpointAPI)
    livros = await res.json()
    console.table(livros)
    let livrosComDesconto = aplicarDesconto(livros)
    criarLivrosDiv(livrosComDesconto)
}

function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}               // Os três pontos(Spread operator) fazem com que todo o array seja copiado
    })
    return livrosComDesconto
}

function criarLivrosDiv(livros){
    containerLivros.innerHTML = ''
    livros.forEach((livro) => {
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        containerLivros.innerHTML += `
            <div class="livro">
                <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.capa}" />
                <h2 class="livro__titulo">
                    ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
            </div>
        `
    })
}