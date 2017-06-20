//Random number variable to store the random number
var randomNum = "";

//Stores the total of the player's crystal numbers
var scoreNum = "";

//Store the random number assigned to each crystal at game's outset
var redCrystal = "";
var blueCrystal = "";
var greenCrystal = "";
var yellowCrystal = "";

//Variables for storing total number of wins and losses
var wins = "";
var losses = "";

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

function reset () {
	redCrystal = "";
	blueCrystal = "";
	greenCrystal = "";
	yellowCrystal = "";
	initializeGame();
}


//Waits until the entire DOM is loaded before proceeding
$("document").ready(function (){
	//Sets up all the random numbers
	initializeGame();

	$(".crystal").on("click", function(){
		scoreNum += this.value;
		$("#results").html(scoreNum);
	});



	//Resets game if player exceeds random number and updates losses
	if(scoreNum > randomNum) {
		losses+=1;
		reset();
	}

	//Resets game if player matches random number and updates wins
	if (scoreNum === randomNum) {
		wins+=1;
		reset();
	}
});