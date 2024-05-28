
const cliente = {
    nome: "Regina",
    idade: 48,
    cpf: "123456",
    email: "regina@gmail.com",
};

// Acessar campo do objeto com ponto
console.log(cliente.nome);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach( (chave) => {
    console.log(cliente[chave]);
});

// Para criar uma chave num objeto já existente, basta declarar
cliente.telefone = "34 12345";
console.log(cliente.telefone);

// Remove um valor e chave do objeto
delete cliente.telefone;