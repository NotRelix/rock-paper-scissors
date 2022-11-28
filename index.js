Afunction computerSelection()
{
    let randomNumber = getComputerChoice();
    if (randomNumber === 1)
        return "rock";
    else if (randomNumber === 2)
        return "paper";
    else
        return "scissor";
}

function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    return randomNumber;
}

function playerSelection()
{
    let guess = prompt("Rock, Paper, Scissor? ");
    return guess.toLowerCase();
}

function game(player, computer)
{
    if (player === "rock" && computer === "scissor")
        return "You win! Rock beats Scissor";
    else if (player === "paper" && computer === "rock")
        return "You win! Paper beats Rock";
    else if (player === "scissor" && computer === "paper")
        return "You win! Scissor beats Paper";

    else if (player === computer)
        return "Draw";
    
    else if (computer === "rock")
        return "You lose! Paper beats Rock";
    else if (computer === "paper")
        return "You lose! Scissor beats Paper";
    else
        return "You lose! Rock beats Scissor";
}

let player = playerSelection();
let computer = computerSelection();

console.log(`${player} vs ${computer}`)

console.log(game(player, computer));