# Choose Your Own Adventure
![](http://ww2.kqed.org/pop/wp-content/uploads/sites/12/2013/07/comics-choose-your-own-adventure-cover.jpg)
## JavaScript Context

| Lesson Objectives - SWBAT                |
| ---------------------------------------- |
| Explain the difference between Context and Scope |
| Explain implicit and explicit binding   |
| Effectively use `Function.prototype.apply()` & `Function.prototype.call()` |
| Effectively use `Function.prototype.bind()` |
| Effectively use `this` in an event handler |

#### Road Map

1. `this` is Your Story
2. Scope vs. Context
3. Implicit Binding
4. `new` Binding and `window`
5. Explicit Binding
6. `this` in Event Handlers
7. Outro

## `this` is Your Story

In Javascript, the keyword `this` can be quite elusive. Many developers with years under their belts will still make the occasional mistake.

The reason is `this` is often defined much like a Choose Your Own Adventure - decided by those that call upon it.

Therefore, we can change the meaning based on who's using `this`!

JS's use of context is an extremely flexible feature of the language - it often leads to the most powerful design patters in JavaScript.

## Scope vs. Context

It's important to understand the distinction between Context and Scope. Many JS developers muddy the two meanings, but they are absolutely not the same.

Every function invocation contains both a scope and a context associated with it. Fundamentally, scope is *function-based* while context is **object-based**.

Scope pertains to the variable access of a function when it is invoked and is unique to each invocation. Context is always the value of the `this` keyword which is a reference to the object that “owns” the currently executing code.

Another way to think about it is:

- Context is exactly where the function comes from, known as `this`
- Scope is where we are, as well as all variables that are global and available in enclosing functions.

**Remember**:

1. Local variables exist only within the function body of which they are defined and will have a different scope for every call of that function.
2. Any defined global variable, meaning any variable declared outside of a function body will live throughout runtime and can be accessed and altered in any scope.


## Implicit Binding

![](https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2012/3/23/1332528085047/Musical-Youth-008.jpg)

Implicit binding refers to the "implied" binding of `this` to a function invocation. Think of it as what "owns" the function.

With implicit binding, there's really only one rule to remember:

### **_♫ Pass the Context to the Left Hand Side! ♫_**

That's right: whatever is to the left of the function invocation is, by default, `this`.

Let's look at a few examples:

```javascript
var scooby = {
  name: 'Scooby Doo',
  sayName: function() {
    console.log(`I'm ${this.name}!`);
  }
}

// Who is `this`?
scooby.sayName();

// ♫ Pass the Context to the Left Hand Side ♫
// => "I'm Scooby Doo!"

var shaggy = {
  name: "Shaggy",
  sayName: scooby.sayName
}

// Now, who's this?
shaggy.sayName();

// ♫ Pass the Context to the Left Hand Side ♫
// => "I'm Shaggy!"

scooby.buddy = shaggy;

// Oh no! Could it really be?
scooby.buddy.sayName();

// ♫ Pass the Context to the Left Hand Side ♫
// => "I'm Shaggy!"
```

Implicit context makes up ~80% of the situations you use `this`.

If you're still having trouble, think of this function:

```javascript
function iveKnownThisAllAlong(guess) {
  console.log(`It's ${guess === this}!`);
}
```

Whatever invokes `iveKnownThisAllAlong`, if passed also passed as a parameter, will return `true`.

```javascript
var sleuth = {
  name:  "Paul Auster",
  detect: iveKnownThisAllAlong
}

sleuth.detect(sleuth);
// => "It's true!"

sleuth.detect({
  name: "Paul Auster",
  detect: iveKnownThisAllAlong
});
// => "It's false!"

sleuth.detect();
// => "It's false!"
```

> Remember, objects have unique ids in JS - just because they have the same keys and values, does not make them the same object!

## `new` Binding and `window`

#### But What if There's Nothing to the Left!?

There is always something to the left: __The global object__!

Unless you're in `'use strict';` mode, you always have access to the global object - in the browser, this will be `window`.

```javascript
function tellMeThis() {
  console.log(this)
}

tellMeThis();
// => window
```

Using `'use strict'` changes the value of `this` (when on the global scope) from `window` to `undefined`. See the table below for a better understanding of `this` on the global scope:

| Usual global | in 'use strict' |
| :----------: | :------------:  |
| `window`     | `undefined`     |

Let's alter our `tellMeThis` function to see what I mean:

```javascript
function strictlyTellMeThis() {
  'use strict';
  console.log(this);
}

strictlyTellMeThis();
// => undefined
```

> Can anyone tell me why this is such a necessary feature in JavaScript?

#### Constructors and `new`

Often, we write our constructors using `this`, planning for the use of the `new` keyword.

```javascript
function Detective(name, psuedonym, character) {
  this.name      = name;
  this.psuedonym = psuedonym;
  this.character = character;
}

var pI = new Detective("Daniel Quinn", "Paul Auster", "Max Work")

var clouseau = Detective("Jacque Clouseau", "Jacque Clouseau", "Jacque Clouseau");
```

Notice how `clouseau` is `undefined` - he's gone and mucked up our `window`!

In order to avoid this mistake, try and remember to build your constructors with `'use strict';` mode - it'll help you catch errors early!

```javascript
function Detective(name, psuedonym, character) {
  'use strict';
  this.name      = name;
  this.psuedonym = psuedonym;
  this.character = character;
}

var pI = new Detective("Daniel Quinn", "Paul Auster", "Max Work");

var clouseau = Detective("Jacque Clouseau", "Jacque Clouseau", "Jacque Clouseau");
// => THROWS ERROR! CANNOT SET PROPERTY "name" ON undefined!
```
## Explicit Binding

Explicit, or functional binding works a little differently. Three functions define explicit binding:

1. `Function.prototype.call()`
2. `Function.prototype.apply()`
3. `Function.prototype.bind()`

Using these methods, you can set `this` when you invoke a function.

#### `.call()` and `.apply()`

These two functions are near identical.  Each take the object you want to bind the context to as it's first argument.

The only difference:

- `.call()` takes the remaining arguments one by one.
- `.apply()` takes an array as the second argument.

For instance:

```javascript
function whosOnTheCase(dreamer, realist) {
  return `Agents ${dreamer} and ${realist} were assigned by director ${this.director}.`
};

var xFiles = {
  director: "Skinner"
};

whosOnTheCase.call(xFiles, "Mulder", "Scully");
// => "Agents Mulder and Scully were assigned by director Skinner."
var agents = ["Mulder", "Scully"];

whosOnTheCase.apply(xFiles, agents);
// => "Agents Mulder and Scully were assigned by director Skinner."
```

> Javascript Secret: Every time you invoke a function, you're secretly invoking `.call()` with the global object (aka `window` in the browser).

## `this` in Event Handlers

Event handlers don't always act the way you assume, but they may actually be the easiest of the bunch.

`this` is defined on the event the handler is registered.

```javascript
// `this` will always be the unique html element with the id, #flapjack
$('#flapjack').on('click', function() {
  return this;
});

// `this` will be defined as whatever element has been clicked on with the class name, .crystalGems
$('.crystalGems').on('click', function() {
  return this;
});
```

Look at the sample code, and exchange the id name ('#context-button', '#context-div', '#context-main') and click on the boxes to demonstrate the use of `this` in event handlers.

You can also choose your own context with the four boxes on the right. Notice it's using `this` to print out html attributes!

## Outro

You've made it through the context dungeon and solved the mystery - you are a true adventurer!

Context is bound to throw you for a loop from time to time, but if you follow the rules in this README, I promise you'll spot the error in no time.

Questions:

1. In terms of implicit binding, where can we find the value of `this`?
2. Why is `'use strict';` mode so valuable for JS developers?
3. What is the difference between `.call()` and `.apply()`?
4. What defines `this` in event handlers?

#### References

[Understanding Scope and Context in JS](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)

[The `this` Keyword](https://egghead.io/lessons/javascript-the-this-keyword-introduction-and-implicit-binding)

[MDN `this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
