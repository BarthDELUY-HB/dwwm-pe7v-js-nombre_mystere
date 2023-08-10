"use strict";

class Game {
    secret;
    turn;
    start(playerName) {
        console.log(`Bienvenue dans le jeu du nombre mystère, ${playerName}!`);
        inputList = [];
        this.secret = getRandomNumber();
        this.turn = 0;
        console.log("nombre mystère : " + this.secret);

        let hasFoundNumber = false;

        while (!hasFoundNumber) {
            this.turn++;
            hasFoundNumber = makePlayerGuess(this.secret);
        }

        sayMessage(`Fin de la partie en ${this.turn} essais...`);
    }
}