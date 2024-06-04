var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function inserirDadosQuiz(acertos, idUsuario, tempo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function inserir():", acertos, idUsuario, tempo);
    
    // Insira exatamente a query do banco aqui, lembrando da nicknamenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO quiz (respostas_certas, fkUsuario, duracao) VALUES (${acertos}, '${idUsuario}', ${tempo});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosQuizAcertos(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarDadosQuizAcertos(): ", idUsuario)
    var instrucaoSql = `
    select respostas_certas, nickname from quiz join usuario on fkUsuario = idUsuario where fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosQuizOutrosAcertos(idUsuario, limite_dados) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarDadosQuizOutrosAcertos(): ", idUsuario, limite_dados)
    var instrucaoSql = `
    select respostas_certas, nickname from quiz join usuario on fkUsuario = idUsuario where fkUsuario <> ${idUsuario} order by momento desc limit ${limite_dados};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosQuizAcertosRad() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarDadosQuizAcertosRad(): ")
    var instrucaoSql = `
        select count(*) as pontos_rad from quiz where respostas_certas = 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosQuizTempo() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarDadosQuizTempo(): ")
    var instrucaoSql = `
        select count(*) as tempo_rapido from quiz where duracao <= 60;
    `;      
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirDadosQuiz,
    buscarDadosQuizAcertos,
    buscarDadosQuizOutrosAcertos,
    buscarDadosQuizAcertosRad,
    buscarDadosQuizTempo
};