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
$(".losses-text").text("Losses:" + losses);
$(".wins-text").text("Wins:" + wins);





// make red crystal clickable
$(".red").on("click", function() {
counter = counter + redCrystal;
$(".counter-number").text("Your score:" + counter);
if (counter === targetNumber) {
    
    // $(".wins-text").text("Wins:" + wins);
    winsGame();
} else if(counter > targetNumber) 
    // losses +
    // $(".losses-text").text("Losses:" + losses);
    loseGame();
});

// make blue crystal clickable
$(".blue").on("click", function() {
    counter = counter + blueCrystal;
    $(".counter-number").text("Your score:" + counter);
    if (counter === targetNumber) {
        // wins ++
        // $(".wins-text").text("Wins:" + wins);
        winsGame();
    } else if(counter > targetNumber) 
        // losses ++
        // $(".losses-text").text("Losses:" + losses);
        loseGame();
        
});

// make yellow crystal clickable
$(".yellow").on("click", function() {
    counter = counter + yellowCrystal;
    $(".counter-number").text("Your score:" + counter);
    if (counter === targetNumber) {
        // wins ++
        // $(".wins-text").text("Wins:" + wins);
        winsGame();
        
    } else if(counter > targetNumber) 
        // losses ++
        // $(".losses-text").text("Losses:" + losses);
        loseGame();
        
    });

    // make green crystal clickable
$(".green").on("click", function() {
    counter = counter + greenCrystal;
    $(".counter-number").text("Your score:" + counter);
    if (counter === targetNumber) {
        // wins ++
        // $(".wins-text").text("Wins:" + wins);
        winsGame();
        
    } else if(counter > targetNumber) 
        
        loseGame();
    });

    // Create a restart function
function resetRandomizers() {
    targetNumber = Math.floor(Math.random() * 102)  + 19;
    counter = 0;
    

    blueCrystal = Math.floor(Math.random() * 12) + 1;
    yellowCrystal = Math.floor(Math.random() * 12) + 1;
    redCrystal = Math.floor(Math.random() * 12)  + 1;
    greenCrystal = Math.floor(Math.random() * 12) + 1;
    $("#number-to-guess").text(targetNumber);
$(".counter-number").text("Your score:" + counter);

};

function winsGame () {
    wins ++
    $(".wins-text").text("Wins:" + wins);
    resetRandomizers();
};
function loseGame() {

    losses ++
    $(".losses-text").text("Losses:" + losses);
    resetRandomizers();
};

