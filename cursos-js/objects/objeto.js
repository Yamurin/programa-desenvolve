// Objeto é uma estrutura, tem chaves e valores

// Declaração literal: Usando "= { }"
// Nesses casos, o objeto eh passado por referência. Ou seja, se eu fizer
// obj2 = obj1, os dois objetos vão sofrer as mesmas mudanças de valor, ao invés de ser uma cópia
// Pra criar instâncias separadas, usa-se 'obj2 = Object.create(objOriginal)'
const cliente = {
    nome: "Regina",
    idade: 48,
    cpf: "123456",
    email: "regina@gmail.com",
    telefone: ["34 123456789", "34 55551234"]
};

// Acessar campo do objeto
console.log(cliente.nome);
console.log(cliente["nome"]);

