const choices = document.querySelectorAll(".choice")
const score = document.getElementById("score")
const restart = document.getElementById("restart")
const modal = document.querySelector(".modal")
const result = document.querySelector("#result")

const scoreBoard = {
    player : 0,
    computer : 0
}
function play(e){
    restart.style.display = "inline-block"
    const playerChoice = e.target.id
    const computerChoice = getComputerChoice()

    let winner = getWinner(playerChoice,computerChoice)

    showWinner(winner,computerChoice)
}

function getWinner(c,p){
    if(p===c){
        return "It's a draw"
    }
    else if(p==="rock"){
        if(c==="paper"){
            return "computer"
        }else{
            return "player"
        }
    }
    else if(p==="paper"){
        if(c==="scissor"){
            return "computer"
        }else{
            return "player"
        }
    }
    else if(p==="scissor"){
        if(c==="rock"){
            return "computer"
        }else{
            return "player"
        }
    }
}

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 100)
    if(randomNumber > 45){
        return "rock"
    }else if(randomNumber < 50){
        return "paper"
    }else{
        return "scissors"
    }
}

function showWinner(winner,computerChoice){
if(winner == "player"){
    scoreBoard.player++
    result.innerHTML = `
    <h1 class = "text-winner">You Won</h1>
    <i class = "choice fas fa-hand-${computerChoice} fa-10x"></i>
    `
}
else if(winner == "computer"){
    scoreBoard.computer++
    result.innerHTML = `
    <h1 class = "text-lose">You Lose</h1>
    <i class = "choice fas fa-hand-${computerChoice} fa-10x"></i>
    `
}
else{
    result.innerHTML = `
    <h1>It's a Draw</h1>
    <i class = "choice fas fa-hand-${computerChoice} fa-10x"></i>
    `
}

// Show score
score.innerHTML = `
<p>Player : ${scoreBoard.player}</p>
<p>Computer : ${scoreBoard.computer}</p>
`
modal.style.display = "block"
}

function clearModal(e){
if(e.target == modal){
    modal.style.display = "none"
}
}

function restartGame(){
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    score.innerHTML = `
    <p>Player : 0</p>
    <p>Computer : 0</p>
    `
}

choices.forEach(choice => choice.addEventListener("click",play))
// For clearing the model if it is clicked somewhere out of the result box
window.addEventListener("click",clearModal)

restart.addEventListener("click",restartGame)
