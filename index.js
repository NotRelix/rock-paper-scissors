function computerSelection()
{
    let randomNumber = getComputerChoice();
    if (randomNumber === 1)
        return "Rock";
    else if (randomNumber === 2)
        return "Paper";
    else
        return "Scissor";
}

function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    return randomNumber;
}

function playerSelection()
{
    let guess = prompt("Rock, Paper, Scissor? ");
    guess = guess.charAt(0).toUpperCase() + guess.slice(1).toLowerCase();
    return guess;
}

function playRound(player, computer) {
    if (player === "Rock" && computer === "Scissor") {
        winner.textContent = "You win! Rock beats Scissor";
        playerScore++;
    }
    else if (player === "Paper" && computer === "Rock") {
        winner.textContent = "You win! Paper beats Rock";
        playerScore++;
    }
    else if (player === "Scissor" && computer === "Paper") {
        winner.textContent = "You win! Scissor beats Paper";
        playerScore++;
    }
        
    else if (player === computer)
        winner.textContent = "Draw";
    
    else if (computer === "Rock") {
        winner.textContent = "You lose! Paper beats Rock";
        computerScore++;
    }
    else if (computer === "Paper") {
        winner.textContent = "You lose! Scissor beats Paper";
        computerScore++;
    }
    else {
        winner.textContent = "You lose! Rock beats Scissor";
        computerScore++;
    }
}

function game()
{
    for (let i = 0; i < 5; i++)
    {
        let player = playerSelection();
        let computer = computerSelection();
        console.log(`${player} vs ${computer}`)
        console.log(playRound(player, computer));
        console.log(`Score: ${playerScore} - ${computerScore}`);
    }
}

function gameOver()
{   
    if (playerScore > computerScore) {
        winner.textContent = 'Congrats, You Won!';
        body.style.cssText = 'background-color: lightgreen;';
    }
    else if (playerScore < computerScore) {
        winner.textContent = 'Better luck next time!';
        body.style.cssText = 'background-color: tomato;';
    }
    else {
        winner.textContent = 'Draw!!!';
        body.style.cssText = 'background-color: yellow;';
    }
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const container = document.querySelector('.container');
const tempText = document.querySelector('.temp');
const winnerContainer = document.querySelector('.winner');
const body = document.querySelector('body');

const div = document.createElement('div');
const paraPlayer = document.createElement('p');
const paraComputer = document.createElement('p');
let winner = document.createElement('p');
const picks = document.createElement('h3');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        let player = button.getAttribute('id');
        let computer = computerSelection();

        if (container.contains(tempText)) {
            container.removeChild(tempText);
        }

        if (playerScore >= 5 || computerScore >= 5) {
            // winnerContainer.removeChild(winner);
            playerScore = 0;
            computerScore = 0;
        }

        playRound(player, computer);
        
        div.classList.add('player');
        paraPlayer.textContent = `Player: ${playerScore}`;
        div.appendChild(paraPlayer);
        
        div.classList.add('computer');
        paraComputer.textContent = `Computer: ${computerScore}`;
        div.appendChild(paraComputer);

        div.classList.add('result');
        picks.textContent = `${player} vs ${computer}`;
        div.appendChild(picks);
        
        body.style.cssText = '';

        if (playerScore >= 5 || computerScore >= 5) {
            gameOver();
        }
        winnerContainer.appendChild(winner);
        container.appendChild(div);
    });
});