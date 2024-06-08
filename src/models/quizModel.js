var database = require("../database/config")

function inserirDadosQuiz(acertos, idUsuario, tempo) {
    var instrucaoSql = `INSERT INTO quiz (respostas_certas, fkUsuario, duracao) VALUES (${acertos}, '${idUsuario}', ${tempo});`;
    return database.executar(instrucaoSql);
}

function buscarDadosQuizAcertos(idUsuario) {
    var instrucaoSql = `select respostas_certas, nickname from quiz join usuario on fkUsuario = idUsuario where fkUsuario = ${idUsuario};`;
    return database.executar(instrucaoSql);
}

function buscarDadosQuizOutrosAcertos(idUsuario, limite_dados) {
    var instrucaoSql = `select respostas_certas, nickname from quiz join usuario on fkUsuario = idUsuario where fkUsuario <> ${idUsuario} order by momento desc limit ${limite_dados};`;
    return database.executar(instrucaoSql);
}

function buscarDadosQuizAcertosRad() {
    var instrucaoSql = `select count(*) as pontos_rad from quiz where respostas_certas = 10;`;
    return database.executar(instrucaoSql);
}

function buscarDadosQuizTempo() {
    var instrucaoSql = `select count(*) as tempo_rapido from quiz where duracao <= 60;`;      
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirDadosQuiz,
    buscarDadosQuizAcertos,
    buscarDadosQuizOutrosAcertos,
    buscarDadosQuizAcertosRad,
    buscarDadosQuizTempo
};