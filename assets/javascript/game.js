//Waits until the entire DOM is loaded before proceeding
$("document").ready(function (){

	//Random number variable to store the random number
	var randomNum = 0;

	//Stores the total of the player's crystal numbers
	var scoreNum = 0;
	var newNum = 0;

	//Store the random number assigned to each crystal at game's outset
	var redCrystal = 0;
	var blueCrystal = 0;
	var greenCrystal = 0;
	var yellowCrystal = 0;

	//Variables for storing total number of wins and losses
	var wins = 0;
	var losses = 0;
	$("#wins").html(wins);
	$("#losses").html(losses);

	//Function for a random number between 1 and 12
	function initializeGame (){
		randomNum = Math.floor(Math.random() * (120 - 19) + 19);
		$("#number-box").html(randomNum);
		//Function for generating the Crystal number
		function crystalNumGenerator () {
			redCrystal = Math.floor(Math.random() * 12 + 1);
			$("#redCrystal").val(redCrystal);
			blueCrystal = Math.floor(Math.random() * 12 + 1);
			$("#blueCrystal").val(blueCrystal);
			greenCrystal = Math.floor(Math.random() * 12 + 1);
			$("#greenCrystal").val(greenCrystal);
			yellowCrystal = Math.floor(Math.random() * 12 + 1);
			$("#yellowCrystal").val(yellowCrystal);
			}
			crystalNumGenerator();
	}

	//Sets up all the random numbers
	initializeGame();

	$(".crystal").on("click", function(){
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
	});

	//Reset function to clear the crysal variables and reinitialize the game
	function reset () {
		redCrystal = 0;
		blueCrystal = 0;
		greenCrystal = 0;
		yellowCrystal = 0;
		newNum = 0;
		scoreNum = 0;
		$("#results").html(scoreNum);
		initializeGame();
	}
	
});