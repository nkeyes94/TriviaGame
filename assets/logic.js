window.onload=function(){
    var winRate = 0;
    var lossRate = 0;
    var timeDiv = document.getElementById("timeRemaining");
    var gameboard = document.getElementById("gameboard");
    var startBtn = document.getElementById("start");
    var wins = document.getElementById("wins");
    var losses = document.getElementById("losses");

    var time = 5;
    timeDiv.innerHTML=time;

    function increaseWR(){
        winRate = winRate + 1;
        wins.innerHTML=winRate;
        console.log("WR Increase");
    }

    function increaseLR(){
        lossRate = lossRate + 1;
        losses.innerHTML=lossRate;
        console.log("LR Increase");
    }
    

    var question = [
        function question(){                //Index 0
            gameboard.innerHTML=" ";
            gameboard.innerHTML="What is 1 + 1?";
            var answers = ["1", "2", "3", "4"];
            var correctAnswer = "2";
            var createBR = document.createElement("BR");
            gameboard.appendChild(createBR);
            
            for(var i = 0; i < answers.length; i++){
                var btn = document.createElement("BUTTON");
                btn.val = answers[i];
                btn.innerHTML=answers[i];
                gameboard.appendChild(btn);
                console.log(btn);
                console.log(btn.val);
                btn.onclick = function(){
                    if(this.val == correctAnswer){
                        alert("Correct!");
                        increaseWR();
                        clearTimeout(TO);
                        console.log("correct");
                    }else{
                        this.disabled=true;
                        increaseLR();
                    }
                };
                console.log(winRate);
                console.log(lossRate);
            }
        },                                 //End of index 0

        function questionTwo(){               //Start of index 1
            gameboard.innerHTML=" ";
            gameboard.innerHTML="What is 2 * 2?";
            var answers = ["1", "2", "3", "4"];
            var correctAnswer = "4";
            var createBR = document.createElement("BR");
            gameboard.appendChild(createBR);
            
            for(var i = 0; i < answers.length; i++){
                var btn = document.createElement("BUTTON");
                btn.val = answers[i];
                btn.innerHTML=answers[i];
                gameboard.appendChild(btn);
                console.log(btn);
                console.log(btn.val);
                btn.onclick = function(){
                    if(this.val == correctAnswer){
                        alert("Correct!");
                        increaseWR();
                        clearInterval(timer);
                        console.log("correct");
                    }else{
                        this.disabled=true;
                        increaseLR();
                    }
                }
                console.log(winRate);
                console.log(lossRate);
            }
        },                                 //End of index 1

        function questionThree(){               //Start of index 2
            gameboard.innerHTML=" ";
            gameboard.innerHTML="When was America founded?";
            var answers = ["1945", "1832", "1776", "1743"];
            var correctAnswer = "1776";
            var createBR = document.createElement("BR");
            gameboard.appendChild(createBR);
            
            for(var i = 0; i < answers.length; i++){
                var btn = document.createElement("BUTTON");
                btn.val = answers[i];
                btn.innerHTML=answers[i];
                gameboard.appendChild(btn);
                console.log(btn);
                console.log(btn.val);
                btn.onclick = function(){
                    if(this.val == correctAnswer){
                        alert("Correct!");
                        increaseWR();
                        console.log("correct");
                    }else{
                        this.disabled=true;
                        increaseLR();
                    }
                }
                console.log(winRate);
                console.log(lossRate);
            }
        },                               //End of index 2
    ];
    var interval = 5000;
    startBtn.addEventListener("click", function(){
        console.log("start btn");
        question.forEach(function(el, index){
            setTimeout(function(){
                question[index]();
                console.log("el = "+ el);
                time = 5;
                function timer(){
                    var int = setInterval(function(){
                        timeRunning = true;
                        time--; 
                        timeDiv.innerHTML=time;
                        if(time == 0){
                            clearInterval(int);
                        }
                        console.log(time);
                        }, 1000);
                    setTimeout(function(){
                        timeRunning = false;
                        clearInterval(int)
                        }, 5000);
                    }
                    timer();
            }, interval * index)
        })
        });

}
