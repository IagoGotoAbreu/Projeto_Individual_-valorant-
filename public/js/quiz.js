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

function selectAnswer() {
    document.querySelectorAll(".answer").forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct")
            totalCorrect++
        } else {
            button.classList.add("incorrect")
        }

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
    <button onclick=window.location.reload() class="button">
    Refazer Quiz
    </button>
    `
}























const questions = [
    {
        question: "Atualmente, existem quantos agentes em valorant?",
        answers: [
            { text: "22", correct: false },
            { text: "24", correct: true },
            { text: "23", correct: false },
            { text: "25", correct: false }
        ]
    },
    {
        question: "Qual é o único agente que nasceu no Brasil?",
        answers: [
            { text: "Astra", correct: false },
            { text: "Phoenix", correct: false },
            { text: "Raze", correct: true },
            { text: "Harbor", correct: false }
        ]
    },
    {
        question: "A agente Jett ela denominada para qual função?",
        answers: [
            { text: "Duelista", correct: true },
            { text: "Controlador", correct: false },
            { text: "Sentinela", correct: false },
            { text: "Iniciador", correct: false }
        ]
    },
    {
        question: "Quanto tempo demora para a spike estourar?",
        answers: [
            { text: "35 segundos", correct: false },
            { text: "40 segundos", correct: true },
            { text: "45 segundos", correct: false },
            { text: "38 segundos", correct: false }
        ]
    },
    {
        question: "Quanto tempo dura um round?",
        answers: [
            { text: "90 segundos", correct: false },
            { text: "110 segundos", correct: false },
            { text: "120 segundos", correct: false },
            { text: "100 segundos", correct: true }
        ]
    },
]