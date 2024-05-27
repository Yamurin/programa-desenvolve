const btnAdicionaTarefa= document.querySelector('.app__button--add-task')         // Botão de "Adicionar nova tarefa"
const formAdicionarTarefa = document.querySelector('.app__form-add-task')         // Botão de "Salvar tarefa" dentro do formulário
const textarea = document.querySelector('.app__form-textarea')                    // Texto que o usuário escreve na tarefa.
const ulTarefas = document.querySelector('.app__section-task-list')

const listaTarefas = JSON.parse(localStorage.getItem('tarefas')) || []

function criarElementoTarefa(tarefa) {                               // Transforma um objeto tarefa em HTML com as informações da tarefa
    console.log("criarelmeento")
    const li = document.createElement('li')                          // O createElement() vai "escrever" o código HTML
    li.classList.add('app__section-task-list-item')

    const svg = document.createElement('svg')
    svg.innerHTML = `
            <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
                <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
            </svg>
    `

    const paragrafo = document.createElement('p')
    paragrafo.textContent = tarefa.descricao
    paragrafo.classList.add('app__section-task-list-item-description')

    const botao = document.createElement('button')
    botao.classList.add('app_button-edit')
    
    const imgBotao = document.createElement('img')
    imgBotao.setAttribute('src', './imagens/edit.png')
    botao.append(imgBotao)

    li.append(svg)                                                  // O método append() adiciona o elemento passado como parâmetro como sendo a última child do elemento que chamou o método
    li.append(paragrafo)
    li.append(botao)

    console.log("feito")
    return li
}

btnAdicionaTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden')
})

formAdicionarTarefa.addEventListener('submit', (evento) => {        
    evento.preventDefault();                                            // O método previne o comportamento padrão do formulário, que é o de recarregar a página ao enviar.
    const tarefa = {                                                    // Armazena a descrição escrita pelo usuário em um objeto "tarefa"
        descricao: textarea.value
    }
    listaTarefas.push(tarefa)                                           // Adiciona o objeto tarefa à lista com todas as tarefas, que fica armazenada localmente
    const elementoTarefa = criarElementoTarefa(tarefa)
    ulTarefas.append(elementoTarefa)
    localStorage.setItem('tarefas', JSON.stringify(listaTarefas))       // Usando o método stringify do JSON para converter o valor submetido pelo formulário em string legível pelo localStorage
    textarea.value = ''
    formAdicionarTarefa.classList.add('hidden')
})

listaTarefas.forEach((tarefa) => {
    const elementoTarefa = criarElementoTarefa(tarefa)
    ulTarefas.append(elementoTarefa)
});