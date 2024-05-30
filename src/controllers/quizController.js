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

module.exports = {
    inserirDadosQuiz
}