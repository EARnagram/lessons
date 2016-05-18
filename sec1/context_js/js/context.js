console.log(`This is it…`);

function iveKnownThisAllAlong(guess) {
  console.log(`It's ${guess === this}!`);
};

function tellMeThis() {
  return this;
};

function strictlyTellMeThis() {
  'use strict';
  return this;
};

$("#context-button").on("click", function() {
  console.log(this);
});

$('.context-class').on('click', function() {
  console.log(this.title);
});
