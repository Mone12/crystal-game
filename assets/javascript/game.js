// counter variables for wins/losses/counter
var wins = 0;
var losses = 0;
var counter =0;

// make target number random between 19-120
var targetNumber = Math.floor(Math.random() * (102) ) + 19;

// make hidden number value random between 1-12
var numberOptions = Math.floor(Math.random() * (12) ) + 1;

// append target number to h1 element
$("#number-to-guess").text(targetNumber);

for (var i = 0; i < numberOptions.length; index++) {
    $(".crystal-image").attr("data-crystalvalue", numberOptions[i]);
    
}

// make the images clickable
$(".crystal-image").on("click", function() {
alert("Hello");
})


