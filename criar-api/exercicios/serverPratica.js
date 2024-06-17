import app from "./pratica1.js"
const PORT = 3000;

// Fica aguardando uma requisição, para então retornar um aviso
app.listen(PORT, () => {
    console.log("Conectou-se à porta 3000 em exercício 1.");
});
