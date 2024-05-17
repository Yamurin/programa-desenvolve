import User from "./User.js";

export default class Admin extends User {          
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)         // A palavra-chave 'extends' faz com que a classe Admin herde as mesmas propriedades da classe User.
    }                                                       // 'super' indica a classe User, que está cedendo sesus dados para uma sub-classe, a Admin.

    criarCurso(nomeCurso, numVagas) {
        return `Curso de ${nomeCurso} criado com ${numVagas} vagas`
    }
}
