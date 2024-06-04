const $startGameButton = document.querySelector(".start_quiz");
const $questionsContainer = document.querySelector(".questions_container");
const $answersContainer = document.querySelector(".answers_container")
const $questionText = document.querySelector(".question")
const $nextQuestionButton = document.querySelector(".next_question")

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

let currentQuestionIndex = 0
let totalCorrect = 0


function startGame() {
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions.length === currentQuestionIndex) {
        return finishGame()
    }

    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnwer = document.createElement("button")
        newAnwer.classList.add("button", "answer")
        newAnwer.textContent = answer.text
        if (answer.correct) {
            newAnwer.dataset.correct = answer.correct
        }
        $answersContainer.appendChild(newAnwer)

        newAnwer.addEventListener("click", selectAnswer)
    })
}

function resetState() {
    while ($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild)
    }

    $nextQuestionButton.classList.add("hide")
}

var controle_acertos = 0
function selectAnswer(event) {
    var answerClicked = event.target;

    if (answerClicked.dataset.correct) {
        answerClicked.classList.add("correct");
        totalCorrect++
        controle_acertos++
    } else {
        answerClicked.classList.add("incorrect");
    }

    document.querySelectorAll(".answer").forEach(button => {
        button.disabled = true
    })

    $nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestion = questions.length
    const acertos = Math.floor(totalCorrect * 100 / totalQuestion)

    let mensagem = ""

    switch (true) {
        case (acertos == 100):
            mensagem = 'Radiante <img src="../assets/rank/radiante.png" style="width:40px; height:40px;">'
            break
        case (acertos == 90):
            mensagem = 'Imortal <img src="../assets/rank/imortal.png" style="width:50px; height:50px;">'
            break
        case (acertos == 80):
            mensagem = 'Ascendente <img src="../assets/rank/ascendente.png" style="width:40px; height:40px;">'
            break
        case (acertos == 70):
            mensagem = 'Diamante <img src="../assets/rank/diamante.png" style="width:40px; height:40px;">'
            break
        case (acertos == 60):
            mensagem = 'Platina <img src="../assets/rank/platina.png" style="width:40px; height:40px;">'
            break
        case (acertos == 50):
            mensagem = 'Ouro <img src="../assets/rank/ouro.png" style="width:50px; height:50px;">'
            break
        case (acertos == 40):
            mensagem = 'Prata <img src="../assets/rank/prata.png" style="width:50px; height:50px;">'
            break
        case (acertos == 30):
            mensagem = 'Bronze <img src="../assets/rank/bronze.png" style="width:50px; height:50px;">'
            break
        case (acertos == 20):
            mensagem = 'Ferro <img src="../assets/rank/ferro.png" style="width:40px; height:40px;">'
            break
        case (acertos == 10):
            mensagem = 'Ferro <img src="../assets/rank/ferro.png" style="width:40px; height:40px;">'
            break
        default:
            mensagem = 'Ferro <img src="../assets/rank/ferro.png" style="width:40px; height:40px;">'
    }

    $questionsContainer.innerHTML =
        `
    <p class="final-message">
        Você acertou ${totalCorrect} de ${totalQuestion} questões!
        <span style=''>Você é: ${mensagem}</span>
    </p>
    <div class="last_buttons">
    <button onclick="feedback()" class="button">
    Avaliar Quiz
    </button>
    </div>
    `
    pausar_cronometro()
    cadastrar_respostas()
}

const questions = [
    {
        question: "Pergunta 1/10 - Atualmente, existem quantos agentes em valorant?",
        answers: [
            { text: "22", correct: false },
            { text: "24", correct: true },
            { text: "23", correct: false },
            { text: "25", correct: false }
        ]
    },
    {
        question: "Pergunta 2/10 - Qual é o único agente que nasceu no Brasil?",
        answers: [
            { text: "Astra", correct: false },
            { text: "Phoenix", correct: false },
            { text: "Raze", correct: true },
            { text: "Harbor", correct: false }
        ]
    },
    {
        question: "Pergunta 3/10 - A agente Jett é denominada para qual função?",
        answers: [
            { text: "Duelista", correct: true },
            { text: "Controlador", correct: false },
            { text: "Sentinela", correct: false },
            { text: "Iniciador", correct: false }
        ]
    },
    {
        question: "Pergunta 4/10 - Quanto tempo demora para a spike estourar?",
        answers: [
            { text: "35 segundos", correct: false },
            { text: "40 segundos", correct: true },
            { text: "45 segundos", correct: false },
            { text: "38 segundos", correct: false }
        ]
    },
    {
        question: "Pergunta 5/10 - Quanto tempo dura um round?",
        answers: [
            { text: "90 segundos", correct: false },
            { text: "110 segundos", correct: false },
            { text: "120 segundos", correct: false },
            { text: "100 segundos", correct: true }
        ]
    },
    {
        question: "Pergunta 6/10 - Quanto custa a Vandal?",
        answers: [
            { text: "2950", correct: false },
            { text: "2800", correct: false },
            { text: "2900", correct: true },
            { text: "2850", correct: false }
        ]
    },
    {
        question: "Pergunta 7/10 - Atualmente, existem quantos mapas?",
        answers: [
            { text: "10", correct: true },
            { text: "7", correct: false },
            { text: "9", correct: false },
            { text: "8", correct: false }
        ]
    },
    {
        question: "Pergunta 8/10 - Quando o Valorant foi lançado?",
        answers: [
            { text: "2020", correct: true },
            { text: "2019", correct: false },
            { text: "2021", correct: false },
            { text: "2022", correct: false }
        ]
    },
    {
        question: "Pergunta 9/10 - Qual o único time brasileiro que já ganhou o mundial?",
        answers: [
            { text: "Furia", correct: false },
            { text: "Sentinels", correct: false },
            { text: "MIBR", correct: false },
            { text: "LOUD", correct: true }
        ]
    },
    {
        question: "Pergunta 10/10 - Qual foi o último time que ganhou o GameChangers no cenário inclusivo",
        answers: [
            { text: "B4", correct: false },
            { text: "Liquid", correct: true },
            { text: "LOUD", correct: false },
            { text: "Furia", correct: false }
        ]
    },
]

function feedback() {
    window.location.href = "./feedback.html"
}

var tempo;
function iniciar_cronometro(){
    tempo = 0
    cronometro = setInterval(function(){
        tempo++;
        console.log(tempo)
    }, 1000)
}

function pausar_cronometro(){
    clearInterval(cronometro);
}

function cadastrar_respostas() {
    var idUsuario = sessionStorage.ID_USUARIO

    fetch("/quiz/inserirDadosQuiz", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            respostas_certasServer: controle_acertos,
            idUsuarioServer: idUsuario,
            tempoServer: tempo
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO cadastrar_respostas()!")
        console.log(resposta);

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
            });

        } else {

            console.log("Houve um erro ao tentar realizar o quiz");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;

}