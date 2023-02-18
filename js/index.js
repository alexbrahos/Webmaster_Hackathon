/*
 * Filename: index.js
 *
 * History:
 * 02/13/23 - created file (GN)
 * 02/15/23 - added hamburger menu (AB)
 * 02/15/23 - migrated hamburger code to menu.js (AB)
 * 02/17/23 - added clicker game (AB)
 */

var clickerButton = document.getElementById("clickerButton");
clickerButton.addEventListener("click", gotoClickerGame);

function gotoClickerGame(){
    window.location.href = "clicker.html";
}