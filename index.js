function getComputerChoice()
{
    let guess = Math.floor(Math.random() * 3 + 1);
    return guess;
}

console.log(getComputerChoice());