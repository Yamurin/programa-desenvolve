
const user = {
    init: function (nome, email) {
        this.nome = nome 
        this.email = email
    },

    exibirInfo: function() {
        return this.nome
    }
}

// Cria um novo objeto utilisando user como protóripo
const novoUser = Object.create(user)

novoUser.init('Rayane', 'ray@mail.com')

console.log(novoUser.exibirInfo())
console.log(user.isPrototypeOf(novoUser))   // Confere se user é de fato protótipo de novoUser

