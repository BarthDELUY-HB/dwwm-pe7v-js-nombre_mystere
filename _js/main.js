"use strict;"

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 10;

// Liste des propositions
var inputList = [];

function askPlayerName()
{
    return prompt("Quel est votre nom de joueur svp ?");
}

function getRandomNumber()
{
    return (Math.floor(Math.random() * MAX_RANDOM_NUMBER)+1);
}

function askPlayerInput()
{
    let inputMsg = "";
    if (inputList.length > 0){
        inputMsg = "\nVous avez déjà proposé " + inputList.join(",");
    }
    return prompt(`Quelle est votre proposition entre ${MIN_RANDOM_NUMBER} et ${MAX_RANDOM_NUMBER} ?${inputMsg}`);
}

function checkPlayerInput(playerInput, numberToGuess)
{
    if (playerInput > MAX_RANDOM_NUMBER) {
        alert(`On a dit un nombre inférieur ou égal à ${MAX_RANDOM_NUMBER} !!`);
        return false;
    }
    if (playerInput < MIN_RANDOM_NUMBER) {
        alert(`On a dit un nombre supérieur ou égal à ${MIN_RANDOM_NUMBER} !!`);
        return false;
    }
    if (playerInput > numberToGuess) {
        sayMessage(`Votre proposition est plus grande que le nombre mystère !`);
        return false;
    }
    if (playerInput < numberToGuess) {
        sayMessage(`Votre proposition est plus petite que le nombre mystère !`);
        return false;
    }
    if (playerInput == numberToGuess) {
        sayMessage(`Félicitations,le nombre mystère est bien ${numberToGuess} !`);
        return true;
    }
    return false;
}

function makePlayerGuess(numberToGuess)
{
    let playerInput = askPlayerInput();
    console.log("le joueur a saisi : " + playerInput);
    inputList.push(playerInput);
    return checkPlayerInput(playerInput, numberToGuess);
}


function askPlayerToPlayAgain()
{
    return confirm("Voulez-vous faire une nouvelle partie ?");
}

function main()
{
    sayHello();

    let player = new Player();
    player.askPlayerName();
    let game = new Game();
    game.player = player;

    let startAGame = true;
    while (startAGame) {
        game.start();
        startAGame = askPlayerToPlayAgain();
    }
    
    sayGoodbye();
}

window.addEventListener('load', main);