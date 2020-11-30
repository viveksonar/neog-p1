var readlineSync = require("readline-sync");
var score = 0
var userName = readlineSync.question("Whats your name?: ");

console.log("Welcome " + userName + ", Get ready for the quize\n")

//play function
function play(question,options, answer){
  console.log(question)
  console.log(options)
  var userAnswer = readlineSync.question("Enter Answer number here: ");
  if(userAnswer === answer){
    console.log("right!!!")
    score = score + 1
  }else{
    console.log("Wrong!!!")
  }
  console.log("Your current score is:",score)
  console.log("--------------\n")
}
var questions = [{
  question: 'What is my name ',
  options:"1. Vivek \n2. Tanay \n3. Shubham \n4. Aniket ",
  answer: "1"
  },
  {
  question: "Which is my favorite sad song?",
  options: "1. channa mereya \n2. kabira> \n3. hawaye, \n4. phir kabhi",
  answer: "4"
  },
  {
  question: "Which is my favorite sport?",
  options: "1. Badminton \n2. Cricket \n3. Hockey \n4. Football",
  answer: "3"
  },
  {
  question: "Who is my favorite superhero?",
  options: '1. Batman;\n2. Dr.Strange\n3. IronMan\n4. Flash',
  answer: "2"
  },
  {
  question: "Which programming language is my most favorite ",
  options: "1. Javascript\n2. Python\n3. C++\n4. GO ",
  answer: "4"
  },
  {
  question: 'What do I currently do ',
  options: "1. Intern as Cloud/Devops Enginner\n2. Intern as Software Enginner\n3. Intern as Linux Admistrator\n4. Intern as Product Manager",
  answer: "1"
  }];
var highScore = [
  {
    name: "Vivek",
    score: "10"
  },
  {
    name: "Adrash",
    score: "09"
  }
]
//Loop
for (var i=0; i<questions.length; i++){
  currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.options, currentQuestion.answer);
}

console.log("YAY! You SCORED: ", score);
console.log("Chckout the highscores")

for(var i = 0; i<highScore.length; i++){
  currentPerson = highScore[i]
  console.log(currentPerson.name + " scored " + currentPerson.score + " points")
}