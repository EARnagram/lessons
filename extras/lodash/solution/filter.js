const _           = require('lodash');
const skateboards = require('../data');

var longBoards = _.filter(skateboards, function(board) {
  return board.length > 6;
});

var flatBoards = _.filter(skateboards, 'flat');

var trickBoards = _.filter(skateboards, { length: 5 });

var curvedBoards = _.filter(skateboards, ["flat", false]);

console.log("LONGBOARDS: ",   longBoards);
console.log("FLATBOARDS: ",   flatBoards);
console.log("TRICKBOARDS: ",  trickBoards);
console.log("CURVEDBOARDS: ", curvedBoards);
