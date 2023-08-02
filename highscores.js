
let formEL = ('#highScores-form');
let studentScore  = ("#");
let StudentInitials = ("");

highScoresEL = $('#highScores-list')
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//What is this doing 
for (let i = 0; i < highScores.length; i++) {
    printhiScores([i].initials,highScores[i]."")
}

// print initials and scores
function printhiscores = function (initials,score){
let listEL = 
listEL.addclass("list-group-item").text(list)
listEL.appendTo(highScoresListE1);
}



let quizSummition = function (event){
   event.preventDefault();

   let studentInitials = studentInitialsEL.val();
   let studentScore = studentScoreEL.val();

   if(!studentInitials)
   console.log("Please enter your initials")
   return;

   highScores.push({initials.studentInitials, score.studentScore})
printSkills(studentInitials, score);


   studentInitials.val(" ")
}  




//Some button that saves add
//localStorage.setItem("highScores", JSON.stringify([{"initials": "JA","Score": 100}]))