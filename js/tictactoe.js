/*
Filename: tictactoe.js

History:
02/17/23 - created file and made game (AB)
*/

var board = ["", "", "", "", "", "", "", "", ""];

var boardContainer = document.querySelector(".gameArea");

const player = "O";
const computer = "X";
var boardFull = false;
var gameOver = false;

const renderBoard = () => {
    boardContainer.innerHTML = "";
    board.forEach((e, i) => {
      boardContainer.innerHTML += `<div id="block${i}" class="block" onclick="addPlayerMove(${i})">${board[i]}</div>`;
      if (e == player || e == computer) {
        document.querySelector(`#block${i}`).classList.add("occupied");
      }
    });
};

const checkBoardComplete = () => {
  let flag = true;
  board.forEach(element => {
    if (element != player && element != computer) {
      flag = false;
    }
  });
  boardFull = flag;
};
  
const addPlayerMove = e => {
    if (!boardFull && board[e] == "" && !gameOver) {
      board[e] = player;
      gameLoop();
      addComputerMove();
    }
};
  
const addComputerMove = () => {
    if (!boardFull && !gameOver) {
      do {
        selected = Math.floor(Math.random() * 9);
      } while (board[selected] != "");
      board[selected] = computer;
      gameLoop();
    }
};

const checkLine = (a, b, c) => {
    return (
      board[a] == board[b] &&
      board[b] == board[c] &&
      (board[a] == player || board[a] == computer)
    );
};

const checkMatch = () => {

    for (i = 0; i < 9; i += 3) {
      if (checkLine(i, i + 1, i + 2)) {
        return board[i];
      }
    }
    for (i = 0; i < 3; i++) {
      if (checkLine(i, i + 3, i + 6)) {
        return board[i];
      }
    }
    if (checkLine(0, 4, 8)) {
      return board[0];
    }
    if (checkLine(2, 4, 6)) {
      return board[2];
    }
    return "";
};

const checkWin = () => {

    let result = checkMatch();
    if (result == player) { //user won

        gameOver = true;
        let pageTitle = document.getElementById("title");
        pageTitle.innerHTML = "You Won!";
        setTimeout(wonGame, 2000);

    } else if (result == computer) { //computer won

        gameOver = true;
        let pageTitle = document.getElementById("title");
        pageTitle.innerHTML = "You Lost...";
        setTimeout(lostGame, 2000);
    } else if (boardFull){ //no winner

        gameOver = true;
        let pageTitle = document.getElementById("title");
        pageTitle.innerHTML = "Draw";
        setTimeout(lostGame, 2000);
    }

};
  
const gameLoop = () => {
    renderBoard();
    checkBoardComplete();
    checkWin();
};

function wonGame(){
    //TODO add coins
    window.location.href = "index.html";
}

function lostGame(){
    window.location.href = "index.html";
}

renderBoard();
  