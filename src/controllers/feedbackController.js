var feedbackModel = require("../models/feedbackModel");

function inserirFeedback(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var estrela = req.body.estrelaServer;
    var idUsuario = req.params.idUsuario;

    // Faça as validações dos valores
    if (estrela == undefined) {
        res.status(400).send("Seu feedback está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo feedbackModel.js
        feedbackModel.inserirFeedback(estrela, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o feedback! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarFeedback(req, res) {
        // Passe os valores como parâmetro e vá para o arquivo feedbackModel.js
        feedbackModel.buscarFeedback()
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o feedback! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    
}

function buscarUsuario(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsuario = req.params.idUsuario;

    // Faça as validações dos valores
    if (idUsuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo feedbackModel.js
        feedbackModel.buscarUsuario(idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o feedback! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    inserirFeedback,
    buscarFeedback,
    buscarUsuario
}