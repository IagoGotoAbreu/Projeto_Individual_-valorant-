var database = require("../database/config")

function autenticar(email, senha) {
    var instrucaoSql = `SELECT idUsuario, nickname, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';`;
    return database.executar(instrucaoSql);
}

function cadastrar(nickname, email, senha) {
    var instrucaoSql = `INSERT INTO usuario (nickname, email, senha) VALUES ('${nickname}', '${email}', '${senha}');`;
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};