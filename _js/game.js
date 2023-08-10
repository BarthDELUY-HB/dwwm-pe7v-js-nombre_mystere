"use strict";

class Game {
    player;
    secret;
    turn;
    start() {
        console.log(`Bienvenue dans le jeu du nombre mystère, ${this.player.pseudo}!`);
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