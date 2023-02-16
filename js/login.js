/*
 * Filename: login.js
 *
 * History:
 * 02/15/23 - create file and add event definitions (GN)
 */

/*
    Events
*/
// Toggle Password
function togglePassword() {
    var x = document.getElementById("password");
    
    if(x.type === "password") {
        x.type = "text";
    } 
    else {
        x.type = "password";
    }
}

function togglePassword(id1, id2) {
    var x = document.getElementById(id1);
    var y = document.getElementById(id2);
    
    // Toggle two passwords fields
    if(x.type === "password" && y.type === "password") {
        x.type = "text";
        y.type = "text";
    } 
    else {
        x.type = "password";
        y.type = "password";
    }
}


// Clicking the title 
function clickTitle() {
    window.location.href = "../html/login.html";
}