var quizModel = require("../models/quizModel");

function inserirDadosQuiz(req, res) {
    var acertos = req.body.respostas_certasServer;
    var idUsuario = req.body.idUsuarioServer;
    var tempo = req.body.tempoServer;

    if (acertos == undefined) {
        res.status(400).send("Seu acertos está undefined!");
    } else {
        quizModel.inserirDadosQuiz(acertos, idUsuario, tempo)
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

function buscarDadosQuizAcertos(req, res) {
    var idUsuario = req.params.idUsuario;
    quizModel.buscarDadosQuizAcertos(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarDadosQuizOutrosAcertos(req, res) {
    const limite_dados = 7;
    var idUsuario = req.params.idUsuario;
    quizModel.buscarDadosQuizOutrosAcertos(idUsuario, limite_dados).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarDadosQuizAcertosRad(req, res) {
    quizModel.buscarDadosQuizAcertosRad()
         .then(resultado => {
            res.status(200).json(resultado);
    }).catch( erro => {
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarDadosQuizTempo(req, res) {
    quizModel.buscarDadosQuizTempo()
         .then(resultado => {
            res.status(200).json(resultado);
    }).catch( erro => {
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    inserirDadosQuiz,
    buscarDadosQuizAcertos,
    buscarDadosQuizOutrosAcertos,
    buscarDadosQuizAcertosRad,
    buscarDadosQuizTempo
}