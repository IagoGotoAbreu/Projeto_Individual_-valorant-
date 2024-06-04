var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de quizController.js
router.post("/inserirDadosQuiz", function (req, res) {
    quizController.inserirDadosQuiz(req, res);
});

router.get("/buscarDadosQuizAcertos/:idUsuario", function (req, res) {
    quizController.buscarDadosQuizAcertos(req, res);
});

router.get("/buscarDadosQuizOutrosAcertos/:idUsuario", function (req, res) {
    quizController.buscarDadosQuizOutrosAcertos(req, res);
});

router.get("/buscarDadosQuizAcertosRad", function (req, res) {
    quizController.buscarDadosQuizAcertosRad(req, res);
});

router.get("/buscarDadosQuizTempo", function (req, res) {
    quizController.buscarDadosQuizTempo(req, res);
});

module.exports = router;

