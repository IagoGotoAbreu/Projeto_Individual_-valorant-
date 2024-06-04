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


function validar() {
    var email = input_email.value;
    var senha = input_senha.value;
    var validado = true

    if (email == "" || senha == "") {
        nExiste.innerHTML = `<div class="erro">E-mail e/ou Senha Incorretos!</div>`
        validado = false
    }
    if (validado) {
        entrar()
        document.getElementById("coluna-2").innerHTML = '<span style="font-size: 22px; text-align: center">Login Realizado com Sucesso!<br>Redirecionando para a Dashboard...</span>';
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
                    }, 2000); // apenas para exibir o loading
                    
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