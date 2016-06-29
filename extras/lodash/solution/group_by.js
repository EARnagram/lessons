const _           = require('lodash');
const skateboards = require('../data');

var lengthsChart = _.groupBy(skateboards, function(skateboard) {
  return Math.floor(skateboard.stretch);
});

var flatCurved = _.groupBy(skateboards, function(skateboard) {
  if (skateboard.flat === true) {
    return "flat";
  } else {
    return "curved";
  }
});

// This would also work
// var flatCurved = _.groupBy(skateboards, sb => sb.flat ? "flat" : "curved");

console.log("Floored Length: ", lengthsChart);

console.log("Flat or Curved: ", flatCurved);

