const btnAdicionaTarefa= document.querySelector('.app__button--add-task')         // Botão de "Adicionar nova tarefa"
const formAdicionarTarefa = document.querySelector('.app__form-add-task')         // Botão de "Salvar tarefa" dentro do formulário
const textarea = document.querySelector('.app__form-textarea')                    // Texto que o usuário escreve na tarefa.
const ulTarefas = document.querySelector('.app__section-task-list')
const paragrafoDescricaoTarefa = document.querySelector('.app__section-active-task-description')

const btnRemoverConcluidas = document.querySelector('#btn-remover-concluidas')
const btnRemoverTodas = document.querySelector('#btn-remover-todas')

let listaTarefas = JSON.parse(localStorage.getItem('tarefas')) || []
let tarefaSelecionada = null
let liTarefaSelecionada = null


function atualizarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(listaTarefas))   // Usando o método stringify do JSON para converter o valor submetido pelo formulário em string legível pelo localStorage
}

function limparFormulario() {
    textarea.value = ''
    mostrarFormulario()
}

function mostrarFormulario() {
    formAdicionarTarefa.classList.toggle('hidden')

    const btnCancelar = document.querySelector('.app__form-footer__button--cancel')
    btnCancelar.addEventListener('click', () => {
        limparFormulario()
    })
}

function criarElementoTarefa(tarefa) {                               // Transforma um objeto tarefa em HTML com as informações da tarefa
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

    botao.onclick = () => {
        const novaDescricao = prompt('Nova descrição')
        if (novaDescricao) {
            paragrafo.textContent = novaDescricao
            tarefa.descricao = novaDescricao
            atualizarTarefas()
        }
    }
    
    const imgBotao = document.createElement('img')
    imgBotao.setAttribute('src', './imagens/edit.png')
    botao.append(imgBotao)

    li.append(svg)                                                  // O método append() adiciona o elemento passado como parâmetro como sendo a última child do elemento que chamou o método
    li.append(paragrafo)
    li.append(botao)

    if(tarefa.completa) {
        li.classList.remove('app__section-task-list-item-active')
        li.classList.add('app__section-task-list-item-complete')
        botao.setAttribute('disabled', 'disabled')
    } else {
        li.onclick = () => {
            document.querySelectorAll('.app__section-task-list-item')
                    .forEach((tarefa) => {
                        tarefa.classList.remove('app__section-task-list-item-active')
                    })
    
            if (tarefa === tarefaSelecionada) {
                paragrafoDescricaoTarefa.textContent = ''
                tarefaSelecionada = null
                li = null
                return
            }
    
            tarefaSelecionada = tarefa
            tarefaSelecionada.completa = false
            liTarefaSelecionada = li
            li.classList.add('app__section-task-list-item-active')
            paragrafoDescricaoTarefa.textContent = tarefa.descricao
        }
    }

    return li
}

btnAdicionaTarefa.addEventListener('click', () => {
    mostrarFormulario()
})


formAdicionarTarefa.addEventListener('submit', (evento) => {        
    evento.preventDefault();                                            // O método previne o comportamento padrão do formulário, que é o de recarregar a página ao enviar.
    const tarefa = {                                                    // Armazena a descrição escrita pelo usuário em um objeto "tarefa"
        descricao: textarea.value,
    }
    listaTarefas.push(tarefa)                                           // Adiciona o objeto tarefa à lista com todas as tarefas, que fica armazenada localmente
    const elementoTarefa = criarElementoTarefa(tarefa)

    ulTarefas.append(elementoTarefa)
    atualizarTarefas()       
    textarea.value = ''
    formAdicionarTarefa.classList.add('hidden')
})

listaTarefas.forEach((tarefa) => {
    const elementoTarefa = criarElementoTarefa(tarefa)
    ulTarefas.append(elementoTarefa)
});

/* Marca a tarefa como concluída */
document.addEventListener('FocoFinalizado', () => {
    if (liTarefaSelecionada && liTarefaSelecionada) {
        liTarefaSelecionada.classList.remove('app__section-task-list-item-active')
        liTarefaSelecionada.classList.add('app__section-task-list-item-complete')
        document.querySelector('.app_button-edit').setAttribute('disabled', 'disabled')
        tarefaSelecionada.completa = true
        atualizarTarefas()
    }
})

/* Limpar todas as tarefas ou apenas as tarefas concluidas */
const removerTarefas = (somenteConcluidas) => {
    let seletor = somenteConcluidas ? ".app__section-task-list-item-complete" : ".app__section-task-list-item"
    
    document.querySelectorAll(seletor).forEach((tarefaConcluida) => {
        tarefaConcluida.remove()
    })

    listaTarefas = somenteConcluidas ? listaTarefas.filter((tarefa) => !tarefa.completa) : []     // Remove do array todas as tarefas com .completa == false
    atualizarTarefas()
}

btnRemoverConcluidas.onclick = () => removerTarefas(true)
btnRemoverTodas.onclick = () => removerTarefas(false)