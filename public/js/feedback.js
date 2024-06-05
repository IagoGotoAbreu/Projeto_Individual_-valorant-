function quiz() {
  window.location.href = "./quiz.html";
}
function feedback() {
  window.location.href = "./feedback.html";
}
function dashboard() {
  window.location.href = "./dashboard.html";
}
function sair() {
  window.location.href = "../index.html";
}

const usuario = sessionStorage.NOME_USUARIO;
menuNickname.innerHTML = usuario;

var idUsuario = sessionStorage.ID_USUARIO;

const texto = document.querySelector(".texto");
const estrela1 = document.getElementById("estrela1");
const estrela2 = document.getElementById("estrela2");
const estrela3 = document.getElementById("estrela3");
const estrela4 = document.getElementById("estrela4");
const estrela5 = document.getElementById("estrela5");
const salvarBtn = document.getElementById("salvarBtn");
let estrelaNumber = 0;
let jaVotou = false;

function votarUmaEstrela() {
  if (!jaVotou) {
    estrelaNumber = 1;
    estrela1.src = "../assets/img/full-star.png";
    estrela2.src = "../assets/img/star.png";
    estrela3.src = "../assets/img/star.png";
    estrela4.src = "../assets/img/star.png";
    estrela5.src = "../assets/img/star.png";
  }
}

function votarDuasEstrela() {
  if (!jaVotou) {
    estrelaNumber = 2;
    estrela1.src = "../assets/img/full-star.png";
    estrela2.src = "../assets/img/full-star.png";
    estrela3.src = "../assets/img/star.png";
    estrela4.src = "../assets/img/star.png";
    estrela5.src = "../assets/img/star.png";
  }
}

function votarTresEstrela() {
  if (!jaVotou) {
    estrelaNumber = 3;
    estrela1.src = "../assets/img/full-star.png";
    estrela2.src = "../assets/img/full-star.png";
    estrela3.src = "../assets/img/full-star.png";
    estrela4.src = "../assets/img/star.png";
    estrela5.src = "../assets/img/star.png";
  }
}

function votarQuatroEstrela() {
  if (!jaVotou) {
    estrelaNumber = 4;
    estrela1.src = "../assets/img/full-star.png";
    estrela2.src = "../assets/img/full-star.png";
    estrela3.src = "../assets/img/full-star.png";
    estrela4.src = "../assets/img/full-star.png";
    estrela5.src = "../assets/img/star.png";
  }
}

function votarCincoEstrela() {
  if (!jaVotou) {
    estrelaNumber = 5;
    estrela1.src = "../assets/img/full-star.png";
    estrela2.src = "../assets/img/full-star.png";
    estrela3.src = "../assets/img/full-star.png";
    estrela4.src = "../assets/img/full-star.png";
    estrela5.src = "../assets/img/full-star.png";
  }
}

function salvarFeedback() {
  if (estrelaNumber > 0) {
    irDash.innerHTML = `<button class="btn" onclick="dashboard()">Ir para DashBoard</button>`;

    texto.textContent = "Jogo avaliado com sucesso!";
    salvarBtn.style.display = "none";
    jaVotou = true;

    fetch(`/feedback/inserirFeedback/${idUsuario}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        estrelaServer: estrelaNumber,
      }),
    })
      .then(function (resposta) {
        console.log("ESTOU NO THEN DO salvarFeedback()!");
        console.log(resposta);

        if (resposta.ok) {
          console.log(resposta);

          resposta.json().then((json) => {
            console.log(json);
            console.log(JSON.stringify(json));
          });
        } else {
          console.log("Houve um erro ao cadastrar feedback");

          resposta.text().then((texto) => {
            console.error(texto);
          });
        }
      })
      .catch(function (erro) {
        console.log(erro);
      });

    return false;
  }
}


var feedbackVotado = 0;
pegarFeedback()
function pegarFeedback() {
  fetch(`/feedback/buscarFeedbackFeito/${idUsuario}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN pegarFeedbackFeito()!");
      console.log(resposta);

      if (resposta.ok) {
        return resposta.json();
      } else {
        console.log("Houve um erro ao buscar os dados");
        return resposta.text();
      }
    })
    .then(function (dados) {
      console.error(dados);
      console.log(dados);
      feedbackVotado = dados[0].feedbackFeito;
      if(feedbackVotado == 1){
        votacaoFeita();
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });
}

function votacaoFeita() {
  // document.getElementById("containerDentro")

  containerDentro.innerHTML = `
    <p class="texto">Você já votou!</p>
                
    <div class="estrelas-container">
    <img onclick="votarUmaEstrela()" id="estrela1" src="../assets/img/star.png"
    data-value="1">
    <img onclick="votarDuasEstrela()" id="estrela2" src="../assets/img/star.png"
    data-value="2">
    <img onclick="votarTresEstrela()" id="estrela3" src="../assets/img/star.png"
    data-value="3">
    <img onclick="votarQuatroEstrela()" id="estrela4" src="../assets/img/star.png"
    data-value="4">
    <img onclick="votarCincoEstrela()" id="estrela5" src="../assets/img/star.png"
    data-value="5">
    </div>
    
    <button class="btn" onclick="dashboard()">Ir para DashBoard</button>
    `
}
