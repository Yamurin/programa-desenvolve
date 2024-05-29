/* Propriedades privadas NÃO podem ser alteradas ao longo do código. 
   Deve-se usar em dados sensíveis, que não devem ser modificados. 
   Para proteger uma propriedade, usar # antes do nome dela na declaração
   E além disso, colocar o nome de cada propriedade protegida com # antes do constructor
*/

export default class User {
    #nome
    #sobrenome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#sobrenome = sobrenome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }
    // Cada propriedade precisa, por convenção, de um getter correspondente
    get nome() {
        return this.#nome
    }

    get sobrenome() {
        return this.#sobrenome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error('formato inválido')
        }

        let [nome, ...sobrenome] = novoNome.split(" ")
        sobrenome = sobrenome.join(' ')

        this.#nome = nome
        this.#sobrenome = sobrenome
    }

   /* printInfo() {
        return `${objUser.nome}, ${objUser.email}`
    }*/
}