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

function verDadosQuiz(acertos) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", acertos)
    var instrucaoSql = `
        SELECT respostas_certas FROM quiz WHERE fkUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirDadosQuiz,
    verDadosQuiz
};