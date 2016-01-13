This presentation can be viewed here:[https://presentations.generalassemb.ly/2c139ff7a8fd59fcb82d#/1](https://presentations.generalassemb.ly/2c139ff7a8fd59fcb82d#/1)

# Intro to Node.js

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/440px-Node.js_logo.svg.png)

## Learning Objectives

- Explain the Use Case for Node.js

- Use Node.js to Execute JavaScript

- Create and Use Modules

- Use NPM to Install External Packages

### Transitioning to Unit 3

- In _Unit 2_, you begun your journey of becoming a full-stack developer.

- Although we're heading off the Rails, rest assured that much of what you've
  learned applies to full-stack development as a whole. These concepts will
  serve you well going forward:
  - OOP - Design, Encapsulation of Data (attributes) & Behavior (methods) and
    Inheritance)
  - HTTP and the Browser-Request/Server-Response Cycle
  - MVC (Model/View/Controller) Architectural Pattern
  - ReSTfull Routing & Mapping to Data CRUD
  - Relational Data Modeling
  - Data Manipulation using an ORM such as ActiveRecord
  - Server-side View Templating
  - Authentication & Authorization
  - Testing
  - Deployment

### We're Going Off the Rails

![](http://www.xonitek.com/wp-content/uploads/2013/11/Train-off-the-rails.jpg)

### Here We Go!

- In _Unit 3_, we will delve into the world of:
  - **Node.js** - An operating environment that executes our old
    friend - JavaScript.
  - **Express** - The most popular web framework for Node.js.
  - **MongoDB** - A _NoSQL_, _document_-based database system.

- The three technologies above account for three of the four technologies
  involved in the [MEAN Stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)):
  - **M**ongoDB
  - **E**xpress
  - **N**ode.js

### Heading for a Train Wreck? - No, but...

- Learning new technologies is always a challenge.

- Secondly, Node/Express, unlike with Rails, does not subscribe to the
  _Convention over Configuration_ methodology, which translates into:
  - More code to write to accomplish even the most basic of tasks.
  - Wildly varying ways to structure applications.
  - More flexibility = more complexity.
  - Varying degree of modularization of code.

- Basically, Node/Express apps are the...

![](http://www.wrlsweb.org/desoto/wp-content/uploads/2015/04/wild-wild-west-sign-banner_213473.jpg)

## What is Node.js?
<img src="http://www.nikola-breznjak.com/blog/wp-content/uploads/2014/10/scepticKid.jpg" height="400">

### Facts about Node.js

- An open source, cross-platform, runtime environment that executes JavaScript,
  primarily on the server-side.

- Created in 2009 by Ryan Dahl with Joyent, Inc.

- Written primarily in _C++_, not JS!

- Uses Google's _V8 JavaScript Engine_ to compile JS programs into machine code.

- The Node runtime environment is not the same as in the browser - **there is
  no DOM.**

- Although Node.js is primarily thought ofas a runtime for server-side
  JavaScript, it is also used extensively for running client-side utility
  programs.

- Let's take a look at Node's interactive [Node's REPL](https://nodejs.org/api/repl.html)
  (Read-Eval-Print-Loop). Think of Node's REPL as Node's version of Ruby's IRB.
  Typing `node` in terminal launches it:

```sh
? node
> 10 + 5
15
> function sayHello() {
... console.log('Hello');
... }
undefined
> sayHello()
Hello
undefined
> var http = require('http');
undefined
> http
[ a large JS object representing Node's 'http' module ]
```
Press `control-c` twice to exit REPL.

- Node is an open source project governed by the _Node.js Foundation_ with board
  representation from companies such as:
  - PayPal
  - Microsoft
  - Joyent
  - GoDaddy
  - IBM
  - Red Hat
  - Intel

- There is also a Technical Steering Committee independent from the Board.

- Extremely lightweight. Only low-level "core" modules for networking,
  filesystem access, etc. are baked-in.

- Node's functionality is extended via open source libraries called packages.
  Packages contain one or more modules.

- Packages are to Node, as Gems are to Ruby.

- Packages are managed using a package manager called _npm_ which is installed
  with Node.

- Node's package ecosystem is the largest open source ecosystem in the world.

### Why the Enthusiasm for Node?

- First and foremost, **performance** - businesses can handle more traffic with
  less hardware!

- Secondly, developer **synergy**. Because a developer can use JS on client &
  server, becoming a full-stack dev is more obtainable and companies can better
  utilize their developer resources across the front and back-ends.

- The improvements in server performance and developer productivity result in
  **businesses saving money**.

- Businesses saving money results in **wide adoption**:

![](https://www-static.strongloop.com/wp-content/uploads/2014/06/1500x487xbig-brands.png.pagespeed.ic.J8wxsf_3tn.png)

- Wide adoption of Node results in more **demand for Node developers**:

<img src="http://www.indeed.com/trendgraph/jobgraph.png?q=rails%2C+node.js" width="900">

## Rails or Node?

### Why Choose Rails?

- Quickest path to building an app with full CRUD.

- Better at working with complex data relationships - ActiveRecord rocks!

- When full page refreshes aren't an issue.

- Easier to program because synchronous programming is more straightforward than
  async programming.

### Why Choose Node?

- JavaScript everywhere!

- When high performance and high capacity matter.

- Designed with modern realtime, mobile and Single Page Applications in mind -
  easier to avoid full page refreshes.

### Why is Node so Performant?

- First, it's important to understand how time consuming and "expensive" data
  Input/Output operations are:

<img src="http://image.slidesharecdn.com/nodejsexplained-130219213912-phpapp02/95/nodejs-explained-5-638.jpg?cb=1386103418" width="900">

- Node's **Asynchronous / Event-driven** design enables **non-blocking**
  Input/Output:

<img src="http://image.slidesharecdn.com/talk-nodejsandisomorphicjavascript-150117083443-conversion-gate02/95/introduction-to-nodejs-and-isomorphic-javascript-9-638.jpg?cb=1421483753" width="800">

- This technical jargon basically results in a Node server capable of supporting
  _tens of thousands_ of concurrent connections!
- For more information, check the references at the end of this presentation.

__Rails (Synchronous Programming)__

- Each line of code must finish before the next line is executed. Sounds logical
  until you consider if the line of code involves an I/O operation (network,
  database, or file system call) that your program will spend most of its time
  waiting until the I/O operation is completed.

__Node.js (Asynchronous Programming)__

- Node is asynchronous and non-blocking, that means that it is designed not wait
  for those notoriously slow I/O operations to complete before it moves on.

- Your friend **callback functions** enable this pattern. When our code calls a
  method involving I/O, we also provide a callback function to be, well, "called
  back", when the I/O operation is complete.

### Questions - What is Node.js?

- **True or false - Node itself is written in JavaScript.**

- **Is Node.js a programming language?**

- **What is the primary reason why Node/Express applications are so
  performant?**

- **Is`var elem = document.getElementById('my-list');`a valid statement in a
  Node app?**

### Using Node to Execute JavaScript

Let's see how we can run a JavaScript program in Node:

```sh
? mkdir first-node
? cd first-node
? touch main.js
? subl .
```

Toss in a little JavaScript into `main.js`:

```js
function multiply(x, y) {
  return x * y;
}

var n = multiply(5, 8);

console.log(n);
```

Now use Node to run `main.js`:

```sh
? node main
40
```

_Note how you don't need to include the "js" file extension._

### Practice (5 mins)Use Node to Execute JavaScript

- To practice, and to help get back into JavaScript "mode", replace the code in
  `main.js` with code that:

  - Defines an empty array named `fives`.
  - Uses a `for` loop to loop through the numbers 1 through 100.
  - Within the loop's code block, if the current value of the loop variable is
    evenly divisible by 5, add it to the `fives` array.
  - After the loop has completed, `console.log` the `fives` array.

- Use Node to execute your program.

### Node.js Modules

- Modules in Node allow us to organize and reuse functionality in our program.

- Node itself comes with several **core modules**, such as the `http` and `fs`
  modules.

- In our own programs, each module will be contained in its own file - there is
  a one-to-one mapping between a file and a module.

- You can put your module files in any folder within your project. This allows
  us to organize our code inside folders named `models`, `routes`, etc.

### Modules _exports_ Their Functionality


- Inside of our modules, Node automatically provides a special object named
  `module.exports`.

- We can use `module.exports`, or just the `exports` object to attach our
  functionality:

```js
module.exports.myNumber = 123;
// same as above
exports.myNumber = 123;

// add as many properties as you wish
exports.sayHi = function() { console.log('Hi'); };
```

- If we want to **assign** one piece of functionality without using a property,
  be sure to use `module.exports`:

```js
module.exports = function() { console.log('Hi'); };
// Below will not work due to breaking the object reference
exports = function() { console.log('Hi'); };
```

### Using the <em>require</em> Method

- Wherever and whenever we need to use our module, we just `require` the module
  file, without the file extension, using a relative path.

- The module is actually loaded only once even if "required" in multiple
  locations.

- Whatever we attached to the `module.exports` object is then available on the
  variable that we set using `require`:

```js
var myMod = require('my-module');
console.log(myMod.myNumber);  // outputs 123
```

- Or, in the case where we assigned to the `module.exports` object without using
  properties, use the variable set by `require` directly:

```js
var sayHi = require('my-module');
console.log( sayHi() );  // outputs 'Hi'
```



### Our First Module


- Let's create a module that:
  -  Provides an array containing two-character names of the days of the week.
  -  Provides a function named `getWeekday` that accepts a number from0 to 6 and
     returns the name; where 0 = 'Su'.
  -  If an invalid number is passed in, assume a value of 1.

- Let's put our module inside of a "utilities" folder and name it
  "days-of-week.js":

	```sh
	? mkdir utilities
	? touch days-of-week.js
	```

The code will look like this:

```js
// days-of-week.js

// This is a local variable in scope to this module only
var defaultDay = 1;

// Exporting the weekdays array
module.exports.weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

// You can "attach" properties directly on "exports".
// However, "assigning" directly to just exports breaks
exports.getWeekday = function(dayNo) {
	return exports.weekdays[dayNo < 0 || dayNo > 6 ? defaultDay : dayNo];
}

console.log("days-of-week module has been loaded");
```

Use our module in "main.js":

```js
// main.js

var dow = require('./utilities/days-of-week');

// Outputs the weekdays array
console.log(dow.weekdays);

// Outputs "Fr"
console.log(dow.getWeekday(5));
```

Run "main.js" with Node

`> node main`

### Practice (20 mins) - Modules

Create two separate modules:

A module named "random" that has a function **assigned** to the `module.exports`
and returns a random number, as an integer, between two numbers provided,
inclusive, as arguments; so that we could use it in our program like this:

```js
var random = require('./utilities/random');
for (var i = 0; i < 10; i++) {
	console.log( random(100,200) );
}
```

A module named "circle" that exports two functions:

- `area`: Computes the area of a circle (radius squared X Pi), with the radius
  provided as an argument.

- `circumference`: Computes the circumference of a circle (radius X 2 X Pi),
  with the radius provided as an argument.

- Hint: This is JS, so `Math.PI` is available.

```js
var circle = require('./utilities/circle');
console.log( circle.area(50) );  // 7853.98...
console.log( circle.circumference(75) );  // 471.23...
```

### Questions - Modules

- **What are modules used for in Node?**

- **How many modules can be defined in a file?**

- **What is the special object we use in our module to attach or assign
  functionality to?**

- **How many times can we `require` a module in our program?**

- **Does the variable name we use need to match the name of the module?**

### NPM - Node Package Manager

Now that you've created and used your own modules, let's see how we can install
open-source packages and use the modules they contain.

- Node uses a package management system to distribute open-source packages
  called **N**ode **P**ackage **M**anager (_npm_).

- Working with packages in Node is very similar to working with gems in Ruby:

	| Ruby | Node |
	| --- | ------- |
	| `gem install ... ` | `npm install ...` |
	| `bundle install` (works with `Gemfile`) | `npm install` (works with `package.json`)|

- Let's use `npm` to install one of Node's packages:

	```sh
	? npm install request
	```

- Take a look and you will find that a `node_modules` folder has been added to
  your project and that it contains a folder for the `request` module.

- Note: it's recommended that `node_modules\` be added to your `.gitignore`
  file.

- We can now require the `request` module in our "main.js" and make HTTP
  requests:

```js
// Don't specify path when module is in node_modules
var request = require('request');request('http://jsonplaceholder.typicode.com/users', function(err, res, body) {
	console.log(body);
});
```

- **Why do we need to provide a callback?**

- Note the first parameter in the callback is `err`. This "error-first" callback
  signature is prevalent throughout Node.

- Use Node to execute "main.js" and check out the result!

- `npm` uses a `packages.json` file to define our application's profile and both
  its application dependencies & development dependencies.

- The `package.json` file works a bit like a `Gemfile` in that we can install
  the dependencies from it.

- Let's delete our `node_modules` file:

	```sh
	? rm -rf node_modules
	```

- Now we can create our `package.json` file...

- Create our `package.json` file like this:

	```sh
	? npm init
	// just accept the default values by pressing enter...
	```

- Let's edit our `package.json` to include the `request` module dependency:

	```json
	{
  		"name": "first-node",
	...
  		"dependencies": {
    		"request": "latest"
  		}
	...
	}
	```

- Now we can install our app's dependencies like this:

	```sh
	? npm install
	```
	Witness the return of `node_modules`!


### Conclusion


- In the next lesson, you will use one of the most popular Node modules,
  `Express`, that turns Node into a capable web server.

- **Questions?**

- Take a break!


### References


[Node.js Homepage](https://nodejs.org/)

[Node Package Manager](https://www.npmjs.com/)

[Why Do Companies Choose Node](https://strongloop.com/strongblog/why-do-companies-choose-node-performance-scalability-and-productivity/)

[Blocking/Non-Blocking, Async/Sync](http://stackoverflow.com/questions/10570246/what-is-non-blocking-or-asynchronous-i-o-in-node-js)

[Node Event Loop](https://www.youtube.com/watch?v=0fM4pRAs3BI)
