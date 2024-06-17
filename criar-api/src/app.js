import express from "express";
import conectarNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectarNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão!", erro);
});

conexao.once("open", () => {
    console.log("Conexão estabelecida com o banco de dados da livraria.");
});

const app = express();
routes(app);

export default app;

