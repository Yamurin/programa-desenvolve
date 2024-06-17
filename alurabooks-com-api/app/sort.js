const btnOrdenarPorPreco = document.querySelector('#btnOrdenarPorPreco')

function sortPrecos() {
    debugger
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    containerLivros.innerHTML = ''
    criarLivrosDiv(livrosOrdenados)
}

btnOrdenarPorPreco.addEventListener('click', sortPrecos)