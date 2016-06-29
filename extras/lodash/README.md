# Hi-Phen Skateboards

<img src="http://dika.jp/blog/wp-content/uploads/1402598749253.jpg" height=300px />

## Collection Manipulation with LoDash

##### Road Map

1. `_.filter()`
2. `_.groupBy()`
3. `_.sortBy()`
4. `_.reduce()`

#### What is LoDash?

LoDash is a popular "JavaScript utility library delivering modularity, 
performance, & extras." Some of its finest features include methods to
make data structure manipulation easy.

Some methods are quite small, like `_.extends()` used within the wexgen 
`environment.js` file, or `_.isEqual()`. 

> `_.extends()` takes two objects and applies the key value pairs of the 
  second to the first. 

> `_.isEqual()` checks to see if two objects are equal, and since 
  comparisons of objects always return false due to object ids in 
  vanilla JS, this can be very helpful. For instance:
>
> `{name: "Tony Hawk"} == {name: "Tony Hawk"}` // => `false`
> 
> `_.isEqual({name: "Tony Hawk"}, {name: "Tony Hawk"})` // => `true` 

Others are much more intricate. It's a large library, so we'll only skim 
the surface, but remember you can always turn to the [docs](https://lodash.com/docs).

---

## Examples and Exercises

For the following examples, feel free to use (jsBin)[http://jsbin.com/?js,console]
to run the code snippets (__Don't Forget__ to add the lodash library 
from the 'Add library' tab), *__or__* create a scratch file in your 
project and require lodash inside. 

#### Hi-Phen Skateboards

We'll be using a shipment of the hippest new boards from Hi-Phen for
data!

Make sure to keep `data.js` open in a tab in sublime to view the array 
of skateboard objects.

### `_.filter()`

LoDash's filter is a bit different than the vanilla JS version of 
filter.

With LoDash's filter, you have many other options with which to filter:
callback functions (like JavaScript's filter), objects, arrays, and 
strings.

```javascript

var cityMusicFans = [
  {city: "Miami, FL",        juggalos: 120,  deadheads: 1167,  parrotheads: 3760,  overlap: false }, 
  {city: "Portland, OR",     juggalos: 800,  deadheads: 4422,  parrotheads: 973,   overlap: true }, 
  {city: "Indianapolis, IN", juggalos: 2100, deadheads: 1167,  parrotheads: 203,   overlap: true }
];

var parrotCity = _.filter(cityMusicFans, function(dataSet) {
  return dataSet.parrotheads > 400;
});

var meltingPots        = _.filter(cityMusicFans, 'overlap');

var tooHotForJuggalos  = _.filter(cityMusicFans, ['overlap', false]);

var matchingDeadCities = _.filter(cityMusicFans, { deadheads: 1167 });
```

### `_.groupBy()`

Flexible ways to group collections into new objects.

```javascript
var deadOrParrot = _.groupBy(cityMusicFans, function(cityFans) {
  if (cityFans.deadheads > cityFans.parrotheads) {
    return 'dead';
  } else {
    return 'parrot';
  }
});
```

### `_.sortBy()`

Create new arrays sorted with complex options and friendly syntax.

Also, with LoDash, `.reverse()` is always available to chain for methods
that return an array.

```javascript
var deadLastThenJuggalos =  _.sortBy(cityMusicFans, ['deadheads', 'juggalos']);

var deadLastThenParrots =  _.sortBy(cityMusicFans, ['deadheads', 'parrotheads']);

var deadFirstThenParrots =  _.sortBy(cityMusicFans, ['deadheads', 'parrotheads']).reverse();
```

__Remember:__ you can use a callback function as well.


### `_.reduce()`

Reduce methods are in practically every modern programming language. 
Javascript has one, ruby has one, python has one, etc. 

Reduce generally takes the value of an array, and accumulates the total
into some initial value. 

The cool thing about LoDash's reduce, is that it works on objects as 
well.

```javascript
var totalDeadheads = _.reduce(cityMusicFans, function(initialValue, cityFans, index) {
  // You must always return the accumulator!
  return initialValue + cityFans.deadheads;
}, 0); // => 6756

var miamiTotalFans = _.reduce(cityMusicFans[0], function(initialValue, value, keyName) {
  if (keyName.length > 7) {
    initialValue += value;
  }
  // You must always return the accumulator!
  return initialValue;
}, 0); // => 5047
```

##### References

[LoDash Docs](https://lodash.com/docs)

[Lololodash](https://github.com/mdunisch/lololodash)

