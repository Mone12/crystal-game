// counter variables for wins/losses/counter
var wins = 0;
var losses = 0;
var counter =0;

// make target number random between 19-120
var targetNumber = Math.floor(Math.random() * 102)  + 19;

// make hidden number value random between 1-12 for each crystal
var blueCrystal = Math.floor(Math.random() * 12) + 1;
var yellowCrystal = Math.floor(Math.random() * 12) + 1;
var redCrystal = Math.floor(Math.random() * 12)  + 1;
var greenCrystal = Math.floor(Math.random() * 12) + 1;

// Display target number and user's current score
$("#number-to-guess").text(targetNumber);
$(".counter-number").text("Your score:" + counter);




// make red crystal clickable
$(".red").on("click", function() {
counter = counter + redCrystal;
$(".counter-number").text("Your score:" + counter);
})
// make blue crystal clickable
$(".blue").on("click", function() {
    counter = counter + blueCrystal;
    $(".counter-number").text("Your score:" + counter);
    })
// make yellow crystal clickable
$(".yellow").on("click", function() {
    counter = counter + yellowCrystal;
    $(".counter-number").text("Your score:" + counter);
    })
// make green crystal clickable
$(".green").on("click", function() {
    counter = counter + greenCrystal;
    $(".counter-number").text("Your score:" + counter);
    })