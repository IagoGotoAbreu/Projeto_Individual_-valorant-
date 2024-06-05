var database = require("../database/config");

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function inserirFeedback(estrela, idUsuario) {
    console.log(
        "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function inserir():",
        estrela,
        idUsuario
    );

    // Insira exatamente a query do banco aqui, lembrando da nicknamenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO feedback (estrela, fkUsuario) VALUES (${estrela}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarFeedback() {
    console.log(
        "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function inserir():"
    );

    // Insira exatamente a query do banco aqui, lembrando da nicknamenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
    select sum(case when estrela = 1 then 1 else 0 end) as uma_estrelas, 
	sum(case when estrela = 2 then 1 else 0 end) as duas_estrelas,
	sum(case when estrela = 3 then 1 else 0 end) as tres_estrelas,
	sum(case when estrela = 4 then 1 else 0 end) as quatro_estrelas,
	sum(case when estrela = 5 then 1 else 0 end) as cinco_estrelas 
    from feedback;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUsuario(idUsuario) {
    console.log(
        "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function inserir():",
        idUsuario
    );

    // Insira exatamente a query do banco aqui, lembrando da nicknamenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        select * from feedback where fkUsuario = (${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarFeedbackFeito(idUsuario) {
    console.log(
        "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarFeedbackFeito():"
    );

    // Insira exatamente a query do banco aqui, lembrando da nicknamenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        select estrela as feedbackFeito from feedback join usuario on fkUsuario = idUsuario where fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserirFeedback,
    buscarFeedback,
    buscarUsuario,
    buscarFeedbackFeito
};
