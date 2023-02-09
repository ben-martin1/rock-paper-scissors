const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const playerScoreDiv = document.querySelector('.playerscore');
const computerScoreDiv = document.querySelector('.computerscore');

let computerScore=0;
let playerScore=0;

rock.addEventListener('click', () =>{
    computerChoice('rock');
} )

paper.addEventListener('click', () =>{
    computerChoice('paper');
} )

scissors.addEventListener('click', () =>{
    computerChoice('scissors');
} )

function computerChoice(move)
{
    let x = Math.random() * 3;
    console.log(x);
    let computerMove;
    if(x<1) computerMove="rock";
    if(x>=1 && x<2) computerMove = "scissors";
    if(x>=2) computerMove = "paper";
    evaluateRound(move, computerMove);
}
function evaluateRound(move, computerMove)
{
    if(move == computerMove) return;

    if(move=="rock")
    {
        if(computerMove=="paper") updateScore("computer");
        if(computerMove=="scissors") playerScore++;
    }
    if(move=="paper")
    {
        if(computerMove=="rock") updateScore("player");
        if(computerMove=="scissors") updateScore("computer");
    }
    if(move=="scissors")
    {
        if(computerMove=="rock") updateScore("computer");
        if(computerMove=="paper") updateScore("player");
    }
    console.log("You: "+playerScore+" Computer: "+computerScore);
}
function updateScore(winner)
{
    if(winner == "player") playerScore++; playerScoreDiv.textContent="Your score: "+playerScore;
    if(winner == "computer") computerScore++; computerScoreDiv.textContent="Computer score: "+computerScore;
}