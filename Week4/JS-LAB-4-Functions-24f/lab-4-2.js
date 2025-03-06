//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function calcAverage(num1, num2, num3, num4, num5) {
    var nAverage = (num1 + num2 + num3 + num4 + num5) / 5;
    return (nAverage).toFixed(1);
}
console.log(calcAverage(5, 10, 15, 20, 25));


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
var c1 = 95;
var c2 = 80;
var c3 = 75;
var c4 = 60;
var c5 = 50;
var cAverage = (c1 + c2 + c3 + c4 + c5) / 5;
function courseAverage(c1, c2, c3, c4, c5) {

    return courseAverage;
}
if (cAverage >= 70) {
    alert("Success! Your overall average is satisfactory.");
} else {
    alert("Review required. Your overall average is below 70.");
}
