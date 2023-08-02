"use strict;"

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 10;


function askPlayerName()
{
    return prompt("Quel est votre nom de joueur svp ?");
}

function getRandomNumber()
{
    return 7;
}

function askPlayerInput()
{
    return prompt(`Quelle est votre proposition entre ${MIN_RANDOM_NUMBER} et ${MAX_RANDOM_NUMBER} ?`);
}

function makePlayerGuess(numberToGuess)
{
    let playerInput = askPlayerInput();
    console.log("le joueur a saisi : " + playerInput);
    
}

function startGame(playerName)
{
    console.log(`Bienvenue dans le jeu du nombre mystère, ${playerName}!`);
    let numberToGuess = getRandomNumber();
    console.log("nombre mystère : " + numberToGuess);

    makePlayerGuess(numberToGuess);

}

function main()
{
    sayHello();

    let playerName = askPlayerName();
    startGame(playerName);

    sayGoodbye();
}

main();