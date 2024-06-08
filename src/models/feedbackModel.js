var database = require("../database/config");

function inserirFeedback(estrela, idUsuario) {
    var instrucaoSql = `INSERT INTO feedback (estrela, fkUsuario) VALUES (${estrela}, ${idUsuario});`;
    return database.executar(instrucaoSql);
}

function buscarFeedback() {
    var instrucaoSql = `
    select sum(case when estrela = 1 then 1 else 0 end) as uma_estrelas, 
	sum(case when estrela = 2 then 1 else 0 end) as duas_estrelas,
	sum(case when estrela = 3 then 1 else 0 end) as tres_estrelas,
	sum(case when estrela = 4 then 1 else 0 end) as quatro_estrelas,
	sum(case when estrela = 5 then 1 else 0 end) as cinco_estrelas 
    from feedback;
    `;
    return database.executar(instrucaoSql);
}

function buscarUsuario(idUsuario) {
    var instrucaoSql = `select * from feedback where fkUsuario = (${idUsuario});`;
    return database.executar(instrucaoSql);
}

function buscarFeedbackFeito(idUsuario) {
    var instrucaoSql = `select estrela as feedbackFeito from feedback join usuario on fkUsuario = idUsuario where fkUsuario = ${idUsuario};`;
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirFeedback,
    buscarFeedback,
    buscarUsuario,
    buscarFeedbackFeito
};
