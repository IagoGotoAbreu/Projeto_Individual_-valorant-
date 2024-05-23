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

function selectAnswer(event) {
    var answerClicked = event.target;

    if (answerClicked.dataset.correct) {
        answerClicked.classList.add("correct");
        totalCorrect++
    } else {
        answerClicked.classList.add("incorrect");
    }

    document.querySelectorAll(".answer").forEach(button => {
        // if (button.dataset.correct) {
        //     button.classList.add("correct")
        // } else {
        //     // button.classList.add("incorrect")
        // }

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
        case (acertos >= 90):
            mensagem = "Excelente"
            break
        case (acertos >= 90):
            mensagem = "Muito Bom"
            break
        case (acertos >= 90):
            mensagem = "Bom"
            break
        default:
            mensagem = "Pode Melhorar"
    }

    $questionsContainer.innerHTML =
        `
    <p class="final-message">
        Você acertou ${totalCorrect} de ${totalQuestion} questões!
        <span>Resultado: ${mensagem}</span>
    </p>
    <div class="last_buttons">
    <button onclick=window.location.reload() class="button">
    Refazer Quiz
    </button>
    <button onclick="dashboard()" class="button">
    Ver na Dashboard
    </button>
    </div>
    `
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

function dashboard(){
    window.location.href = "./dashboard/dashboard.html"
}