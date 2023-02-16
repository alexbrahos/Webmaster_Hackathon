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
    /*UI Library Definitions*/
    $("input[type='submit']").button();

    $.validator.setDefaults({

        /*Submit Event Handler & Data Scraping*/
        submitHandler: function() {
            var username = $("#username").val();
            var password = $("#password").val();
            var confirmPassword = $("#confirmPassword").val();

            alert("he");
            
            // output data to output area
            $("#outputField").append("<br>Username: " + username);
            $("#outputField").append("<br>Password: " + password);
            $("#outputField").append("<br>Confirm: " + confirmPassword);

        }, // end submitHandler

    }); // end validator.setDefaults
}); // end (document).ready