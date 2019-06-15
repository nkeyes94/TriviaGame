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

//Create a function to display the question and answer
function displayQuestion(){
    
}