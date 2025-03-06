var movie1 = "Harry Pottter";
var movie2 = "Avtar";
var movie3 = "Avengers";
var movie4 = "Spiderman";
var movie5 = "Batman";
var movie6 = "Captian America";
var movie7 = "Fall";
var movies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];
var user = 0;
while (user < 1 || user > 7 || isNaN(user)) {
    user = parseInt(prompt("Which top 7 movie would you like?", "Pick a number: 1-7"));
    if (user < 1 || user > 7 || isNaN(user)) {
        alert("Please enter a number between 1 and 7!");
    }
}
alert("Number " + user + " on the list is " + movies[user - 1])

for (var i = 0; i < movies.length; i++) {
    console.log("Movie " + (i + 1) + ": " + movies[i]);
}
