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

const feedbackText = document.querySelector(".feedback-text");
const feedbackStar1 = document.getElementById("feedbackStar1");
const feedbackStar2 = document.getElementById("feedbackStar2");
const feedbackStar3 = document.getElementById("feedbackStar3");
const feedbackStar4 = document.getElementById("feedbackStar4");
const feedbackStar5 = document.getElementById("feedbackStar5");
const salvarBtn = document.getElementById("salvarBtn");
let starsNumber = 0;
let jaVotou = false;

function votarUmaEstrela() {
  if (!jaVotou) {
    starsNumber = 1;
    feedbackStar1.src = "../assets/img/full-star.png";
    feedbackStar2.src = "../assets/img/star.png";
    feedbackStar3.src = "../assets/img/star.png";
    feedbackStar4.src = "../assets/img/star.png";
    feedbackStar5.src = "../assets/img/star.png";
  }
}

function votarDuasEstrela() {
  if (!jaVotou) {
    starsNumber = 2;
    feedbackStar1.src = "../assets/img/full-star.png";
    feedbackStar2.src = "../assets/img/full-star.png";
    feedbackStar3.src = "../assets/img/star.png";
    feedbackStar4.src = "../assets/img/star.png";
    feedbackStar5.src = "../assets/img/star.png";
  }
}

function votarTresEstrela() {
  if (!jaVotou) {
    starsNumber = 3;
    feedbackStar1.src = "../assets/img/full-star.png";
    feedbackStar2.src = "../assets/img/full-star.png";
    feedbackStar3.src = "../assets/img/full-star.png";
    feedbackStar4.src = "../assets/img/star.png";
    feedbackStar5.src = "../assets/img/star.png";
  }
}

function votarQuatroEstrela() {
  if (!jaVotou) {
    starsNumber = 4;
    feedbackStar1.src = "../assets/img/full-star.png";
    feedbackStar2.src = "../assets/img/full-star.png";
    feedbackStar3.src = "../assets/img/full-star.png";
    feedbackStar4.src = "../assets/img/full-star.png";
    feedbackStar5.src = "../assets/img/star.png";
  }
}

function votarCincoEstrela() {
  if (!jaVotou) {
    starsNumber = 5;
    feedbackStar1.src = "../assets/img/full-star.png";
    feedbackStar2.src = "../assets/img/full-star.png";
    feedbackStar3.src = "../assets/img/full-star.png";
    feedbackStar4.src = "../assets/img/full-star.png";
    feedbackStar5.src = "../assets/img/full-star.png";
  }
}

function saveFeedback() {
  if (starsNumber > 0) {
    irDash.innerHTML = `<button class="btn" onclick="dashboard()">Ir para DashBoard</button>`;

    feedbackText.textContent = "Jogo avaliado com sucesso!";
    salvarBtn.style.display = "none";
    jaVotou = true;

    fetch(`/feedback/inserirFeedback/${idUsuario}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        estrelaServer: starsNumber,
      }),
    })
      .then(function (resposta) {
        console.log("ESTOU NO THEN DO saveFeedback()!");
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
