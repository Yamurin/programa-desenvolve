// "Ponto de entrada" das rotas, ou seja, por onde o resto da palicação terá acesso às rotas.

import express from "express";
import livros from "./livrosRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send
    ("Raíz do projeto livraria"));

    app.use(express.json(), livros);    // Middleware: Vai executar o 'express.json' em todas as requisições chamadas. Ou seja, todas a requisições terão o seu body parseado para json
};

export default routes;