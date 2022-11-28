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
    let output = "";
    if (player === "Rock" && computer === "Scissor") {
        output += "You win! Rock beats Scissor";
        playerScore++;
    }
    else if (player === "Paper" && computer === "Rock") {
        output += "You win! Paper beats Rock";
        playerScore++;
    }
    else if (player === "Scissor" && computer === "Paper") {
        output += "You win! Scissor beats Paper";
        playerScore++;
    }
        
    else if (player === computer)
        output += "Draw";
    
    else if (computer === "Rock") {
        output += "You lose! Paper beats Rock";
        computerScore++;
    }
    else if (computer === "Paper") {
        output += "You lose! Scissor beats Paper";
        computerScore++;
    }
    else {
        output += "You lose! Rock beats Scissor";
        computerScore++;
    }
    
    return output;
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
    if (playerScore > computerScore)
        console.log("Congrats, You Won!");
    else if (playerScore < computerScore)
        console.log("Better luck next time!");
    else
        console.log("Draw!!!");
}

let playerScore = 0;
let computerScore = 0;
game();