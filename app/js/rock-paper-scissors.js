////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';
alert('hello')

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var playerMove = prompt("Please choose either rock, paper, or scissors.");

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    var playerMove = prompt("Please choose either rock, paper, or scissors.");
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return playerMove;
}
 var computerMove = randomPlay();
 
function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    var computerMove = randomPlay();
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return computerMove;
}
var playerWins = 0
var computerWins = 0

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        return('Tie');
    } 
    if(playerMove === "rock") {
        if(computerMove === "scissors"){
            playerWins += 1;
            return('rock wins!');
        } else {
            computerWins += 1;
            return('paper wins');
        }
    }
    if(playerMove === "scissors") {
        if(computerMove === "paper"){
            playerWins += 1;
            return('scissors wins');
        } else {
            computerWins += 1;
            return('rock wins');
        }
    }
    if(playerMove === "paper") {
        if(computerMove === "rock"){
            playerWins += 1;
            return('paper wins');
        } else {
            computerWins += 1
            return('scissors wins');
        }
    }
    return winner;
}

console.log(getWinner(playerMove, computerMove));

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}
