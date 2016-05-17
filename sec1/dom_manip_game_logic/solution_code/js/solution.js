// 10. Surround in document.ready function to remove variables from global scope
$(function() {
console.log("WARNING: TOO MUCH FUN IS ABOUT TO BE HAD!");

// 1. Current Turn holder
var currentTurn;

// 2. Model the board
var board = [null, null, null, null];

// 3. Player constructor function
var Player = function(id) {
	this.name = "Player " + (id + 1);
	this.id   = "p" + id;
}

// 4. Create List of Players
var players = [new Player(0), new Player(1), new Player(2), new Player(3)];

// 5. Print who's up
function printPlayers() {
	var print = "";
	board.forEach(function(event, index) {
		event === 1 ? print += "  p" + (index + 1) : print += "  ____";
	});
	console.log("Who's Up?\n" + print);
}

// 6. Initialize Game
function initGame() {
	currentTurn = players[0];
	board[0] = 1;
}

// 7. Next Turn
function nextTurn() {
	for (var i = 0; i < board.length; i++) {
		// Find current player
		if (board[i] === 1) {

			// Set up next turn
			board[i] = null;
			if (i === 3) {
				board[0] = 1;
			} else {
				board[i + 1] = 1;
			}
			// Break out when the player has been found
			break;
		}
	}
	// Start Game if no player found
	if (currentTurn === undefined) {
		initGame();
	}
}

// 8. Render: clear class from objects that are not current turn
function renderClass() {
	board.forEach(function(event, index) {
		if (event === 1) {
			currentTurn = players[index];
			$("#" + players[index].id).addClass('selected');
		} else {
			$("#" + players[index].id).removeClass('selected');
		}
	});
	// Alert who's turn it is on the button
	$('.switch').text(currentTurn.name + " is up!");
}

// 9. Event Listener: Click function for button to change who's up
$('.switch').on('click', function() {
	nextTurn();
	renderClass();
	printPlayers();
});


});
