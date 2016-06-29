const _           = require('lodash');
const skateboards = require('../data');


function averageLength(boards) {
  // find the combined total of each skateboard's strech using _.reduce
  var total = _.reduce();

  // return total / boards.length;
}

// The final product of broughtToYouBy should be a new object that
// contains two keys: tonyHawk and bamMargera.
//
// Both .tonyHawk and .bamMargera should be set to an empty array as an
// initial value within the object.
//
// As the skateboards array reduces into the object, the even-indexed
// objects' .name  in the array will be appended with " brought to you
// by Tony Hawk" and added to the .tonyHawk array, while the odd indexed
// objects will be pushed into the .bamMargera array.
var broughtToYouBy = _.reduce(/* iterable array */, function(result, value, index) {
  // result = initial value
  // value  = object in array
  // index  = index of iteration
}, /* DON'T FORGET TO INCLUDE THE INITIAL VALUE! */);

console.log(averageLength(skateboards));

console.log(broughtToYouBy);

