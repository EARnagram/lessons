$(function() {
console.log("WE LOADED!");

// Current Turn holder
var currentTurn;

// Player constructor function
var Player = function(id) {
	this.name = "Player " + (id + 1);
	this.id   = "p" + id;
}

// Create List of Players
var players = [new Player(0), new Player(1), new Player(2), new Player(3)];

// Model the board
var board = [null, null, null, null];

// Click function for button to change who's up
// PS I moved the button manipulation to the render folder
$('.switch').click(function() {
	nextTurn();
	renderClass();
	printPlayers();
});

// Next Turn
function nextTurn() {
	for (var i = 0; i < board.length; i++) {
		if (board[i] === 1) {
			// Set current turn
			currentTurn = players[i];

			// Set up next turn
			board[i] = null;
			if (i === 3) {
				board[0] = 1;
			} else {
				board[i + 1] = 1;
			}
			// Break out if the player has been found
			break;
		}
	}
	// Start Game if no player found
	if (currentTurn === undefined) {
		currentTurn = players[0];
		board[0] = 1;
	}
}

// Clear class from objects that are not current turn
function renderClass() {
	board.forEach(function(event, index) {
		if (event === 1) {
			$("#" + players[index].id).addClass('selected');
		} else {
		$("#" + players[index].id).removeClass('selected') :
		}
	});
	// Alert who's turn it is on the button
	$('.switch').text(currentTurn.name + " is up!");
}

// Print who's up
function printPlayers() {
	var print = "";
	board.forEach(function(event, index) {
		event === 1 ? print += "  p" + (index + 1) : print += "  ____";
	});
	console.log("Who's Up?\n" + print);
}

});
