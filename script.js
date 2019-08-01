let playerWins = 0;
let compWins = 0;
let numberOfRounds = 0;
let display = document.querySelector("#results");
let scores = document.querySelector("#scores");


function capaitalize(w) {
	let word = w.toLowerCase();
	return word.charAt(0).toUpperCase() + word.slice(1);
};

function computerPlay() {
	let option = ['rock', 'paper', 'scissors'];
	let randomNumber = Math.floor(Math.random() * Math.floor(3));
	return option[randomNumber];
};

function playRound(playerSelection, computerSelection) {
	if (playerSelection === "rock" && computerSelection === "scissors") {
		playerWins++;
		return "You Win! Rock beats Scissors";
	} else if (playerSelection === "scissors" && computerSelection === "paper"){
		playerWins++;
		return "You Win! Scissors beats Paper";
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		playerWins++;
		return "You Win! Paper beats Rock";
	} else if (playerSelection === computerSelection) {
		return "It's a tie!";
	} else {
		compWins++;
		return "You Lose! " + capaitalize(computerSelection) + " beats " + capaitalize(playerSelection);
	}
};

function playerChoice() {
	let buttons = document.querySelectorAll("button");
	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			if (numberOfRounds === 5) {
				isWinner();
				return;
			}
			game(button.id);
		})
	});
};

function game(choice) {
	let results = playRound(choice, computerPlay());
	display.textContent = results;
	numberOfRounds++;
	scores.textContent = `Scores: You: ${playerWins} | Computer: ${compWins}`;
}

function isWinner() {
	scores.textContent = `Scores: You: ${playerWins} | Computer: ${compWins}`;
	if (playerWins === 3 || playerWins > compWins) {
		display.textContent = "You are the Winner! :)";
	} else if (playerWins === compWins) {
		display.textContent = "Draw";
	} else {
		display.textContent = "The Computer Won! :(";
	}
	
}

playerChoice();













