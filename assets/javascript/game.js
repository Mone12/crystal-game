

// Create wins/losses/player's score counter

var wins = 0;
var losses = 0;
var playersScore = 0;
var counter = 0;

// Create random number 19-120 that displays as target number
// for start of game
var randomTarget = Math.floor(Math.random() * 102) + 19;

// Function so that the images are clickable
$(".crystal-image").on("click", function() {

    counter += 10;

    alert("Your score is:" + counter);
});


// Give each button an image

// Give each button a random value between 1-12

// create game function

// Hide the value until the player clicks on it

// add that value of the button the player clicks and update score

// If their score goes over target number, player losses, 
// game restarts

// If score equals target number, player wins, 
// game restarts

// Make sure to display text, getelement by ID for text positiong on screen

// create a restart function