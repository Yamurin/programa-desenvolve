const botoesFiltrar = document.querySelectorAll('.btn')
const livrosDivs = document.querySelectorAll('.livro')
const livrosDisponiveisSpan = document.querySelector('#valor')

botoesFiltrar.forEach((botao) => {
    botao.addEventListener('click', filtrarLivros)
})

function filtrarLivros() {
    if (this.value != '') {
        const filtro = this.value
        let livrosFiltrados
        
        if(filtro == 'disponivel') {
            livrosFiltrados = livros.filter(livro => livro.quantidade > 0)
        } else {
            livrosFiltrados = livros.filter(livro => livro.categoria == filtro)
        }
    
        criarLivrosDiv(livrosFiltrados)
    }
}