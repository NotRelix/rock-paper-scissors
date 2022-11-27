function getComputerChoice()
{
    let guess = Math.floor(Math.random() * 3 + 1);
    return guess;
}

function playerSelection()
{
    let guess = prompt("Rock, Paper, Scissor? ");
    return guess.toLowerCase();
}

console.log(playerSelection());