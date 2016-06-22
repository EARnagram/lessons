# From Scary to Friendly

<img src="http://i.dailymail.co.uk/i/pix/2015/02/15/25B321FB00000578-2954536-Healing_a_broken_heart_Mickey_picked_up_the_two_pups_after_his_b-a-46_1424023876938.jpg" width=250px>

## ES2015 Additions to JavaScript

| Lesson Objectives - SWBAT                                |
| :------------------------------------------------------- |
| Use string interpolation                                 |
| Use `let` and `const` for block scoping                  |
| Manipulate context using the fat arrow functions         |
| Use Rest and Spread Parameters                           |
| Set default parameter arguments                          |
| Use `import` and `export` to pass JS modules             |
| Use destructuring to access nested modules               |
| Create es2015 classes with custom methods                |
| Use `extends` to inherit from other constructors/classes |
| Create static methods                                    |
| Use `get` and `set` to add logic to accessing a property |

#### Road Map

1. What is ES2015?
2. String Interpolation
3. Block Scope
4. Arrow Functions
5. Rest and Spread Parameters
6. Default Arguments
7. Import and Export
8. Destructuring
9. ES2015 Classes
10. Outro


## What is ES2015?

ES2015 is a pseudonym for the latest version of the JavaScript, or
ECMAScript, programming language to be approved by ECMA International,
the standards group responsible for vetting and approving different
versions of the language, populated by JS heavy hitters like Douglas
Crockford.

#### Is it scary!?

Not at all! It's actually extremely helpful, but, as you know, learning
any new syntax can be quite a pain.

Most JS developers believe es2015 has been a long time coming. We're
finally at a point where the majority of modern browsers have
implemented the key features - this means sweet JS development from
here on out!

#### What is this .babelrc?

While the majority of es2015 has been implemented in browsers and node,
we need the __babel transpiler__ for the remaining features.

Babel has plugins (eg. `es2015`) you can use to implement
non-vanilla features in your code. Babel simply transpiles the code into
vanilla JS.

#### So how will this lesson work?

For each exercise, you must uncomment the
`require('./exercises/filename.js');` and work on the corresponding
file.

You then run the __main__ file in the terminal:

##### `$ node es2015_scary_to_friendly.js`

## String Interpolation

Instead of adding variables together with strings, you can simply use
embedded Javascript!

You can access other variables within your strings, even methods on
those strings.

Ex:

``` javascript
var thing = "variable";

console.log(`Ceci n'est pas une ${thing.toUpperCase()}!`);
```

## Block Scope

`let` and `const` declare a block scoped variable. `const` also makes
the variable a constant. JS will actually throw an error if you try and
overwrite a `const` variable.

``` javascript
function varFoo() {
  var neilYoung = "Crazy Horse";
  if (true) {
    var neilYoung = "Crosby, Stills, Nash, and Young";  // same Neil!
    console.log(neilYoung);  // "Crosby, Stills, Nash, and Young"
  }
  console.log(neilYoung);  // "Crosby, Stills, Nash, and Young"
}

function letBar() {
  let zappa = "Hot Rats";
  if (true) {
    let zappa = "Havin' a Bad Day";  // by Dweezil - different Zappa!
    console.log(zappa);  // "Havin' a Bad Day"
  }
  console.log(zappa);  // "Hot Rats" - back to Frank!
}
```

## Arrow Functions

Arrow functions are a new and relatively cleaner way to write functions. You can
use them anonymously or named, and if they have only argument, you don't need
parenthesis!

 Also, if used within another function, arrow functions will bind the context to
 the enclosing function!! No more need to use `var self = this;`!!!!

``` javascript
() => "No need to use the return keyword on one line functions!";

var beetlejuice = name => {
  return name.repeat(3);    	// String.prototype.repeat() HAS ALSO BEEN ADDED!
}								              // THAT'S A BIG MEATBALL!
```

## Rest Parameters & Spread Operators

Rest Parameter: The **rest parameter** syntax allows us to represent an
indefinite number of arguments as an array. It must be the last argument
in a function definition.

__Remember:__ the rest parameter is used when the function/method is
defined!

Spread Operator: The **spread operator** allows an expression to be expanded in
places where multiple arguments (for function calls) or multiple elements (for
array literals) are expected.

__Remember:__ the spread operator is used when the function/method is
invoked!

What this means: No need to mess with that awful `arguments` object
ever. again.

Also, it means we no longer need `Function.prototype.apply()`!

``` javascript
// rest parameter
function otherMotherVictimsCount(...ghostChildren) {
  console.log(ghostChildren.length);
}

otherMotherVictimsCount();  									// 0
otherMotherVictimsCount("Margaret"); 						// 1
otherMotherVictimsCount("Margaret", "Freddie", "Josephine"); // 3

var children = ["Margaret", "Freddie", "Josephine"];

var otherMotherVictims = [];

// spread operator
otherMotherVictims.push(...children);
```

## Default Arguments

In ES2015, we can now give default arguments within our functions. The latter
arguments can even take from previous arguments!

```javascript
var misconceptions = function(shark = "JAWS", bodyPart = shark.substring(0,3)) {
  var truth = "Not all sharks are " + shark;
  var lies = "Not all Travoltas have an enormous " + bodyPart;
}
```

## Import & Export

You can now import and export modules as well!

``` javascript
// --violent_j.js--
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText)
  };
  xhr.open("GET", url, true);
  xhr.send();
}

export function getUsefulContents(url, callback) {
  getJSON(url, data => callback(JSON.parse(data)));
}


// --shaggy_too_dope.js--
import { getUsefulContents } from "file.js";
getUsefulContents("http://www.example.com", data => {
  doSomethingUseful(data);
});
```

or:

``` javascript
// --violent_j.js--
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText)
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function getUsefulContents(url, callback) {
  getJSON(url, data => callback(JSON.parse(data)));
}

export default {
  getUsefulContents: getUsefulContents,
  getJSON:           getJSON
}


// --shaggy_too_dope.js--
import Miracles from "file.js";
Miracles.getUsefulContents("http://www.example.com", data => {
  Miracles.doSomethingUseful(data);
});
```

There are too many different ways to import and export to explain them
all here.

Turn to MDN for the other options on
[`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
and [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export).

## Destructuring

"The destructuring assignment syntax is a JavaScript expression that
makes it possible to extract data from arrays or objects into distinct
variables." —_MDN_

What does this mean??

```javascript
// with arrays

var critters = [gizmo, stripe, ...gremlins] = ["mogwai", "mogwai", "dirty", "slimey", "gross"];

console.log(gizmo);    // "mogwai"
console.log(stripe);   // "mogwai"
console.log(gremlins); // ["dirty", "slimey", "gross"]
console.log(critters); // ["mogwai", "mogwai", "dirty", "slimey", "gross"];

// with objects

var name = "gizmo";
var gremlin = false

var mogwai = {name, gremlin};

console.log(mogwai) // { name: "gizmo", gremlin: false }
```

We use destructuring a lot with ReactJS, and you'll see it reduce our
code length considerably. There's a lot of nuance to your options with
destructuring, and many more changes to come in ES2016.

Look at the [destructuring docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
to familiarize yourself with the other options.

## Classes

![](http://i.kinja-img.com/gawker-media/image/upload/lds5kn7tzjpcnteppyrv.jpg)

Let's talk about ES2015 classes with one of the most classist societies
I know of, ***2019 Los Angeles***!

#### From Constructors to Classes

ES2015 brings us one of the most righteous additions JS could get - we
can now move away from constructor functions and use classes instead!

### Class Syntax

Let's begin with a familiar constructor function.

```javascript
function Eye(color, size) {
  this.color = color;
  this.size  = size;
  this.temp  = -80;
}
```

To define a class, we need to first make a constructor method within our
new class.

``` javascript
class Eye {
  constructor(color, size) {
    this.color = color;
    this.size = size;
    this.temp = -80;
  }
}
```

But what about the `prototype` object on the constructor?

```javascript
function Eye(color, size) {
  this.color = color;
  this.size  = size;
  this.temp  = -80;
};

Eye.prototype.roboTears() {
  console.log(`You wouldn't know if my ${this.color} eyes are cryin'.`);
}
```

We define other methods directly underneath. Under the hood, these
methods are attached to the prototype of the constructor function (which
is the class).

Notice we __do not__ use comma delimiting for methods.

``` javascript
class Eye {
  constructor(color, size) {
    this.color = color;
    this.size = size;
    this.temp = -80;
  }

  roboTears() {
    console.log(`You wouldn't know if my ${this.color} eyes are cryin'.`);
  }
}
```

### Extending Classes

![Eyes](http://vignette2.wikia.nocookie.net/bladerunner/images/2/2f/BladeRunner_Voigt-Kampff_machine.jpg/revision/latest?cb=20051217125212)

We all know that Androids were modeled after humans - therefore, a lot
of the design was done by a mirror!

Luckily, in es2015 we can `extends` a class and use it for another.

``` javascript
class Eye {
  constructor(color, size) {
    this.color = color;
    this.size = size;
    this.temp = -80;
  }
  roboTears() {
    console.log(`You wouldn't know if my ${this.color} eyes are cryin'.`);
  }
}

class Camera extends Eye {
  roboTears() {
    console.log(`I can't say ${super.roboTears()}. My ${this.color} lens cannot cry.`);
  }
}
```

We can make super class calls with `super`. `super` allows to specify
functions defined on our object's parent (the class we extended).

``` javascript
class Eye {
  constructor(color, size) {
    this.color = color;
    this.size = size;
    this.temp = -80;
  }

  roboTears() {
    return `You wouldn't know if my ${this.color} eyes are cryin'.`;
  }
}

class Camera extends Eye {
  constructor(color, size, brand) {
    super(color, size);
    this.temp = 50;
    this.brand = brand;
  }

  roboTears() {
    return `I can't say "${super.roboTears()}"… my ${this.color} lens cannot cry.`;
  }
}
```

### Using `static`, `get`, and `set`

The `static` keyword defines a static method for a class. Static methods 
are called on the class, not on the instances of the class!

Static methods are often used to create utility functions for an 
application.

``` javascript
class Eye {
  constructor(color, size) {
    this.color = color;
    this.size = size;
    this.temp = -80;
  }

  static colorMix(a, b) {
    let combineColor = a.color + b.color;
    return `I want ${combineColor} eyes!`;
  }
}

const eye1 = new Eye("blue", "L");
const eye2 = new Eye("gray", "M");

console.log(Eye.colorMix(eye1, eye2));
```

`get` and `set` are getters and setters for es6 classes! You can add
logic to changing and/or accessing a property.

``` javascript
class Eye {
  constructor(color, size) {
    this.color = color;
    this.size = size;
    this.temp = -80;
  }

  set ruin(num) {
    if (num > 0) {
      this.temp = num;
      this.color = "gray";
    } else {
      throw new Error(`${num} degrees is perfect for these eyes!`);
    }
  }

  get medSize() {
    if (this.size === "M") {
      return "Medium.";
    } else {
      return "I'm a weird eye."
    }
  }
}

var lens = new Eye("blue", "M");

var bigLens = new Eye("green", "L");

console.log(lens.medSize, bigLens.medSize);  // "Medium." "I'm a weird eye."

lens.ruin = 20;

console.log(lens.color); // "gray"

bigLens.ruin = -10; // Throws error
```

## Outro

Welcome to the future! We've now begun our great ES2015 friendship!

There's plenty more to learn, so be sure to look at the referenes below.
As always, let's close with some questions:

1. What is string interpolation?
2. What does `const` do for us?
3. Besides shortening our code, what functionality does the fat arrow
   function give us?
4. How can we share modules across multiple files on the front end?
5. What is destructuring?
6. Classes are syntactic sugar for __________ __________.
7. What does the `super` keyword do?
8. What are `static` methods?

## References

[ES2015 in 350 Bullet Points](https://github.com/bevacqua/es6)

[`tower-of-babel`](https://github.com/yosuke-furukawa/tower-of-babel)

[`count-to-6`](https://github.com/domenic/count-to-6)

[MDN ES2015 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

[ES2015 Classes and Future Proposals](http://h3manth.com/content/classes-javascript-es6)
