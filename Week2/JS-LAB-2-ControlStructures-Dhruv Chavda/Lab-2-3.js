//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var inputId;
var text = "me@example.com"
var user;
//==== LOGIC =============
inputId = confirm("Would you like to join our mailing list", text);
switch (inputId) {
    case true:
        user = prompt("Please enter your email id", text);

        if (user === null || user === "" || user === text) {
            alert("Thank you, but your email was not valid");
        }
        else {
            alert("Thank you, our next newsletter will be sent to " + user);
        }
        break;

    case false:
        alert("Thank you, we will not bother you again.");
        break;

}



