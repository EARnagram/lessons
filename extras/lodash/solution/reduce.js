const _           = require('lodash');
const skateboards = require('../data');

function averageLength(boards) {
  var total = _.reduce(boards, function(initialValue, skateboard) {
    return initialValue + skateboard.stretch;
  }, 0);
  return total / boards.length;
}

var broughtToYouBy = _.reduce(skateboards, function(result, value, index) {
  if (index % 2 === 0) {
    result.tonyHawk.push(value.name + " brought to you by Tony Hawk");
  } else {
    result.bamMargera.push(value.name + " brought to you by Bam Margera");
  }
  return result;
}, { bamMargera: [], tonyHawk: [] });

console.log(averageLength(skateboards));

console.log(broughtToYouBy);
