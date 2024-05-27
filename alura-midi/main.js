const listaDeTeclas = document.querySelectorAll('.tecla')

listaDeTeclas.forEach((tecla) => {
    tecla.addEventListener('click', () => {
        const nomeAudio = tecla.classList[1]
        const audio = document.querySelector(`#som_${nomeAudio}`)
        audio.play()
    
        tecla.onkeydown = (evento) => {
            if (evento.code === "Enter" || evento.code === "Space") {
                tecla.classList.add('ativa')
            }
        }

        tecla.onkeyup = () => {
            tecla.classList.remove('ativa')
        }
    })
})

