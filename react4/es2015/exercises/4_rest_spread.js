// |||||||||||||||||||||||||||||||||||
// ||||||||| CHANGE TO ES6 |||||||||||
// |||||||||||||||||||||||||||||||||||

// 4. REST PARAMETER AND SPREAD OPERATOR

// REST PARAMETER - change the function definition!

var coraline  = "Coraline"

var kalanchoe = "Kalanchoe";
var geranium  = "Geranium";
var rose      = "Rose";
var beets     = "Beets";
var squash    = "Squash";

function plantBuds(a ,b ,c ,d ,e, f) {
  var plants = Array.prototype.slice.call(arguments, 1);
  var buds   = a + " loves ";
  plants.forEach(function(plant) {
    buds += plant + " and ";
  });
  buds += "all the other plants, cuz they're buddin' like crazy!";
  return buds;
}

console.log(plantBuds(coraline, kalanchoe, geranium, rose, beets, squash));

// SPREAD OPERATOR - change the function invocation!

function friendship(v, w, x, y, z) {
  return v + ', ' + w + ', ' + x + ', ' + y + ', and ' + z + ' are all buds!';
}

var notFriends = ['Coraline', 'Wybie'];

console.log(friendship('Bobinsky', notFriends[0], notFriends[1], 'The Cat', 'Miss Miriam Forcible'));

