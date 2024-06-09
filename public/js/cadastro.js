AOS.init();

function home() {
  window.location.href = "index.html";
}

function fechar() {
  if (ipt_senha.type == "password") {
    ipt_senha.type = "text";
    button_fechar.innerHTML =
      '<img id="img_fechar" src="./assets/img/olho-fechado.png">';
  } else {
    ipt_senha.type = "password";
    button_fechar.innerHTML =
      '<img id="img_fechar" src="./assets/img/olho-aberto.png">';
  }
}
function ocultar() {
  if (input_senha.type == "password") {
    input_senha.type = "text";
    button_ocultar.innerHTML =
      '<img id="img_ocultar" src="./assets/img/olho-fechado.png">';
  } else {
    input_senha.type = "password";
    button_ocultar.innerHTML =
      '<img id="img_ocultar" src="./assets/img/olho-aberto.png">';
  }
}

function validar() {
  var nickname = input_nickname.value;
  var email = input_email.value;
  var senha = ipt_senha.value;
  var confirmacaoSenha = input_senha.value;
  var validado = true;

  if (nickname.length < 3) {
    input_nickname.style = "border: solid red";
    validacao_nickname.innerHTML = "Seu nick tem que ter mais de 2 caracteres";
    validado = false;
  }
  if (email.indexOf("@") < 0 || email.indexOf(".") < 0 || email.length < 9) {
    input_email.style = "border: solid red";
    validacao_email.innerHTML = "Seu email tem que ter um @ e um .";
    validado = false;
  }
  if (senha.length < 6) {
    ipt_senha.style = "border: solid red";
    validacao_senha.innerHTML = "Sua senha tem que ter mais de 5 caracteres";
    validado = false;
  }
  if (confirmacaoSenha != senha) {
    input_senha.style = "border: solid red";
    validacao_confirmar_senha.innerHTML =
      "A confirmação tem que ser igual a senha";
    validado = false;
  }
  if (validado) {
    cadastrar();
    document.getElementById("coluna-2").innerHTML =
      '<span style="font-size: 22px; text-align: center">Cadastro Realizado com Sucesso!<br>Redirecionando para a Tela de Login...</span>';
  }
}

function cadastrar() {
  var nicknameVar = input_nickname.value;
  var emailVar = input_email.value;
  var senhaVar = ipt_senha.value;

  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nicknameServer: nicknameVar,
      emailServer: emailVar,
      senhaServer: senhaVar,
    }),
  }).then(function () {
    setTimeout(() => {
      window.location = "./login.html";
    }, "2000");
  });
}