/*
 * Filename: roshambo.js
 *
 * History:
 * 02/17/23 - created file and added content (AB)
 * 02/18/23 - finished game (AB)
 */

//get buttons and add event listeners
var selectButton = (document.getElementsByClassName("selectButton")[0]);
var enterButton = (document.getElementsByClassName("enterButton")[0]);

selectButton.addEventListener("click", userChangeSelection);
enterButton.addEventListener("click", userConfirm);

var userArrows = document.getElementsByClassName("rightArrowContainer");
var botArrows = document.getElementsByClassName("leftArrowContainer");

var userIcons = document.getElementsByClassName("userIconContainer");
var botIcons = document.getElementsByClassName("botIconContainer");


//hide arrows before game starts
for (let i = 0; i < 3; i++){

    userArrows[i].style.visibility = "hidden";
    botArrows[i].style.visibility = "hidden";

}

userArrows[0].style.visibility = "visible";
var userCurrentSelection = 0;
var botCurrentSelection = 0;
var canMove = true;

//make arrow blink when the user can select
let blinking = setInterval(function(){

        userArrows[userCurrentSelection].style.visibility = "visible";

        setTimeout(function(){
            if(canMove){
                userArrows[userCurrentSelection].style.visibility = "hidden";
            }
        }, 500);
    
}, 1000)

//user clicked select button
function userChangeSelection() {
    if (canMove){

        //disable old arrow and move selection
        userArrows[userCurrentSelection].style.visibility = "hidden";
        userCurrentSelection++;

        //overflow to 0 if selection too large
        if (userCurrentSelection == 3){
            userCurrentSelection = 0;
        }

        userArrows[userCurrentSelection].style.visibility = "visible";
    }
}

//user clicked enter button
function userConfirm() {
    if(canMove){
        canMove = false;
        userIcons[userCurrentSelection].style.visibility = "visible";

        //Hide other options
        let tempSelection = userCurrentSelection + 1;
        if (tempSelection == 3){
          tempSelection = 0;
        }
        userIcons[tempSelection].style.visibility = "hidden";

        tempSelection++;
        if (tempSelection == 3){
            tempSelection = 0;
        }
        userIcons[tempSelection].style.visibility = "hidden";

        //Have the bot make its selection
        botCurrentSelection = Math.floor((Math.random()) * 2.9999999);
        setTimeout(function() {

            botArrows[botCurrentSelection].style.visibility = "visible";

            //Hide other options
            tempSelection = botCurrentSelection + 1;
            if (tempSelection == 3){
                tempSelection = 0;
            }
            botIcons[tempSelection].style.visibility = "hidden";

            tempSelection++;
            if (tempSelection == 3){
                tempSelection = 0;
            }
            botIcons[tempSelection].style.visibility = "hidden";

        }, 500)

        //Compare user and bot selections to see who won
        if((botCurrentSelection == userCurrentSelection + 1) || ((botCurrentSelection == 0) && (userCurrentSelection == 2))){ //user win

            setTimeout(wonGame, 1000);

        } else if (botCurrentSelection == userCurrentSelection){ //draw

            setTimeout(drawGame, 1000);

        } else { //user lose

            setTimeout(lostGame, 1000);

        }
    }
}

function wonGame() {
    let pageTitle = document.getElementById("title");
    pageTitle.innerHTML = "You Won!";
    //TODO add coins to user

    setTimeout(function() {
        window.location.href = "index.html";
    }, 2000)
}

function lostGame() {
    let pageTitle = document.getElementById("title");
    pageTitle.innerHTML = "You Lost...";

    setTimeout(function() {
        window.location.href = "index.html";
    }, 2000)
}

function drawGame() {
    let pageTitle = document.getElementById("title");
    pageTitle.innerHTML = "Rematch!";

    setTimeout(function() {
        
        pageTitle.innerHTML = "Arcade";

        //reset all icons
        for(let i = 0; i < 3; i++){
            userIcons[i].style.visibility = "visible";
            botIcons[i].style.visibility = "visible";
            botArrows[i].style.visibility = "hidden";
        }

        canMove = true;
    }, 2000)
}