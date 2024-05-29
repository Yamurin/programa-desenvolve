const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

// Retorna uma lista com todas as chaves inicializadas do cliente
const chavesDoObjeto = Object.keys(cliente) 

// Verifica se o objeto não possui uma chave dentro da lista de chaves inicializadas
if (!chavesDoObjeto.includes("enderecos")) {
    console.log("Erro: É necessário ter um endereço cadastrado.");
} else {
    console.log("Todas as chaves estão corretas.", chavesDoObjeto);
}