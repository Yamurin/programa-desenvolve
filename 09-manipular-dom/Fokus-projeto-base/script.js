
const html    = document.querySelector('html')

const focoBt  = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const displayTempo = document.querySelector('.app__card-timer')
const imagem =  document.querySelector('.app__image')
const frase = document.querySelector('.app__title')
const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('./sons/luna-rise-part-one.mp3') 
musica.loop = true

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})

const duracaoFoco = 1500
const duracaourto = 300
const duracaoLongo = 900

const botoes = document.querySelectorAll('.app__card-button')

focoBt.addEventListener('click', () => {
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
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