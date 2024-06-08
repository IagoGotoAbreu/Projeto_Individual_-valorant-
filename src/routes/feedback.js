var express = require("express");
var router = express.Router();

var feedbackController = require("../controllers/feedbackController");

router.post("/inserirFeedback/:idUsuario", function (req, res) {
    feedbackController.inserirFeedback(req, res);
});

router.get("/buscarFeedback", function (req, res) {
    feedbackController.buscarFeedback(req, res);
});

router.get("/buscarUsuario/:idUsuario", function (req, res) {
    feedbackController.buscarUsuario(req, res);
});

router.get("/buscarFeedbackFeito/:idUsuario", function (req, res) {
    feedbackController.buscarFeedbackFeito(req, res);
});

module.exports = router;