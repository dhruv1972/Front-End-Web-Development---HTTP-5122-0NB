//Create an object of the cricket player
var player = {
    playerName: "Rohit Sharma",
    team: "India",
    format: "ODI",
    century: 51,
    //method
    changeFormat: function (format) {
        player.format = format;
        alert("Updated format of the Player " + player.format);
    }
}
console.log(player); // Output the object
player.playerName = prompt("Enter new Player Name ", player.playerName); // Prompt use for new player name
player.team = prompt("Enter new Team ", player.team); // Propmtp use for new team   
player.changeFormat("Test"); // Change the format from the function property
console.log(player); // Output the updated object


