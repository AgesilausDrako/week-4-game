//Waits until the entire DOM is loaded before proceeding
$("document").ready(function (){

	//Random number variable to store the random number
	var randomNum = 0;

	//Store the random number assigned to each crystal at game's outset
	var randomCrystal = 0;

	//Stores the number from each click event
	var newNum = 0;

	//Stores the total of the player's crystal numbers
	var scoreNum = 0;

	//Variables for storing total number of wins and losses
	var wins = 0;
	var losses = 0;
	
	//Initializes the game and creates random numbers for variables
	function initializeGame () {
		//Creates a random number between 19 and 120
		randomNum = Math.floor(Math.random() * (120 - 19) + 19);
		$("#number-box").html(randomNum);
		//Function for generating the Crystal number between 1 and 12
		function crystalNumGenerator () {
			randomCrystal = Math.floor(Math.random() * 12 + 1);
		}
		function crystalValAssigner () {
			crystalNumGenerator();
			$("#redCrystal").val(randomCrystal);
			crystalNumGenerator();
			$("#blueCrystal").val(randomCrystal);
			crystalNumGenerator();
			$("#greenCrystal").val(randomCrystal);
			crystalNumGenerator();
			$("#diamondCrystal").val(randomCrystal);
			}
			crystalValAssigner();
	}
	
	//Changes strings into integers, adds them to the score, and resets game
	//when conditions are met
	function crystalClick () {
		newNum = parseInt(this.value);
		scoreNum += newNum;
		$("#results").html(scoreNum);
			//Resets game if player exceeds random number and updates losses
			if (scoreNum > randomNum) {
				losses++;
				$("#losses").html(losses);
				reset();
			}
			//Resets game if player matches random number and updates wins
			if (scoreNum === randomNum) {
				wins++;
				$("#wins").html(wins);
				reset();
			}
		}

	//Assigns the click handler
	$(".crystalClick").click(crystalClick);

	//Reset function to clear the crysal variables and reinitialize the game
	function reset () {
		newNum = 0;
		scoreNum = 0;
		$("#results").html(scoreNum);
		initializeGame();
	}

	//Begins the game
	initializeGame();
});