/*
 * Filename: createAccount.js
 *
 * History:
 * 02/15/23 - create file and use jQuery validation (GN)
 */
/*
    #createAccount Form Validation
*/
$(document).ready(function() {
    $.validator.setDefaults({
        submitHandler: function() {
            var username = $("#username").val();
            var password = $("#password").val();
            var confirmPassword = $("confirmPassword").val();
            
            $("#outputField").append("<br Username: " + username);
            $("#outputField").append("<br>Password: " + password);
            $("#outputField").append("<br>Confirm Password: " + confirmPassword);

            alert(username);
        }, // end submitHandler
    }); // end setDefaults

    
}); // end (document).ready