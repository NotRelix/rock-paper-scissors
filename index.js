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

function playRound(player, computer)
{
    if (player === "Rock" && computer === "Scissor")
        return "You win! Rock beats Scissor";
    else if (player === "Paper" && computer === "Rock")
        return "You win! Paper beats Rock";
    else if (player === "Scissor" && computer === "Paper")
        return "You win! Scissor beats Paper";

    else if (player === computer)
        return "Draw";
    
    else if (computer === "Rock")
        return "You lose! Paper beats Rock";
    else if (computer === "Paper")
        return "You lose! Scissor beats Paper";
    else
        return "You lose! Rock beats Scissor";
}

function game()
{
    for (let i = 0; i < 5; i++)
    {
        let player = playerSelection();
        let computer = computerSelection();
        console.log(`${player} vs ${computer}`)
        console.log(playRound(player, computer));
    }
}

game();