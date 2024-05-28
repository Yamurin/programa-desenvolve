import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante(estudante, nota) {
        return nota > 60 ? `Estudante ${estudante} aprovado/a no curso.` : `Estudante ${estudante} reprovou por nota insuficiente.`
    }
}

