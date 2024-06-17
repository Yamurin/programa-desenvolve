function totalLivrosDisponiveis(livros) {
    let temp = livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
    return temp
}
