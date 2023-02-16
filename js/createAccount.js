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

    /*Define Form Functionality*/
    $.validator.setDefaults({
        submitHandler: function() {
            var username = $("#username").val();
            var password = $("#password").val();
            var confirmPassword = $("confirmPassword").val();
        }, // end submitHandler

        /*Validation Error Messages*/
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        } 
    }); // end setDefaults

    /*Validation*/
    $("#createAccount").validate({
        /*Custom Rules*/
        rules: {
            username: 
            {
                required: true,
                minlength: 5,
                maxlength: 25
            },
            password:
            {
                required: true,
                minlength: 6,
                maxlength: 25
            },
            confirmPassword:
            {
                required: true, 
                equalTo: "#password"
            },
        }, // end custom rules

        messages: {
            username: 
            {
                minlength: "Must be at least 5 characters",
                maxlength: "Must be less than 25 characters"
            },
            password: 
            {
                minlength: "Must be at least 6 characters",
                maxlength: "Must be less than 25 characters",
            },
            confirmPassword:
            {
                equalTo: "Passwords do not match!"
            },
        }, // end messages
    }); // end #createAccount validation

    
}); // end (document).ready