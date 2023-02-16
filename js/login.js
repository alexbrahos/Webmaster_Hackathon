/*
 * Filename: login.js
 *
 * History:
 * 02/15/23
 */

/*
    Event Handlers
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
