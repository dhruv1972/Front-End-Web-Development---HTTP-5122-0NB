//#### LAB 4 - FUNCTIONS ####
//PART 3:  SAFE DOG WALKING CHECK 


//================== CREATE YOUR checkTemp FUNCTION
//This function's job is to...check temprature below 30.
//It needs to receive...uTemp input by the user
//It will return...false if the temprature is greater than 30 . 
function checkTemp(currentTemp) {
    return currentTemp <= 30 && currentTemp >= -10;

}

//================== LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
var uTemp = parseInt(prompt("Enter the current temparature"));
//using funtion into the if condition to check currentTemp.
if (checkTemp(uTemp)) {
    alert("You’re good, have a nice walk!");
} else {
    alert("Temparature is bad far dog walk");
}