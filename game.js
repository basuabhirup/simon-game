// Creating an empty array to store the randomly generated game pattern:
var gamePattern = [];

// Creating an array to hold the button colors:
var buttonColours = ["red", "blue", "green", "yellow"];

// Creating an empty array to store the user clicked pattern:
var userClickedPattern = [];

// Defining a function to select a random button + animate the button + play sound:
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(200); //Animated the chosen Button
  playSound(randomChosenColour); //Played sound corresponding to the chosen Button
}

// Defining the playSound function to play sound for a corresponding button:
function playSound(buttonColour) {
  var sound = new Audio("./sounds/" + buttonColour + ".mp3");
  sound.play();
}

// Creating an Event Listener for the event "click" on any of the buttons:
$(".btn").click(function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour); // Animated the clicked Button
  playSound(userChosenColour); //Played sound corresponding to the clicked Button
})

// Defining the animatePress function to animate the clicked button:
function animatePress(buttonColour){
  $("#" + buttonColour).addClass("pressed");
  setTimeout(function() {
    $("#" + buttonColour).removeClass("pressed")
  }, 100);
}
