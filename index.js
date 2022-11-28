function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let guess = computerSelection(randomNumber);
    return guess;
}

function playerSelection()
{
    let guess = prompt("Rock, Paper, Scissor? ");
    return guess.toLowerCase();
}

function computerSelection(randomNumber)
{
    if (randomNumber === 1)
        return "rock";
    else if (randomNumber === 2)
        return "paper";
    else
        return "scissor";
}

console.log(getComputerChoice());