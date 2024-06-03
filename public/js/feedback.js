function quiz(){
    window.location.href = "./quiz.html"
}
function feedback(){
    window.location.href = "./feedback.html"
}
function dashboard(){
    window.location.href = "./dashboard.html"
}
function sair(){
    window.location.href = "../index.html"
}

const idUsuario = sessionStorage.NOME_USUARIO;
menuNickname.innerHTML = idUsuario;

const feedbackText = document.querySelector(".feedback-text");
const feedbackStar1 = document.getElementById("feedbackStar1");
const feedbackStar2 = document.getElementById("feedbackStar2");
const feedbackStar3 = document.getElementById("feedbackStar3");
const feedbackStar4 = document.getElementById("feedbackStar4");
const feedbackStar5 = document.getElementById("feedbackStar5");
const rateBtn = document.getElementById("rateBtn");
let starsNumber = 0;
let controle = false;

function setStarNumber(star) {
    const starValue = star.getAttribute("data-value");

    if (!controle) {
        if (starValue == 1) {
            starsNumber = 1;
            feedbackStar1.src = "../assets/img/full-star.png";
            feedbackStar2.src = "../assets/img/star.png";
            feedbackStar3.src = "../assets/img/star.png";
            feedbackStar4.src = "../assets/img/star.png";
            feedbackStar5.src = "../assets/img/star.png";
        } else if (starValue == 2) {
            starsNumber = 2;
            feedbackStar1.src = "../assets/img/full-star.png";
            feedbackStar2.src = "../assets/img/full-star.png";
            feedbackStar3.src = "../assets/img/star.png";
            feedbackStar4.src = "../assets/img/star.png";
            feedbackStar5.src = "../assets/img/star.png";
        } else if (starValue == 3) {
            starsNumber = 3;
            feedbackStar1.src = "../assets/img/full-star.png";
            feedbackStar2.src = "../assets/img/full-star.png";
            feedbackStar3.src = "../assets/img/full-star.png";
            feedbackStar4.src = "../assets/img/star.png";
            feedbackStar5.src = "../assets/img/star.png";
        } else if (starValue == 4) {
            starsNumber = 4;
            feedbackStar1.src = "../assets/img/full-star.png";
            feedbackStar2.src = "../assets/img/full-star.png";
            feedbackStar3.src = "../assets/img/full-star.png";
            feedbackStar4.src = "../assets/img/full-star.png";
            feedbackStar5.src = "../assets/img/star.png";
        } else {
            starsNumber = 5;
            feedbackStar1.src = "../assets/img/full-star.png";
            feedbackStar2.src = "../assets/img/full-star.png";
            feedbackStar3.src = "../assets/img/full-star.png";
            feedbackStar4.src = "../assets/img/full-star.png";
            feedbackStar5.src = "../assets/img/full-star.png";
        }
    }
}

function saveFeedback() {
    if (starsNumber > 0) {
        irDash.innerHTML = `<button class="btn" onclick="dashboard()">Ir para DashBoard</button>`

        feedbackText.textContent = "Jogo avaliado com sucesso!";
        rateBtn.style.display = "none";
        controle = true;

        fetch(`/feedback/inserirFeedback/${idUsuario}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                estrelaServer: starsNumber
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO saveFeedback()!")
            console.log(resposta);
    
            if (resposta.ok) {
                console.log(resposta);
    
                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                });
    
            } else {
    
                console.log("Houve um erro ao cadastrar feedback");
    
                resposta.text().then(texto => {
                    console.error(texto);
                });
            }
    
        }).catch(function (erro) {
            console.log(erro);
        })
    
        return false;
    }
}

window.addEventListener("load", () => {
    //get the player feedback stars
    fetch(`/feedback/buscarUsuario/${idUsuario}`)
        .then(res => {
            res.json().then(res => {
                if (res.length > 0) {
                    starsNumber = res[0].estrelas;
                }
            });
        });
});