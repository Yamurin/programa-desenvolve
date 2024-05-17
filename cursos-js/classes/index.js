import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Maria', 'm@m.com', '10-01-2001')

console.log(novoUser.printInfo())