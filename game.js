// Creating an empty array:
gamePattern = [];

// Creating an array to hold the button colors:
var buttonColours = ["red","blue","green","yellow"];

// Defining a function to select a random button + animate the button + play sound:
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(200);
  var selectionSound = new Audio("./sounds/" + randomChosenColour + ".mp3");
  selectionSound.play();
}
