var feedbackModel = require("../models/feedbackModel");

function inserirFeedback(req, res) {
    var estrela = req.body.estrelaServer;
    var idUsuario = req.params.idUsuario;

    if (estrela == undefined) {
        res.status(400).send("Seu feedback está undefined!");
    } else {
        feedbackModel.inserirFeedback(estrela, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarFeedback(req, res) {
        feedbackModel.buscarFeedback()
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    res.status(500).json(erro.sqlMessage);
                }
            );
    
}

function buscarUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else {
        feedbackModel.buscarUsuario(idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarFeedbackFeito(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else {
        feedbackModel.buscarFeedbackFeito(idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    inserirFeedback,
    buscarFeedback,
    buscarUsuario,
    buscarFeedbackFeito
}