console.log("WE LOADED!");

// Current Turn holder
var currentTurn;

// Player constructor function
var Player = function(id) {
	this.name = "Player " + (id + 1);
	this.id   = "p" + id;
}

// Create players
var p1 = new Player(0);
var p2 = new Player(1);
var p3 = new Player(2);
var p4 = new Player(3);

// Model the board
var board = [p1, p2, p3, p4];

// Print who's up
var printPlayers = function() {
	var print = "";
	board.forEach(function(event, index) {
		event === currentTurn ? print += "  p" + (index + 1) : print += "  ____";
	});
	console.log("Who's Up?\n" + print);
}

// Next Turn
var nextTurn = function() {
	var counter = 0;
	board.forEach(function(event, index) {
		if (event === currentTurn) counter += index + 1;
	});
	switch (counter) {
		case 1:
			currentTurn = board[1];
			break;
		case 2:
			currentTurn = board[2];
			break;
		case 3:
			currentTurn = board[3];
			break;
		default:
			currentTurn = board[0];
			break;
	}
}

// Clear class from objects that are not current turn
var renderClass = function() {
	board.forEach(function(event) {
		event !== currentTurn ? $("#" + event.id).removeClass('selected') : $("#" + event.id).addClass('selected');
	});
	$('.switch').html(currentTurn.name + " is up!");
}

// Click function for button to change who's up
// PS I moved the button manipulation to the render folder
$('.switch').click(function() {
	nextTurn();
	renderClass();
	printPlayers();
});
