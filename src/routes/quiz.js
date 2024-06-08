var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

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

