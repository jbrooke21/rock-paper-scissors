$(document).ready(function() {

	//Set up our variables to use later
    var computerChoice;
    var userChoice = null;

    //Get a random value for the computer choice
    var computerChoiceVal = Math.random();

    //Turn the random value into a choice for the computer
	    if (computerChoiceVal < 0.34) {
	        computerChoice = "rock";
	    } else if (computerChoiceVal <= 0.67 && computerChoiceVal > 0.34) {
	        computerChoice = "paper";
	    } else {
	        computerChoice = "scissors";
	    };

	//on click event trigger the user choice and the function called determine winner
	$(document).on("click", "#rock", function() {
		userChoice = "rock";
		determineWinner();
	});

	$(document).on("click", "#paper", function() {
		userChoice = "paper";
		determineWinner();
	});

	$(document).on("click", "#scissors", function() {
		userChoice = "scissors";
		determineWinner();
	});

	//Instead of repeating all this in each click function
	//I found I could wrap it all in a function of its own and call it above

	function determineWinner() {
		if (userChoice === computerChoice) {
			alert ("Tie!");
		} else if (userChoice === "rock") {
			if (computerChoice === "scissors") {
				//alert ("you win");
				$("#rock").toggleClass("success")
					.toggleClass("green-background");
			} else {
				alert ("you lose");
			};
		} else if (userChoice === "paper") {
			if (computerChoice === "rock") {
				//alert ("you win");
				$("#paper").toggleClass("success")
					.toggleClass("green-background");
			} else {
				alert ("You lose");
			};
		} else if (userChoice === "scissors") {
			if (computerChoice === "paper") {
				//alert ("you win");
				$("#scissors").toggleClass("success")
					.toggleClass("green-background");
			} else {
				alert ("you lose");
			};
		};
	}


});
