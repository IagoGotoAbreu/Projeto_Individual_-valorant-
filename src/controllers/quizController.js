var quizModel = require("../models/quizModel");

function inserirDadosQuiz(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var acertos = req.body.respostas_certasServer;
    var idUsuario = req.body.idUsuarioServer;
    var tempo = req.body.tempoServer;

    // Faça as validações dos valores
    if (acertos == undefined) {
        res.status(400).send("Seu acertos está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo quizModel.js
        quizModel.inserirDadosQuiz(acertos, idUsuario, tempo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o Quiz! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarDadosQuizAcertos(req, res) {

    var idUsuario = req.params.idUsuario;

    console.log(`Buscando acertos do usuario`);

    quizModel.buscarDadosQuizAcertos(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas acertos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarDadosQuizOutrosAcertos(req, res) {

    const outros_acertos = 7;

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando os ultimos ${outros_acertos} acertos dos 7 últimos usuários`);

    quizModel.buscarDadosQuizOutrosAcertos(idUsuario, outros_acertos).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os últimos acertos.", erro.sqlMessage);
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