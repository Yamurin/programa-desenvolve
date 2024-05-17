/* Propriedades privadas NÃO podem ser alteradas ao longo do código. 
   Deve-se usar em dados sensíveis, que não devem ser modificados. 
   Para proteger uma propriedade, usar # antes do nome dela na declaração
   E além disso, colocar o nome de cada propriedade protegida com # antes do constructor
*/

export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    #criaObjUser() {
        return ({                        // Retorna um objeto literal que tem acesso às propriedades privadas de User.
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    printInfo() {
        const objUser = this.#criaObjUser()
        return `${objUser.nome}, ${objUser.email}`
    }
}