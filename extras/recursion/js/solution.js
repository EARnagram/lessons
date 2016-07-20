// 1. Write a recursive function `factorial` that gives the factorial
//    of whatever number given.

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  // gimme that recursive goodness
  return n * factorial(n-1);
};

// 2. Write a function that prompts the user to guess a number between 1
//    and 10 (aka, `prompt("Guess a number between 1-10")`) and
//    continues to ask until the user guesses correctly.  On each guess
//    you should tell the user if they are high or low.

//    PS: You MUST run this function in the browser - prompt is not
//    defined on most REPLs.

//    BONUS: Keep track of the number of guesses!

function guessNumber(target, guesses = 0) {
  var guess = prompt("Guess a number between 1-10");

  guess = parseInt(guess);

  if (guess < target) {
    console.log("LOW");
  } else if (guess > target) {
    console.log("HIGH");
  } else {
    return `${guess} is correct! It only took you ${guesses} guesses!`;
  }
  return guessNumber(target, guesses + 1);
}

// 3. Write a recursive function that takes another function as a
//    parameter.

// BONUS: Use a function as a default parameter!

// Our array of messy words
var mamaMia = ["Mama ", "mia ", "whadda ", "pain!"];

// 3 different functions to use as callbacks
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function holler(word) {
  return word.toUpperCase();
}

function whisper(word) {
  return word.toLowerCase();
}


// Our recursive function
function iCantHearMyVoice(array, i, cb = holler) {
  // Base case
  if (i === array.length) {
    return array.join('');
  }
  // Action
  array[i] = cb(array[i]);

  // Randomize the callback
  var random = Math.floor(Math.random() * 3);

  // Recursive case
  if (random % 3 === 1) {
    return iCantHearMyVoice(array, i + 1, whisper);
  } else if (random % 3 === 2) {
    return iCantHearMyVoice(array, i + 1, capitalize);
  } else {
    return iCantHearMyVoice(array, i + 1);
  }
}

