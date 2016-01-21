This presentation can be viewed here:
[https://presentations.generalassemb.ly/c595e0c707dc5429ba9e#/1](https://presentations.generalassemb.ly/c595e0c707dc5429ba9e#/1)

# Intro to theExpress Frameworkfor Node

![](http://www.softwaresecured.com/wp-content/uploads/2015/04/express-js.jpg)

## Learning Objectives

- Create a Basic App From Scratch With the Express Framework

- Configure a Web Application's Settings

- Render Views

- Require and Mount Middleware

- Describe the Request/Response Cycle in an Express App

- Use the Express Generator to Scaffold a Skeleton App

- Create and Mount Express Routes

### Express Framework - Intro

- Express is the most popular web framework for Node.js.

- It is a minimalistic and lightweight, especially when compared to a massive
  framework such as Rails.

- Express uses Node's built-in HTTP server, but extends its capability by giving
  us the ability to:
	- Define Routes
	- Define Custom; and use existing Middleware
	- Use View Engines to render views

### Setup our App

- Create a folder and cd into it:

	```sh
	? mkdir first-express
	? cd first-express
	```

- Create our `package.json`. Accept the defaults, **except** for the __entry
  point__ - set this to be "**server.js**":

	```sh
	? npm init
	```

- `subl .`

### Install the Express Module

- Use `npm` to install the Express module in this project:

	```sh
	? npm install express --save
	```

- The `--save` option makes an entry in the dependency section of our
  `package.json` file.

- Create a `server.js` to put our web app's main code in:

	```sh
	? touch server.js
	```

### Express - Hello World!

- To test our setup, let's make our app return "Hello World!" when we browse to
  `localhost:3000`.  In `server.js`:

	```js
	// Load express
	var express = require('express');

	// Create our express app
	var app = express();

	// Define a root route directly on app
	// Later, we will use the router object
	app.get('/', function(req, res) {
	  res.send('<h1>Hello World!</h1>');
	});

	// Tell the app to listen on port 3000
	app.listen(3000, function() {
	  console.log('Listening on port 3000');
	});
	```
- Run the app, then browse to `localhost:3000`:

	```sh
	? node server
	```


### Basic Structure of Express App


- Here is a helpful outline of what we need to do in our main Express app file.
  Let's put this guide right in our `server.js`:

	```js
	// Require modules
	var express = require('express');

	// Create the Express app
	var app = express();

	// Configure the app (app.set)


	// Use middleware (app.use)


	// Define and use routes


	// Tell the app to listen on port 3000
	app.listen(3000, function() {
	  console.log('Listening on port 3000');
	});
	```


### Out First Route


- Now let's add a route similar to our Hello World:

	```js
	app.get('/', function(req, res) {
	  res.send('<h1>Hello Express</h1>');
	});
	```

- If you refresh the page, you'll see that it still says "Hello World!" - what's
  up?  Well, unlike with Rails, Node does not automatically restart the server
  for us when we make changes to our code.

- Of course there are utilities to perform the restart for us, but until we
  install one later this week, get used to stopping the server with `control-c`
  and restarting it.

- Looking at first route in Sublime, note that we are defining a route using the
  `get` method on the Express `app` object. Later, we will learn a preferred way
  of defining routes using the Express `Router` object, but you need to be aware
  of defining routes this way because you will see it quite often.

- Besides the `get` method, there are other methods such as `post`, `put` and
  `del`, that map to the other HTTP verbs.

- In this case, we have specified a path of `/`. Only get requests matching this
  path will invoke the callback function.

- When invoked, the route's callback function will be passed two arguments, the
  first representing the [request](http://expressjs.com/api.html#req) object,
  the second the [response](http://expressjs.com/api.html#res) object.


### Practice (2 mins)Define a Simple Route

- Define another route that matches a `get` request to a path of `/goodbye` that
  sends a text response of "Goodbye World".

- Don't forget to restart the server and test your new route by browsing to
  `localhost:3000/goodbye`.

### Question - Basic Routing

- **Is it okay to define more than one route on the same path?For example:**

	```js
	app.get('/cars', function(req, res) {
  		res.send("Here's a list of my cars...");
	});

	app.post('/cars', function(req, res) {
  		res.send('Thanks for the cars!');
	});
	```

### Request Parameters

- Remember the `params` object in Rails? Well, the _request_ object in Express
  has a `params` object also.

- **However**, it only contains the parameters contained in the routes:

- Let's add another route:

	```js
	app.get('/goodbye/:name', function(req, res) {
  		res.send('Goodbye ' + req.params.name);
	});
	```

- Restart and check it out:

	```sh
	localhost:3000/goodbye/PeeWee
	```

### Query String Values

- **What is a `query string`?**

- In Express, we can access them in our route handlers using the `query` object
  attached to the _request_ object. Let's modify our root route to try this out:

	```js
	app.get('/', function(req, res) {
		var msg = req.query.msg ? req.query.msg : '';
  		res.send('<h1>Hello Express ' + msg + '</h1>' );
	});
	```

- **What do we type in the address bar to test this out?**

### Ways to Respond to a Request

- So far we have responded in our route handler (callback) code by using the
  `send` method on the _res_ (response) object.

- Here is a list of other methods that can be used to terminate the
  request/response cycle:
  - `res.json()` - Send a JSON response
  - `res.jsonp()` - Send a JSON response with JSONP support
  - `res.redirect()` -	Redirect a request
  - `res.render()` - Render a view template
  - `res.send()` - Send a response of various types
  - `res.sendFile()` - Send a file as an octet stream


- Let's change our `/goodbye` route to return `json` instead of plain text:

	```js
	app.get('/goodbye', function(req, res) {
  		res.json( {msg: 'Goodbye World'} );
	});
	```

- Try it out!

### Rendering Views

- We can use the `render` method on the _response_ object to render templates.

- Express can work with a multitude of _view engines_.

- [`Jade`](http://jade-lang.com/) is a template language that leverages
  indentation to create HTML with a "shorthand" syntax.

- When we scaffold an app using the _Express Generator_ (more on this later),
  Jade is the default because it is written by the same fine people that brought
  us the Express framework.

- [`EJS`](http://www.embeddedjs.com/) (embedded JavaScript) templates look and
  work very much like _erb_ templates - much nicer IMHO!

- To try out views in Express, let's say we decided to render a `home` view for
  the root route.

- Like in Rails, it's common to organize views inside of a separate folder.
  However, unlike Rails, we can call it and put it anywhere we want within our
  project. Rails' conventions are pretty genius though:

	```sh
	? mkdir views
	? touch views/home.ejs
	```

- `ejs` is the file extension for the EJS view engine.

- Note that we don't use a `.html.` before the file extension like we did in
  Rails.

- We're not going to go into depth on EJS templates in this lesson. In fact,
  because MEAN Stack apps are Single-Page applications, server-side view engines
  are not very useful because they typically serve up an `index.html` page and
  HTML fragments from then on.

- As a consequence, EJS templates do not have a layout feature. However, they do
  have partials. To learn more, there's a link in the References section
  regarding EJS templating.

- Sublime/Emmet won't recognize EJS templates, so click the file type at the
  bottom right and select **HTML**. After doing so, you will be able to type
  `html:5` and press tab to generate our HTML boilerplate in `home.ejs`:

	```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
  		<meta charset="UTF-8">
  		<title>Document</title>
	</head>
	<body>
	</body>
	</html>
	```

- Add an `<h1>` inside the `<body>` so that we see something :)

	```html
	<body>
  		<h1>Home Page</h1>
	</body>
	```

- Okay, let's modify our callback in our root route to render our new `home.ejs`
  template:

	```js
	app.get('/', function(req, res) {
  		res.render('home');
	});
	```

- Just the file name, not the `ejs` extension.

- Restart, browse, what happened?...

- First off, we'll notice that Express' error messages aren't as "pretty" as
  those in Rails. Remember, Express is "lightweight".

- Express's errors also in general won't be as helpful as in Rails, but this
  one, _Error: No default engine was specified..._, makes it clear that we need
  to specify a view engine.

- This is our first opportunity to configure our app:

	```js
	// Configure the app (app.set)
	app.set('view engine', 'ejs');
	```
- The `set` method on the Express `app` object is used to configure the app's
  settings...

- We also need to tell Express **where** are views can be found:

	```js
	// Configure the app (app.set)
	app.set('view engine', 'ejs');
	app.set('views', path.join(__dirname, 'views'));
	```

- Don't be intimidated by this code:`path.join(__dirname, 'views')`

- `path.join` is just a method that builds a properly formatted path from
  segment strings passed to it. `__dirname` is always available and represents
  the path of the current folder where the currently running code lives; and
  `views` is the name of the folder we created to hold our views.

- Restart and try again...

- This time our server app won't even start up due to an error that looks like
  this: _ReferenceError: path is not defined_.

- _WFT Jim, why did you have us use a method that doesn't even exist?_ More
  errors to learn from my friends :)

- The Node core contains a `path` module, so we don't have to `npm install` it,
  but we do have to `require` it:

	```js
	// Require modules
	var express = require('express');
	var path = require('path');
	```

- Restart and let's see what the next error is...

- _Error: Cannot find module 'ejs'_ is telling us that we need to install the
  EJS view engine package:

	```sh
	? npm i ejs
	```

- Note the `i` is a shortcut for `install`.

- Express will automatically require the view engine for us, so we don't need
  to.

- Restart and bam!


### Passing Data to a View


- The purpose of using a view engine is so that we can render data dynamically
  using a template.

- We just used the `render` method, passing in the view name as an argument.
  However, we can pass in a JavaScript object as a second argument, and all of
  it's properties will be available for use directly in the view within `ejs`
  tags!

- Let's replace our first `/goodbye` route to display a list of To Do's:

	```js
	app.get('/todos', function(req, res) {
	  var todos = [
	    {todo: 'Feed dogs', done: true},
	    {todo: 'Learn Express', done: false},
	    {todo: 'Have fun', done: true}
	  ];
	  res.render('todos/index', {
	  	todos: todos
	  });
	});
	```

- Note that we will have to create a folder inside of our views folder named
  `todos` and add a filed named `index.ejs` to it:

	```sh
	? mkdir views/todos
	? touch views/todos/index.ejs
	```

- Now let's code our `todos/index.ejs`. Start by coping over the HTML from
  `home.ejs` and fix it up to look like this:

	```html
	<body>
	  <h2>Todos</h2>
	  <ul>
	    <% todos.forEach(function(t) { %>
	      <li>
	      <%= t.todo %>
	       -
	      <%= t.done ? 'done' : 'not done' %>
	      </li>
	    <% }); %>
	  </ul>
	</body>
	```

- This should look very familiar to you!  Any questions?

- If you have data that you want available to all views, the Express `app`
  object has a `locals` object on it that you can add properties to.

- Let's see how we can use this to provide our app's `title`. In `server.js`:

	```js
	app.set('views', path.join(__dirname, 'views'));
	// new code below
	app.locals.title = 'First Express';
	```

- Then in both `home.ejs` and `index.ejs`, update the `<title>` element in the
  `<head>`:

	```html
	<meta charset="UTF-8">
  	<title><%= title %></title>
	```


### Add a Todo


- To demonstrate how we can use a form to add a todo (albeit, not persisted),
  let's add a `<form>` element to `index.ejs` below the `</ul>` tag:

	```html
	...
	  </ul>

	  <form action="/todos" method="post">
	    <input type="text" name="newTodo">
	    <input type="submit" value="Add Todo">
	  </form>
	```

- Wait! **Don't restart** the server and refresh the page. Why did the newly
  updated view appear without restarting? Well, templates are processed with
  each request, so the server always sees the current version of views.

- **We need a route, who would like to help stub it up?**

- Let's stub it up like so:

	```js
	app.post('/todos', function(req, res) {
	  res.render('todos/index');
	});
	```

- Now, restart and see what happens...

- We're blowing up because the `todos` array is not accessible in our new route.
  Let's put our `todos` array on the `locals` object in `server.js` to create a
  poor man's database:

	```js
	app.locals.title = 'First Express';
	app.locals.todos = [
	  {todo: 'Feed dogs', done: true},
	  {todo: 'Learn Express', done: false},
	  {todo: 'Have fun', done: true}
	];
	```

- Be sure to remove the `var todos` from inside the route handler and fix it up
  to be simply `res.render('todos/index');`

- Let's submit a new Todo and check DevTools' Network tab to see what the
  request looks like...

- Checking the `Content-Type` of the Request Headers will show that our our data
  is being submitted to the server in a form's standard format:
  `application/x-www-form-urlencoded`

- This form data does not come in on the `params` object like it does in Rails,
  it comes in on the _request_'s `body` object.

- Let's try logging it out first:

	```js
	app.post('/todos', function(req, res) {
	  console.log(req.body.newTodo);
	  res.render('todos/index');
	});
	```

- Restart and submit a new todo.

- Damn! What now...

- Unlike the `req.params` and `req.query` objects that we saw earlier, Express
  by default does not parse the body for data by default.

- This is due to Express's minimalistic approach. It does not provide much
  functionality by default - we get to pick and choose what we want our app to
  spend time doing!

- The solution is **middleware**.

- Each request in an Express app is essentially processed by a series of
  middleware functions.

- Even our route definitions are handled by Express's middleware stack - it just
  so happens they ended the request by calling `send` or `render`.

- We'll come back to adding a todo in a bit, but let's first take a closer look
  at middleware and the request/response cycle in Express.


### Express Middleware


- Middleware is a stack of processes that run on each request made to the
  server.

- You can have any number of middleware that will process the request one by one
  in the order they were _mounted_ with `app.use()`.

- Middleware can be used to, log info, compile css, do authentication, make
  changes to the req/res object, end the request-response cycle, etc.

- Once a piece of middleware has done its job, it either calls `next()` to pass
  control to the next middleware in the stack __or__ ends the response as we've
  been doing with the `render` method.


### The Request/Response Cycle in Express


<img src="http://adrianmejia.com/images/express-middlewares.png" width="900">


### Adding our own Middleware


- Just to demonstrate, let's write and mount a simple middleware to log out the
  `user-agent` of each request:

	```js
	// Use middleware (app.use)
	app.use(function(req, res, next) {
	  console.log(req.headers['user-agent']);
	  next();
	});
	```

- Note that we must call the `next` function that is passed in after the
  middleware has accomplished its task  - otherwise our app stops dead in it's
  tracks!

- Restart, refresh - neato!


### Common Express 4.0 Middleware


- __morgan__: Logger that logs requests.

- __body-parser__: Parses the body so that you can access data being posted
  using the `req.body` object.

- __cookie-parser__: Populates the `cookies` object on the _request_ object so
  that you can access data in cookies. For example, `req.cookies.name`.
  _cookie-parser_ is middleware which deals with the incoming _request_. To
  __set__ a cookie, you would use the `cookie` object on the _response_ object.

- __serve-favicon__: Serves the favicon from route _/favicon.ico_.


### Middleware


- Based upon the last slide, it should be clear that we need to mount the
  **body-parser** middleware. But let's take a look at [Express's docs
  pertaining to middleware](http://expressjs.com/guide/using-middleware.html).

- Let's look at the section entitled **Built-in middleware**.  Interestingly,
  since version 4.x, Express no longer includes it's own middleware (with the
  exception of `express.static`).  Instead, Express expects its developers to
  choose from the numerous modules available to install.

- Before we install **body-parser**, let's mount Express' `express.static`
  middleware so that when the client requests any static assets, such as CSS,
  JavaScript, image or HTML files, it will find and immediately respond by
  returning the requested asset to the client:

	```js
	app.use(express.static(path.join(__dirname, 'public')));
	```

- That's all there is to it! Now, all we have to do is put our static assets
  into a folder named `public` and we can link to them from within our HTML
  (do not include the `public` folder when specifying the path in the `src` or
  `href` attributes).

- Here is the [link to the middleware officially supported by the Express team](https://github.com/senchalabs/connect?_ga=1.31418111.1784656250.1446759094#middleware).

- `body-parser` just happens to be at the top of the list :)

- First we need to install it:

	```sh
	? npm install body-parser
	```

- Next we need to `require` it:

	```js
	var path = require('path');
	// new code below
	var bodyParser = require('body-parser');
	```

- Let's mount the `body-parser` middleware to process both _application/json_
  and _application/x-www-form-urlencoded_ data in the body:

	```js
	app.use(express.static(path.join(__dirname, 'public')));
	// new code below
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: false}));
	```

- Note that we need to invoke `bodyParser` because it is a factory function by
  design.

- With the middleware installed and mounted, we can use the `body` object on the
  _request_ to access the new Todo being submitted and push it in the
  `app.locals.todos` array:

	```js
	app.post('/todos', function(req, res) {
	  app.locals.todos.push({
	    todo: req.body.newTodo,
	    done: false
	  });
	  res.render('todos/index');
	});
	```

- Restart - sweeet!


### Practice (5 mins) - Modules


- To get a little more practice using modules, let's refactor our code a bit.

- Instead of assigning an array literal to `app.locals.todos`, let's return the
  array of _todos_ from a module!

- Make believe that the _todos_ are coming in from a datasource and create a
  module named `todos.js` inside of a folder named `data`.

- When you are done, this is how the line of code in `server.js` should look:

	```js
	app.locals.todos = require('./data/todos');
	```


## `express-generator`

- Okay, so we've had some fun getting an Express app up and running from
  scratch.

- We've included some basic routes and even mounted some common and custom
  middleware!

- In this part of the lesson we'll take a look at how a tool,
  `express-generator`, structures an Express app and mounts key middleware by
  default.

- Think of `express-generator` as a very lightweight `rails new...`

- `express-generator` is a command line tool that quickly generates a skeleton
  node.js app that incorporates the Express framework.

- Let's install it:

	```sh
	? npm install express-generator -g
	```

- `express-generator` has a CLI that we want to be able to run from any project,
  that's why we install it using the global `-g` flag.

- Let's take a look at the options available to us:

```sh
? express -h
```


```sh
  Usage: express [options] [dir]

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -e, --ejs           add ejs engine support (defaults to jade)
        --hbs           add handlebars engine support
    -H, --hogan         add hogan.js engine support
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass) (defaults to plain css)
    -f, --force         force on non-empty directory
```

### Generating Our App's Skeleton with `express-generator`


- We are going to generate a new app, so let's cd up and out of our
  `first-express` app.

- We will use the `-e` option to use the __ejs__ template engine instead of
  __jade__.

- From your new app's parent directory (just like `rails new...`)

	```sh
	? express -e second-express
	? cd second-express
	```


### Folder Structure


- Our scaffolded folder structure will look like this:

	```sh
	├── app.js
	├── bin
	│   └── www
	├── package.json
	├── public
	│   ├── images
	│   ├── javascripts
	│   └── stylesheets
	│       └── style.css
	├── routes
	│   ├── index.js
	│   └── users.js
	└── views
	    ├── error.js
	    └── index.js
	```

- Let's explore the above structure in Sublime.


### Install Dependencies


- A quick look at the `package.json` file reveals the default modules Express
  has set up.

- These modules are not installed in the `node_modules` folder by default.

- `? npm install` will install these modules into our app's `node_modules`
  folder.


### Starting the Application


- Starting a generated Express app properly is slightly different than what
  we've seen.

- Type `npm start`. This will execute the start script specified in
  *package.json*.

- `npm start`, then browse to `localhost:3000`.


### `bin/www` - WTF?


- What's with this `./bin/www` file? Well, the Express team decided to partition
  out the HTTP server related code out of `app.js` to remove code that's not
  really key to our app.

- Take a look at how the Express app in `app.js` exports itself and how it is
  required inside `www`.

- Normally, we don't need to make many changes inside of `www`. We will mess
  with it a bit when we look at doing a realtime app, but for now, we are just
  going to change our app's file name...


### Renaming `app.js`


- In MEAN Stack apps, Angular's main module is often named `app.js` and this
  could get confusing having two `app.js` files. This is why many developers
  name their main Express file `server.js`.

- First, rename `app.js` to `server.js`.

- Then, inside of `www`, change line 7 from:

	```js
	var app = require('../app');
	```

	to:

	```js
	var app = require('../server');
	```

- That's it! Restart and test.


## Best Practice Routing


### The Express _Router_ Object


- There are several ways to set up
  [routing in an Express](http://expressjs.com/guide/routing.html) app.

- In our `first-express` app, we used Express' `app.get` and `app.post` methods
  to mount our routes.

- Express provides a `Router` object that we can create instances of that
  provides more flexible and powerful routing.

- As a model example of using this better approach, let's look at how the
  `express-generator` set up its routing.

- First, there's a `routes` folder to hold **_____________?**

- Next, those route modules are required on lines 8 & 9 of `server.js`.

- Let's take a look at what those modules export...

- Yes, those modules export instances of Express' `Router` object after they
  have had their specific routes defined with `get` methods, just like we did
  with `app.get()`.

- Lastly, the routers are mounted in the middleware stack with the `app.use`
  method in lines 25 & 26 like this:

	  ```js
		app.use('/', routes);
		app.use('/users', users);
	  ```

- It's important to understand that the path specified in the `app.use` is
  **combined** with the path specified on the router objects...


### The Express _Router_ Object (cont.)

<img src="https://camo.githubusercontent.com/eddb0d05c3e11e539e08c24733f8fcdcdae96b85/687474703a2f2f7279616e73756b616c652e636f6d2f76697a2f74682f6a732f657870726573736a735f345f726f75746572732f657870726573736a735f345f726f75746572732e706e67" width="900">


### Pledge to Use RESTful Routes


- Although MEAN Stack apps have very little convention, pledge that you will
  define RESTful routes whenever possible.

- Thank you!


### Practice (10 mins)Router Refactor

Let's refactor our _first-express_ application to use the _Router_ object as
modeled by the app generated using _express-generator:_

1. Modularize (although not ideal, you can put all of the routes in an `index`
   module).

2. Export instances of `Router`

3. Mount those router instances with `app.use`

__Bonus__: Put the _todos_ related routes in it's own module.

__Advanced Bonus__: Get the _router.post_ route to work! There are a couple of
ways to accomplish this...Hint: Remember, that you can require a module more
than once.


## References

_Note: When searching for info on the Express framework, be sure that you search
for the info for version 4 only - there were significant changes made from
earlier versions._

- [Express](http://expressjs.com/)

- [Use EJS to Template Your Node Application](https://scotch.io/tutorials/use-ejs-to-template-your-node-application)
