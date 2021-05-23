console.log("Hello")

var userS =0;
var CompS =0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result>p");
const rock = document.getElementById("r");

const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getChoice(){
    const choices= ['r','p','s'];
    const random =(Math.floor(Math.random()*3));
    return choices[random];
}
function convert(choice)
{if (choice =="r")
return "Rock";
if(choice=="p")
return "Paper";
return "Scissor";}

function win(user,computer)
{userS++;

userScore_span.innerHTML =userS;
compScore_span.innerHTML = CompS;
const u = "user".fontsize(3).sub();
const c = "computer".fontsize(3).sub();

result.innerHTML = convert(user) + u + " beats " + convert(computer) + c + ". You win!";
document.getElementById(user).classList.add("green-glow");
setTimeout(function()
{document.getElementById(user).classList.remove("green-glow")},200);

}
function lose(user,comp)
{
    CompS++;

    userScore_span.innerHTML =userS;
    compScore_span.innerHTML = CompS;
    const u = "user".fontsize(3).sub();
const c = "computer".fontsize(3).sub();
    
    result.innerHTML = convert(comp) + c + " beats " + convert(user) + u + ". You lose!";
    document.getElementById(user).classList.add("red-glow");
setTimeout(function()
{document.getElementById(user).classList.remove("red-glow")},200);
    



}

function draw(user,comp)
{       userScore_span.innerHTML =userS;
    compScore_span.innerHTML = CompS;
    const u = "user".fontsize(3).sub();
    const c = "computer".fontsize(3).sub();
    result.innerHTML = convert(comp) + c + " equals " + convert(user) + u + ". It's a draw!";
    document.getElementById(user).classList.add("gray-glow");
    setTimeout(function()
    {document.getElementById(user).classList.remove("gray-glow")},200);
    


}


function game(userChoice)
{
 const CompChoice = getChoice();

 switch(userChoice+CompChoice){

 case "rs":
 case "pr" :
 case "sp" :

   win(userChoice,CompChoice);
   break;

 case "rp":
 case "ps":
 case "sr":
    lose(userChoice,CompChoice);
     break;
 case "rr":
 case "pp":
 case "ss":
     draw(userChoice,CompChoice);
    break;

 }
}
function main(){
rock.addEventListener("click",function(){
    console.log('you clicked on rock');
    game("r");
});

paper.addEventListener("click",function(){
    console.log('you clicked on paper');
    game("p");
});

scissors.addEventListener("click",function(){
    console.log('you clicked on scissor');
    game("s");
});
}
main();