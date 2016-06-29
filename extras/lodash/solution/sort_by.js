const _           = require('lodash');
const skateboards = require('../data');

var curvedShortFirst = _.sortBy(skateboards, ['flat', 'stretch']);

var longNamesFirst = _.sortBy(skateboards, function(skateboard) {
  return -(skateboard.name.length);
});

console.log(curvedShortFirst);
console.log(longNamesFirst);
