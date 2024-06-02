AOS.init();

function home() {
    window.location.href = "index.html"
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

function entrar() {
    // aguardar();

    var emailVar = input_email.value;
    var senhaVar = input_senha.value;

    if (emailVar == "" || senhaVar == "") {
        nExiste.innerHTML = `<div class="erro">E-mail e/ou Senha Incorretos!</div>`
    }
    else {
        
        
        console.log("FORM LOGIN: ", emailVar);
        console.log("FORM SENHA: ", senhaVar);
        
        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")
            
            if (resposta.ok) {
                console.log(resposta);
                
                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.id;
                    // sessionStorage.AQUARIOS = JSON.stringify(json.aquarios)
                    
                    setTimeout(function () {
                        window.location = "./dashboard/quiz.html";
                    }, 500); // apenas para exibir o loading
                    
                });
                
            } else {
                
                nExiste.innerHTML = `<div class="erro">E-mail e/ou Senha Incorretos!</div>`
                
                resposta.text().then(texto => {
                    console.error(texto);
                    // finalizarAguardar(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
    }
}