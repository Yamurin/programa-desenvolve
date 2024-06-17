// Importar o express, para administrar requisições
import express from "express";

// Começa criando uma aplicação express. A partir dela, posso chamar os métodos para fazer requisições.
const app = express();

// Definir a resposta de um endereço padrão, na raíz da URL. Indica o status da resposta e uma string ilustrativa. 
app.get("/", (req, res) => {
    res.status(200).send("Você está na raíz do projeto! [Exercício 1]");
});

app.get("/pagina-404", (req, res) => {
    res.status(404).send("Oh não, a página não existe!  [Exercício 1]");
})

export default app;