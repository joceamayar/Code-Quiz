// declared varaibales 
let quizDiv = document.querySelector("#quiz");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");


//Questions 

let questions = [{ question: "Which of the following are the most commonly use data types in JavaScript?", answers: ["String, Number, boolean", "Symbol, BigInt, Null  ", "Number, Boolean, Undefined ", "None of the above"], correctAnswer: [0] },
{ question: "Which method is used to remove the last element from an array in JavaScript? ", answers: ["carr.pop()", "arr.push() ", "arr.shift()", "d. arr.unshift()"], correctAnswer: [1] },
{ question: "Classes in JavaScript can be describe as? ", answers: ["Arrays", "Objects ", "Blue prints", "Virtual classrooms"], correctAnswer: [2] }
]

let currentQuestion = 0

renderQuestion();

function renderQuestion() {

    console.log(questions[currentQuestion].question)
    questionButton1.textContent = questions[currentQuestion].answers[0];
    console.log(questions[currentQuestion].answers[1])
    console.log(questions[currentQuestion].answers[2])
    console.log(questions[currentQuestion].answers[3])
    console.log("correct answer" + questions[currentQuestion].correctAnswer)
}

quizDiv.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        console.log("clicked!")
        console.log("value", event.target.innerText);
        console.log("correct answer:" + questions[currentQuestion].correctAnswer);


        currentQuestion++
        renderQuestion();

    }
// timer 
let timer = 90
let timerid = setInterval(function () {

    timer -= 1
    console.log(timer)

}, 1000)



// Input Student Initals
function updateInitials(){
    let userText = document.getElementById('userInitials').value;
    document.getElementById('userInitials').value = "";
    highScores.push(' '+ userText);
    document.getElementById('enterInitials').textContent =highScores;
    console.log(highScores)
}

})


//when the quiz ends call this funtion and pass the value 
// clearInterval(timerid)

//currentQuestion = 0 
// store in local storage the time and their initials. 

//click event lisenner, put the type of the event and run in the 
//event buboling up the tree. 
//capture goes inside out 




