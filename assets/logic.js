//Load the page prior to launching JS logic
window.onload=function(){

//Array of questions with another array of answers
var questionArray = [
    {question: "What is 1+1?", correctAnswer: "2", answers: ["2", "3", "4", "1"]},
    {question: "What is 2 x 2?", correctAnswer: "4", answers: ["4", "5", "6", "7"]},
]

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

//Array for the buttons to assist in randomizing
var btnArray = [firstBtn, secondBtn, thirdBtn, fourthBtn];

//Console logs to test
console.log(questionArray[0].question);

function displayQuestion(i){
    var display = questionArray[i].question;
    quest.innerHTML=display;

}

//Random number non-repeating 
randomArray = [];
for(var i = 0, randomArray = []; i < 4; i++){
    randomArray[i] = i;
}

randomArray.sort(function(){
    return Math.random() - 0.5;
});

console.log(randomArray);

function displayButtons(){
    for(i = 0; i < btnArray.length; i++){
        btnArray[i].innerHTML = questionArray[0].answers[randomArray[i]];
    }
}

//Timer
var time = 10;
timeDiv.innerHTML=time;
function timer(){
    var int = setInterval(function(){
        time--; 
        timeDiv.innerHTML=time;
        console.log(time);
    }, 1000);
    setTimeout(function(){
        clearInterval(int)
    }, 10000);
}


timer();


displayButtons();

// console.log(randomArray);
// displayBtns();
displayQuestion(0);
};