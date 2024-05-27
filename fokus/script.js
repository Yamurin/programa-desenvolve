
const html    = document.querySelector('html')
const focoBt  = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const displayTempo = document.querySelector('.app__card-timer')
const imagem =  document.querySelector('.app__image')
const frase = document.querySelector('.app__title')

const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('./sons/luna-rise-part-one.mp3') 

const startPauseBt = document.getElementById('start-pause')
const startPauseSpan = document.querySelector('#start-pause span')
const startPauseIco = document.querySelector('.app__card-primary-butto-icon')
let tempoDecorridoSegundos = 1500
let intervaloId = null
const audioPause = new Audio('./sons/pause.mp3')
const audioPlay = new Audio('./sons/play.wav')
const audioBeep = new Audio('./sons/beep.mp3')

const tempoNaTela = document.getElementById('timer')

musica.loop = true

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})

const duracaoFoco = 1500
const duracaoCurto = 300
const duracaoLongo = 900

const botoes = document.querySelectorAll('.app__card-button')

focoBt.addEventListener('click', () => {
    tempoDecorridoSegundos = duracaoFoco
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    tempoDecorridoSegundos = duracaoCurto
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    tempoDecorridoSegundos = duracaoLongo
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})

function alterarContexto(nomeContexto) {
    html.setAttribute('data-contexto', nomeContexto)
    imagem.setAttribute('src', `./imagens/${nomeContexto}.png`)
    
    botoes.forEach(function (nomeContexto) {                // Aqui, estou referenciando cada botão do array
        nomeContexto.classList.remove('active')
    })

    switch (nomeContexto) {
        case "foco":
            frase.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;

        case "descanso-curto":
            frase.innerHTML = `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;

        case "descanso-longo":
            frase.innerHTML = `Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break;
    }
}

/* Lógica do temporizador */

const contagemRegressiva = () => {
    mostrarTempo()
    if(tempoDecorridoSegundos <= 0) {
        //audioBeep.play()
        zerar()
        alert('Tempo esgotado!')
        return
    }
    tempoDecorridoSegundos -= 1
    console.log(tempoDecorridoSegundos)
}

startPauseBt.addEventListener('click', () => {
    iniciarPausar() 
}) 

function iniciarPausar() {
    if(intervaloId) {
        audioPause.play()
        zerar()
        return
    }
    audioPlay.play()
    intervaloId = setInterval(contagemRegressiva, 1000)  // Um segundo
    startPauseIco.setAttribute('src', './imagens/pause.png')
    startPauseSpan.textContent = 'Pausar'
}

function zerar() {
    startPauseSpan.textContent = 'Começar'
    startPauseIco.setAttribute('src', './imagens/play_arrow.png')
    clearInterval(intervaloId)
    intervaloId = null
}

/* Mostrar temporizados */

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoSegundos * 1000)
    const tempoFormatado = tempo.toLocaleString("pt-BR", {
        minute: '2-digit',
        second: '2-digit',
    })
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo()