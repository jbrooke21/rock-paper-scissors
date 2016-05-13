## Rock Paper Scissors

- In this exercise we will be coding the game of Rock Paper Scissors using the attached front end.
- Directions for getting started:
	- Step 1: On page load, calculate a choice (Rock, Paper, or Scissor) for the computer. One way you can do this is by using the [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function.
	- Step 2: On click of one of the choices, grab the name of the choice from the element's id and store it to a variable.
	- Step 3: Inside of the click event handler, compare the user-selected choice with the computer-selected choice.
	- Step 4: If the user wins, add the class of "success" to the option element they clicked on. If the user lost, create an alert indicating that.
	- Step 5: Create a check in your code to account for a tie. If the two choices are the same, alert the user of this.