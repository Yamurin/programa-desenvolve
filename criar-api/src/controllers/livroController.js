// Classe que define todas as "ações" possíveis para as requisições dos livros

import livro from "../models/Livro.js";

class LivroController {
    
    static async listarLivros (req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (err) {
            res.status(500).json({ message:`${err.message} - Falha ao listar livros` });
        }
    };
    
    static async listarLivroPorId (req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (err) {
            res.status(500).json({ message:`${err.message} - Falha ao encontrar livros` });
        }
    };

    static async cadastrarLivro (req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(200).json({ message: "Livro criado com sucesso", livro: novoLivro });
        } catch (err) {
            res.status(500).json({ message:`${err.message} - Falha ao cadastrar livro` });
        }
    };

    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id;
            const livroAtualizado = await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message:`${livroAtualizado.titulo} foi atualizado. ` });
        } catch (err) {
            res.status(500).json({ message:`${err.message} - Falha ao atualizar o livro` })
        };
    }

    static async deletarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro deletado com sucesso." });
        } catch (err) {
            res.status(500).json({ message: `${err.message} - Falha ao deletar livro`})
        }
    }

};

export default LivroController;
