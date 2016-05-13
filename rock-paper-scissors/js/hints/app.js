$(document).ready(function() {

    //Set up our variables to use later
    var computerChoice;

    //Get a random value for the computer choice
    var computerChoiceVal = Math.random();

    //Turn the random value into a choice for the computer
    if (computerChoiceVal < 0.34) {
        computerChoice = "rock";
    } else if (computerChoiceVal <= 0.67 && computerChoiceVal > 0.34) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    //Now we have access to the computer's choice via the computerChoice variable

});
