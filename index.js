// declared varaibales 
let quizDiv = document.querySelector("#quiz");
let questionDiv = document.querySelector("#questions");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");

//Questions 
let questions = [
    {
        question: "Which of the following are the most commonly use data types in JavaScript?",
        answers: ["String, Number, boolean", "Symbol, BigInt, Null  ", "Number, Boolean, Undefined ", "None of the above"],
        correctAnswer: 0
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript? ",
        answers: ["carr.pop()", "arr.push() ", "arr.shift()", "arr.unshift()"],
        correctAnswer: 1
    },
    {
        question: "Classes in JavaScript can be describe as? ",
        answers: ["Arrays", "Objects ", "Blue prints", "Virtual classrooms"],
        correctAnswer: 2
    },
]

// what is this?
// this is the current position of the question that we are on
let currentQuestion = 0

renderQuestion();

// Display questions and answers while loging the correct answer to the console for the current question.
function renderQuestion() {

    let questionText = questions[currentQuestion].question;
    // console.log(questionText)
    questionDiv.innerHTML = questionText;

    let firstAnswer = questions[currentQuestion].answers[0];
    // console.log(firstAnswer);
    questionButton1.innerHTML = firstAnswer;

    let secondAnswer = questions[currentQuestion].answers[1];
    // console.log(secondAnswer);
    questionButton2.innerHTML = secondAnswer;

    let thirdAnswer = questions[currentQuestion].answers[2];
    // console.log(thirdAnswer);
    questionButton3.innerHTML = thirdAnswer;

    let forthAnswer = questions[currentQuestion].answers[3];
    // console.log(forthAnswer);
    questionButton4.innerHTML = forthAnswer;
}


function checkAnswer(answerClicked) {
    // console.log(answerClicked);

    let correctAnswerNumber = questions[currentQuestion].correctAnswer;
    // console.log(correctAnswer);

    let isCorrectAnswer = answerClicked === correctAnswerNumber;

    if (isCorrectAnswer) {
        console.log("Correct Answer")
    } else {
        console.log("Wrong Answer")
    }

    currentQuestion++
    renderQuestion();
}

// //User Input  vs correct answer 
// quizDiv.addEventListener("click", function (event) {
//     if (event.target.matches("button")) {
//         // console.log("clicked!")
//         // console.log("value", event.target.innerText);
//         // console.log("correct answer:" + questions[currentQuestion].correctAnswer);

//         currentQuestion++
//         renderQuestion();
//     }

//     // timer 
//     let timer = 90
//     let timerid = setInterval(function () {
//         timer -= 1
//         // console.log(timer)
//     }, 1000)

//     //End Quiz

//     // Input Student Initals
//     function updateInitials() {
//         let userText = document.getElementById('userInitials').value;
//         document.getElementById('userInitials').value = "";
//         highScores.push(' ' + userText);
//         document.getElementById('enterInitials').textContent = highScores;
//         // console.log(highScores)
//     }



//     //sumbmit






//     //View high scores



// })





