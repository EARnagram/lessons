// 1. Write a recursive function `factorial` that gives the factorial
//    of whatever number given.

function factorial(/* Don't forget your parameters! */) {
  // gimme that recursive goodness!
};

// 2. Write a function that prompts the user to guess a number between 1
//    and 10 (provided below) and continues to ask until the user
//    guesses correctly.  On each guess you should tell the user if they
//    are high or low in the console.

//    PS: You MUST run this function in the browser - prompt is not
//    defined on most REPLs.

//    BONUS: Keep track of the number of guesses!

function guessNumber(/* Don't forget your parameters! */) {
  // get the guess from the user!
  var guess = prompt("Guess a number between 1-10");

  // change the guess to an integer!
  guess = parseInt(guess);

  // Include a base case

  // Inform the user!

  // Return the recursive case
}

// 3. Write a recursive function that takes another function as a
//    parameter.

//    CHALLENEGE: Change each word in an array with a random callback.
//    Then return the values of the array joined as a string. This
//    should mutate the original array! Use `capitalize`, `holler`, and
//    `whisper` as the randomized callbacks.

//    BONUS: Use a function as a default parameter!

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
function iCantHearMyVoice(/*Include Your Parameters!*/) {
  // Don't forget a base case to break the recursion!

  // Action - Carry out whatever it is you need to do!

  // Randomize the callback

  // Return the recursive case using the random function!
}

