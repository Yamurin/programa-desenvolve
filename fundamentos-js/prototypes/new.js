function User(nome, email) {        // Ao criar objetos com uma function, utilizar letra maiúscula
    this.nome = nome
    this.email = email

    this.exibirInfo = function() {
        return `${this.nome}, ${this.email}`
    }
}

function Admin(role) {
    User.call(this, 'Rayane', 'rayane@mail.com')    // Chama todas as propriedades do objeto User
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const novoUser = new Admin('admin')

console.log(novoUser.exibirInfo())
console.log(novoUser.role)

/* Criando uma nova instância do objeto User utilizando constructor, aplicando as informações passadas por parâmetros */
//const novoUser = new User('Rayane', 'rayane@mail.com');
//console.log(novoUser.exibirInfo());