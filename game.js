// Creating an array to hold the button colors:
var buttonColours = ["red", "blue", "green", "yellow"];

// Creating an empty array to store the randomly generated game pattern:
var gamePattern = [];

// Creating an empty array to store the user clicked pattern:
var userClickedPattern = [];

// Creating a variable to store the level of the game, with an initial value of 0:
var level = 0;

// Defining a function to select a random button + animate the button + play sound:
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(200); //Animated the chosen Button
  playSound(randomChosenColour); //Played sound corresponding to the chosen Button
  userClickedPattern = []; // To ensure that user should repeat the sequence from beginning
  level++; // Increased the level of the game by +1.
  //Changing the heading according to progress in the level of the Game:
  if (level !== 0) { //making sure that the game has already started.
    $("#level-title").text("Level " + level);
  }
}

// Defining the playSound function to play sound for a corresponding button:
function playSound(buttonColour) {
  var sound = new Audio("./sounds/" + buttonColour + ".mp3");
  sound.play();
}

// Creating an Event Listener for the event "click" on any of the buttons:
$(".btn").click(function() {
  if (userClickedPattern.length < gamePattern.length) {
    selectColour(this.id);
  }
})

// Defining the selectColour function:
function selectColour(userChosenColour) {
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour); // Animated the clicked Button
  playSound(userChosenColour); //Played sound corresponding to the clicked Button
  checkAnswer(level); // checks if the userClickedPattern matches the gamePattern
}


// Defining the animatePress function to animate the clicked button:
function animatePress(buttonColour) {
  $("#" + buttonColour).addClass("pressed");
  setTimeout(function() {
    $("#" + buttonColour).removeClass("pressed")
  }, 100);
}

// Creating an Event Listener against a click on "Start Playing" button to Start the Game:
$(".start-button").click(function(){
  if (gamePattern.length === 0) { //making sure that the game has not started yet
    nextSequence();
    $(".start-button").fadeOut();
  }
})

// Creating an Event Listener against any "keydown" event to Start the Game:
$(document).keydown(function(event) {
  if (gamePattern.length === 0) { //making sure that the game has not started yet
    nextSequence();
    $(".start-button").fadeOut();
  } else if (userClickedPattern.length < gamePattern.length) {
    switch (event.key.toLowerCase()) {
      case "r":
        selectColour("green");
        break;

      case "t":
        selectColour("red");
        break;

      case "f":
        selectColour("yellow");
        break;

      case "g":
        selectColour("blue");
        break;

      default: console.log(event.key);
    }
  }
})

// Defining checkAnswer function to check whether the clicked buttons match the game pattern:
function checkAnswer(currentLevel) {
  var index = userClickedPattern.length - 1;
  if (userClickedPattern[index] === gamePattern[index]) {
    if (index === currentLevel - 1) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    gameOver();
  }
}

// Defining the gameOver function:
function gameOver() {
  playSound("wrong");
  $("#level-title").text("Game Over, Press Any Key to Restart.");
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over")
  }, 400);
  $(".start-button").addClass("restart");
  $(".start-button").text("Restart Playing");
  $(".start-button").fadeIn();
  gamePattern = [];
  level = 0;
}
