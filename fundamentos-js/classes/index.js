import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Maria', 'm@m.com', '10-01-2001')
const novoAdmin = new Admin('Jose', 'j@j.com', '10-01-2001')

console.log(novoAdmin.nome)
novoAdmin.nome = 'Joao'
console.log(novoAdmin.nome)