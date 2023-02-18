/*
Filename: clicker.js

History:
02/17/23 - created file and made game (AB)
*/

const redColor = "#FF0000";
const blueColor = "#0000FF";

var gameBox = document.getElementsByClassName("gameFlexGrid");

//Fill game box with columns that can change
for (let i = 1; i < 51; i++){
    let currentCol = document.createElement('div');
    currentCol.classList.add("gameColumn");
    gameBox[0].appendChild(currentCol);

    //color is red by default, make second half blue
    if (i > 24) {
        currentCol.style.backgroundColor = blueColor;
    }
}

var columns = document.getElementsByClassName("gameColumn");
var position = 24;
var redButton = (document.getElementsByClassName("LButton"))[0];
var blueButton = (document.getElementsByClassName("RButton"))[0];
var lastClick = "red";

//make buttons clickable
redButton.addEventListener("click", redAdd);
blueButton.addEventListener("click", blueAdd);

//set up to start
var CPUspeed = (4 + Math.floor(Math.random() * 5));
var gameStarted = false;
var gameOver = false;


//red clicked, so move red right
function redAdd() {
    if (!gameStarted){ //if game hasn't started, start the cpu
        startGame();
    }

    if (!redWin() && !gameOver) {

        if (lastClick == "red"){ //if red clicked last, move right

            position ++;
            columns[position].style.backgroundColor = redColor;

        } else { //if blue clicked last, change current

            columns[position].style.backgroundColor = redColor;
            lastClick = "red";

        }

    } else if (!gameOver){
        gameOver = true;
        columns[50].style.backgroundColor = redColor;
        let pageTitle = document.getElementById("title");
        pageTitle.innerHTML = "You Won!";
        setTimeout(wonGame, 2000);
    }
}

//check to see if red has won
function redWin(){
    if (position == 49 && (lastClick != "blue")){
        return true;
    } else {
        return false;
    }
}

//blue clicked, so move blue left
function blueAdd() {
    if (!blueWin() && !gameOver) {

        if (lastClick == "blue") { //if blue clicked last, move left

            position --;
            columns[position].style.backgroundColor = blueColor;

        } else { //if red clicked last, change current

            columns[position].style.backgroundColor = blueColor;
            lastClick = "blue";

        }

    } else if (!gameOver){
        gameOver = true;
        columns[0].style.backgroundColor = blueColor;
        let pageTitle = document.getElementById("title");
        pageTitle.innerHTML = "You Lost...";
        setTimeout(lostGame, 2000);
    }
}

//check to see if blue has won
function blueWin() {
    if (position == 1 && (lastClick != "red")){
        return true;
    } else {
        return false;
    }
}

//user wins, add coins
function wonGame(){
    //TODO add coins to user account
    window.location.href = "index.html";
}

function lostGame(){
    window.location.href = "index.html";
}

function startGame() {
    gameStarted = true;
    let i = setInterval(function(){

        blueAdd();

        if (gameOver){
            clearInterval(i);
        }
    }, (1000 / CPUspeed))
}