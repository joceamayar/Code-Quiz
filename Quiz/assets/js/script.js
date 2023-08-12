
let quizDiv = document.querySelector("#quiz");

let questionDiv = document.querySelector("#questions");
let questions = [
    {
        question: "Which of the following are the most commonly use data types in JavaScript?",
        answers: ["String, Number, boolean", "Symbol, BigInt, Null  ", "Number, Boolean, Undefined ", "None of the above"],
        correctAnswer: "String, Number, boolean"
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript? ",
        answers: [".shift()", ".push() ", ".pop()", ".unshift()"],
        correctAnswer: ".pop()"
    },
    {
        question: "Classes in JavaScript can be describe as (3)? ",
        answers: ["Arrays", "Objects ", "Blue prints", "Virtual classrooms", "test"],
        correctAnswer: "Blue prints"
    },

    {
        question: "Classes in JavaScript can be describe as (4)? ",
        answers: ["Arrays", "Objects ", "Blue prints", "Virtual classrooms"],
        correctAnswer: "Blue prints"
    },
]
let question = document.querySelector('#questions')

let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let currentQuestion = 0

let answerContainer = document.querySelector("#answer-container");
let correctAnswer = questions[currentQuestion].correctAnswer;

let startContainer = document.querySelector("#start-container")
let startBtn = document.querySelector("#start-btn")

let timeEl = document.querySelector("#time-el")
let startingTime = 100

// Start Quiz by clicking on the start button 
startBtn.addEventListener('click', startQuiz)

// Hide start container and render questions 
function startQuiz() {
    quizDiv.classList.remove("hide")
    startContainer.setAttribute("class", "hide")
    startTimer()
    renderCurrentQuestion();
}

//Timer starts coutn down. Quiz ends once the timer reaches 0 or there is no more questions 
function startTimer() {
    timeEl.textContent = startingTime

    let timeInterval = setInterval(function () {
        if (startingTime === 0 || currentQuestion === questions.length) {
            clearInterval(timeInterval)
            endQuiz()
        }
        startingTime--
        timeEl.textContent = startingTime
    }, 1000)
}

// Display questions and answers while loging the correct answer to the console for the current question.
function renderCurrentQuestion() {
    answerContainer.textContent = ''
    if (currentQuestion === questions.length) {
        return
    }
    let questionText = questions[currentQuestion].question;
    // console.log(questionText)
    questionDiv.textContent = questionText;

    for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
        let answerbtn = document.createElement("button")
        answerbtn.textContent = questions[currentQuestion].answers[i]
        answerbtn.setAttribute('id', 'answer' + i + 1)
        answerContainer.append(answerbtn)
    }
}

function endQuiz() {
    quizDiv.classList.add("hide")
}

quizDiv.addEventListener("click", function (event) {
    let userAnswer = event.target;

    if (userAnswer.matches(correctAnswer)) {
        // userAnswer.textContent = "Correct Answer!";
        console.log("correct");
    }
    else {
        // userAnswer.textContent = "Incorrect Answer";
        console.log('incorrect');
        startingTime -= 20
    }

    currentQuestion++
    renderCurrentQuestion()
});












