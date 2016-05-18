console.log(`This is it…`);

function iveKnownThisAllAlong(guess) {
  console.log(`It's ${guess === this}!`);
}

function tellMeThis() {
  console.log(this);
}

$("#context-button").on("click", function() {
  console.log(this);
})

$('.context-class').on('click', function() {
  console.log(this.title);
})
