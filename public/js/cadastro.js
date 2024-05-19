AOS.init();

function home() {
    window.location.href = "index.html"
}

function fechar() {
    if (ipt_senha.type == "password") {
        ipt_senha.type = "text";
        button_fechar.innerHTML = '<img id="img_fechar" src="./assets/img/olho-fechado.png">';
    } else {
        ipt_senha.type = "password";
        button_fechar.innerHTML = '<img id="img_fechar" src="./assets/img/olho-aberto.png">';
    }
}
function ocultar() {
    if (input_senha.type == "password") {
        input_senha.type = "text";
        button_ocultar.innerHTML = '<img id="img_ocultar" src="./assets/img/olho-fechado.png">';
    } else {
        input_senha.type = "password";
        button_ocultar.innerHTML = '<img id="img_ocultar" src="./assets/img/olho-aberto.png">';
    }
}

function cadastrar() {

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nicknameVar = input_nickname.value;
    var emailVar = input_email.value;
    var senhaVar = ipt_senha.value;
    var confirmacaoSenhaVar = input_senha.value;
    // var empresaVar = listaEmpresas.value
    if (
        nicknameVar == "" ||
        emailVar == "" ||
        senhaVar == "" ||
        confirmacaoSenhaVar == ""
    ) {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML =
            "(Mensagem de erro para todos os campos em branco)";

        finalizarAguardar();
        return false;
    } else {
        //   setInterval(sumirMensagem, 5000);
        // Enviando o valor da nova input
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nicknameServer: nicknameVar,
                emailServer: emailVar,
                senhaServer: senhaVar,
                // empresaServer: empresaVar
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);
                setTimeout(() => {
                    window.location = "./login.html";
                }, "1000");
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
        });
    }
}