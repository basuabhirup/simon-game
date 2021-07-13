// Creating an empty array to store the randomly generated game pattern:
var gamePattern = [];

// Creating an array to hold the button colors:
var buttonColours = ["red","blue","green","yellow"];

// Creating an empty array to store the user clicked pattern:
var userClickedPattern = [];

// Defining a function to select a random button + animate the button + play sound:
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(200);
  var selectionSound = new Audio("./sounds/" + randomChosenColour + ".mp3");
  selectionSound.play();
}

// Adding EventListener to the event click on any of the button:
$(".btn").click(function(){
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  $("#" + userChosenColour).addClass("pressed");
  setTimeout(function(){$("#" + userChosenColour).removeClass("pressed")}, 100);
  var clickingSound = new Audio("./sounds/" + userChosenColour + ".mp3");
  clickingSound.play();
})
