console.log("BIG O!");

// Code Challenge #1:
//
// Identify the notation using a 2d array called board. The board below
// is just an example. These functions should work for a board of any
// length.

var board = [
  ["_", "_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "O", "X", "_", "_", "_"],
  ["_", "_", "_", "X", "O", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_", "_"]
];

// A) What notation is being used in searchTheBoard?

function searchTheBoard(board) {
  for (var i = 0; i < board.length; i++) {
    for (var k = 0; k < board.length; k++) {
      if (board[i][k] === "X") {
        console.log(`Found X at ${i}, ${k}`);
      } else if (board[i][k] === "O") {
        console.log(`Found O at ${i}, ${k}`);
      }
    }
  }
}

// B) What notation is being used in checkTheMiddle?

function checkTheMiddle(board) {
  var midY = Math.floor(board.length / 2);
  var midX = Math.floor(board[midY].length / 2);
  return board[midY][midX];
}

// C) What notation is being used in this Fibonacci function?

function fibonacci(number) {
  if (number <= 1) return number;
  return fibonacci(number - 2) + fibonacci(number - 1);
};

// D) What notation is being used in collectString?

// Given x and y-coordinates find the next index in the
// given direction
function newDirections(y, x, dir) {
    switch (dir) {
    case "n":
      y -= 1;
      break;
    case "ne":
      y -= 1;
      x += 1;
      break;
    case "e":
      x += 1;
      break;
    case "se":
      x += 1;
      y += 1;
      break;
    case "s":
      y += 1;
      break;
    case "sw":
      y += 1;
      x -= 1;
      break;
    case "w":
      x -= 1;
      break;
    case "nw":
      y -= 1;
      x -= 1;
      break;
    default:
      console.debug("There's a problem…");
  }
  return [y, x];
}

// collect string for each direction
function collectString(y, x, dir, str = '', board) {
  [y, x] = newDirections(y, x, dir);
  if (y >= 0 && y < board.length &&  x >= 0 && x < board.length) {
    str += board[y][x] || '_';
    return collectString(y, x, dir, str, board);
  } else {
    return str;
  }
}

// Code Challenge #2:
//
// Write a function that takes in an array of integers and a target
// value as arguments and returns true if any two values in the array
// add up to the target, false otherwise.
//
// Please write a function that considers time complexity, and aim for
// O(n).

// use this set to test

var numSet = [1, 4, 6, 12, 13, 12, 6, 8, 32, 20, 14, 4];
​
