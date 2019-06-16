//Load the page prior to launching JS logic
window.onload=function(){

//Array of questions with another array of answers
var questionArray = [
    {question: "What is 1+1?", correctAnswer: "2", answers: ["2", "3", "4", "1"]},
    {question: "What is 2 x 2?", correctAnswer: "4", answers: ["4", "5", "6", "7"]},
]

//Create a random number generator for selecting random questions
function randomNumber(){
    var randomNum = Math.floor(Math.random() * (1, 4));
    return randomNum;
}

//Grabbing the elements from HTML and creating variables for them
var quest = document.getElementById("question");
var timeDiv = document.getElementById("timeRemaining");
var answerDiv = document.getElementById("answers");
var winTracker = document.getElementById("winrate");
var lossTracker = document.getElementById("lossrate");

//Grabbing the button elements and creating variables for them
//The buttons should be assigned random values from the question array
var firstBtn = document.getElementById("answerOne");
var secondBtn = document.getElementById("answerTwo");
var thirdBtn = document.getElementById("answerThree");
var fourthBtn = document.getElementById("answerFour");

//Console logs to test
console.log(questionArray[0].question);

function displayQuestion(i){
    var display = questionArray[i].question;
    quest.innerHTML=display;
}

displayQuestion(0);
};