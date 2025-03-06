var tNum = 3
var t1 = "Aryan Patel";
var t2 = "Prince Patel";
var t3 = "Jay Patel";
var t4 = "Fenil Ghael";
var t5 = "Yash Patel";
var t6 = "Raj Parekh";
var tNumber = prompt("Please enter the valid team number you belong to");
if (tNumber == tNum) {
    var name = prompt("what is your first name?");
    switch (name) {
        case "Aryan":
            alert("Welcome " + t1);
            break;
        case "Prince":
            alert("Welcome " + t2);
            break;
        case "Jay":
            alert("Welcome " + t3);
            break;
        case "Fenil":
            alert("Welcome " + t4);
            break;
        case "Yash":
            alert("Welcome " + t5);
            break;
        case "Raj":
            alert("Welcome " + t6)
            break;
        default:
            alert("Access denied");
            break;
    }
}
else {
    alert("You are denied access");
}
