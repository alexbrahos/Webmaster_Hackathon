/*
 * Filename: index.js
 *
 * History:
 * 02/13/23 - created file (GN)
 * 02/15/23 - added hamburger menu (AB)
 * 02/15/23 - migrated hamburger code to menu.js (AB)
 * 02/17/23 - added clicker game (AB)
 * 02/18/23 - added roshambo , tictactoe, and aimTrain
 */

var clickerButton = document.getElementById("clickerButton");
clickerButton.addEventListener("click", gotoClickerGame);

var roshamboButton = document.getElementById("roshamboButton");
roshamboButton.addEventListener("click", gotoRoshambo);

var tictactoeButton = document.getElementById("tictactoeButton");
tictactoeButton.addEventListener("click", gotoTictactoe);

var aimTrainButton = document.getElementById("aimTrainButton");
aimTrainButton.addEventListener("click", gotoAimTrain);

function gotoClickerGame(){
    window.location.href = "clicker.html";
}

function gotoRoshambo() {
    window.location.href = "roshambo.html";
}

function gotoTictactoe() {
    window.location.href = "tictactoe.html";
}

function gotoAimTrain() {
    window.location.href = "aimTrain.html"
}