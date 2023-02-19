/*
Filename: aimTrain.js

History:
02/18/23 - created file and made game (AB)
*/

//Initial setup before game starts
var gameBox = (document.getElementsByClassName("gameBox")[0]);

//populate flexbox with coins
for (let i = 0; i < 522; i++){
    let currentCell = document.createElement('div');
    currentCell.classList.add("gameCell");
    gameBox.appendChild(currentCell);

    let currentImg = document.createElement('img');
    currentImg.classList.add("gameIcon");
    currentCell.appendChild(currentImg);
    currentImg.src = "../Images/coinBIG.png";

    //when image is clicked, mark it as clicked and hide it
    currentImg.addEventListener("click", function () {

        if (!gameOver){
            this.classList.add("clicked");
            this.style.visibility = "hidden";

            //start game if not already
            if (!gameRunning){
                gameRunning = true;
            }
        }
    });
}

var allCells = document.getElementsByClassName("gameCell");
var gameRunning = false;
var gameOver = false;
var missed = 0;
var coinsEarned = 0;
var coinsIncrease = 1;

//when first coin clicked, start game
initialize();

setInterval(function() {

    if(gameRunning){

        //randomly pick a cell to enable
        let horiz = Math.floor((Math.random() * 17.99999));
        let vert = Math.floor((Math.random() * 28.99999));
        let cellPos = ((vert * 18) + horiz);
        allCells[cellPos].style.visibility = "visible";
        allCells[cellPos].classList.remove("clicked");

        setTimeout(function() {
            if(allCells[cellPos].firstChild.classList.contains("clicked")){

                //user clicked coin in time
                coinsIncrease *= Math.pow(1.1, 1.1);
                coinsEarned += Math.floor(coinsIncrease);

            } else {

                //user did not click in time
                allCells[cellPos].style.visibility = "hidden";
                missed ++;

                //check to see if user lost
                if(missed == 5){

                    gameRunning = false;
                    gameOver = true;
                    let pageTitle = document.getElementById("title");
                    pageTitle.innerHTML = "Game Over"
                    setTimeout(function () {

                        //TODO add coins STORED IN coinsEarned
                        window.location.href = "index.html";

                    }, 2000);

                }

            }
        }, 1500);


    }

}, 1000);

function initialize() {

    //randomly pick a cell to enable
    let horiz = Math.floor((Math.random() * 17.99999));
    let vert = Math.floor((Math.random() * 28.99999));
    let cellPos = ((vert * 18) + horiz);
    allCells[cellPos].style.visibility = "visible";

}