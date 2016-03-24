# Angular's `ui-router`

## Routes

A route, in general, is just the path you take to get somewhere. That's 
not specific to web development, but it's one of those words we've latched
on because it's a good description – when you're changing a URL, when that
location bar changes, you're on a new "route."

**For HTTP and client-server relationships, what have we defined as a "route"?**

## Routing in SPAs

> In a single-page app, how can we have multiple pages?

In Angular, it comes down to storing all our views on our main page and 
turning them on and off as we need.

> But what's the benefit? Why even make it single page? 
> Why add that complexity?

The main use case for front-end frameworks is twofold:

1.  Added speed – by loading everything upfront, and just switching 
    sections on and off, our page will seem wonderfully speedy because 
    we'll be skipping quite a few steps that a more traditional framework 
    has to run through.
2.  Better UX - instead of having a HUGE single page, we can break up
    the information of our site to help guide our users.

> What are problems, or drawbacks with "routing" in SPAs?

1.  URLs: people have become used to a URL representing a location, and
    if a URL doesn't change, they may be confused by their interaction
    with a page.
    - Also, it can seem confusing if URLs aren't structured the way they
      are used to...
2.  The "back button" (or `delete`) is a useful tool that people are
    used to having in order to "navigate" a site.
3.  Shared behavior, when not broken up across multiple pages, can
    overwhelm developers.
    - Shared and nested view models and resources need some way to be 
      managed.

## `ngRoute` vs `ui-router`

Angular comes with a basic routing mechanism, [`ngRoute`][ngRoute].
However, **most people prefer a third-party plugin called[`ui-router`][ui-router]**.

You can read about the [reasons behind this][ngRoute-vs-ui-router1],
and other [differences of opinion][ngRoute-vs-ui-router2], online.
You can also learn more about `ui-router` [online][more-about-ui-router]!

---

## Building an Example App

**Our ultimate goal is to build out two pages – a main Todo list,**
**and an Archive page for all the Todos we've completed.**

Let's walk through it!

### :rotating_light: Warning! :rotating_light:

**Broswer caching is a big problem when working with SPA development.**

Make sure you [deactivate caching][deactivate-caching] and use 
`⌘⇧R` (or `Ctrl-Shift-R` on Ubuntu) to force a full reload of each 
page!

### Step 1: Get Up and Running

#### Start a local server

Because the whole structure of SPA routing involves URLs, we need to 
build our application with reference to syntactically correct HTTP-based
URLs, not filesystem paths. Therefore, we need to use `server` within
our angular project.

#### Source `ui-router`

We'll need the UI-Router code. It's not an official, core library, and 
it's not hosted on Google's site. [CDNJS has it][ui-router-cdn], or you 
can download it from GitHub and include it yourself.

However you do it, make sure you add it BEFORE we declare our 
application/module.

```html
<!-- index.html -->

<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.js"></script>

<script src="/javascripts/app.js"></script>
```

### Step 2: Add `ui-router` to Our App

#### Add `ui-router` as a dependency

```javascript
// app.js

angular
  .module('todoApp', ['ui.router']); // :fist-bump:
```

#### Configure `ui-router` with a function

```javascript
// in app.js

angular
  .module('todoApp', ['ui.router']) // remove the `;`!
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider) {
  // ... all of our setup goes in here!
}
```

In SPAs we aren't *actually* changing our HTTP routes, it can be confusing
to talk about different "routes" for our app. `ui-router` (and thus Angular)
uses the term ***states*** instead. This is because `ui-router` is a
"[state-machine][state-machine]", or something that stores possible "states"
for our app and controls switching from state to state.

Our function `MainRouter` takes two variables to store our configuration:

1.  `$stateProvider` stores the list of states (routes) and their setup,
2.  `$urlRouterProvider` stores setup for our app that is regardless of state.

### Step 3: Add a Route, ie "State"

```javascript
// in app.js

// ...

function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('todoHome', {               // name
      url:          '/',               // URL (after the '#')
      templateUrl:  'todoHome.html',   // template
      controller:   'TodosController', // controller
      controllerAs: 'vm'               // name for controller in template
    });

  $urlRouterProvider.otherwise("/");   // default state
}
```

- **name**: how we can refer to the state.
- **URL**:  a *relative URL fragment* for each state is what URL fragment
  (the piece after the '#') will trigger the application to load a given
  state. `'/'` means that this will be the default home for our SPA.
- **template**: the path, relative to the root of our application, to the
  template (remember, all HTML is a template to Angular) file that represents
  this state. Usually we will treat these templates like partials from 
  server-side rendering.
- **controller** and **controllerAs**: this sets the `ng-controller`
  directive for the entire template of this state, so we don't need it!
- **default state**: we can use the `$urlRouterProvider` to force the
  SPA to **load a given state's fragment URL** if no fragment is provided.

### Step 4. Create and Include Partials

In our application, we want to keep the `<header>` for each page, but
update the `<main>` section, so let's do three things:

1.  Copy the contents of our `<main>` tag in to our template:

    ```html
    <!-- todoHome.html -->

    <!-- begin add new todo -->
    <form class="add-todo" ng-submit="vm.addTodo()">
      <input class="text-box" type="text" placeholder="I need to..." ng-model="vm.text">
      <input type="submit" class="btn btn-add" value="+">
    </form>
    <!-- end add new todo -->

    <!-- begin show all todos -->
    <section class="todo-list">
      <ul>
        <li ng-repeat="todo in vm.todoList">
          <input class="checkbox" type="checkbox" ng-model="todo.complete" id="todo-{{$index}}">
          <label for="todo-{{$index}}" ng-class="{'complete': todo.complete}">{{ todo.task }}</label>
        </li>
      </ul>
    </section>
    <!-- end show all todos -->
    ```

2.  Update our layout page (`index.html`) to load the templates from
    `ui-router`, inside of an element with a directive provided by
    `ui-router` called **`ui-view`**.
3.  Restructure our `ng-controller` syntax as well so that it wraps any
    elements that use it, but *not the template partial*, so that there
    aren't any controller overlaps!

    ```html
    <!-- index.html -->
    <!DOCTYPE html>
    <html lang="en" ng-app="todoApp">

    <head>
     <!-- ... -->
    </head>

    <body>
      <div class="wrapper">
        <!-- 1. move the ng-controller so that it doesn't "wrap" the ui-router -->
        <header ng-controller="TodosController as vm">
          <h1>YOU'VE GOT {{ vm.remainingTodos().length }} THING{{ vm.s(vm.remainingTodos(), true) }} TO DO!</h1>
          <h4>{{ vm.completedTodos().length }} thing{{ vm.s(vm.completedTodos()) }} completed | {{ vm.remainingTodos().length }} thing{{ vm.s(vm.remainingTodos()) }} remaining</h4>
        </header>

        <!-- 2. add the `ui-view` directive to where we want to load our template -->
        <main ui-view></main>
      </div>
    </body>

    </html>
    ```

### Step 5: Add More States &amp; Partials

```javascript
// app.js

// ...

function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('todoHome', {
      url: '/',
      templateUrl:  'todoHome.html',
      controller:   'TodosController',
      controllerAs: 'vm'
    })
    .state('todoArchive', {
      url: '/archive',
      templateUrl:  'todoArchive.html',
      controller:   'TodosController',
      controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
}
```

Copy the `todoHome.html` template/partial for the `todoArchive.html`, since 
they are almost entirely the same, except:

1.  In `todoArchive.html`, remove the add todo form.
2.  In `todoIndex.html`, remove the delete todo buttons.
3.  For both templates, update the `ng-repeat` directive to hit the version
    of the list that each should display:

    ```html
    <!-- remove: <li ng-repeat="todo in todos.todoList"> -->

    <!-- ... which becomes, in todoHome: -->
    <li ng-repeat="todo in todos.remainingTodos()">

    <!-- ... which becomes, in todoArchive: -->
    <li ng-repeat="todo in todos.completedTodos()">
    ```

### Step 6: Add Navigation Between States

In order to jump between one view and the other, we need *links*! But not
normal links because we're not changing pages. `ui-router` gives us a
custom directive: `ui-sref`.

Add this to the `index.html` layout:

```html
<!-- index.html -->

<div class="wrapper">
  <header ng-controller="TodosController as vm">
    <!-- ... -->
  </header>

  <nav class="tabs">
    <a ui-sref="todoHome">My List</a>
    <a ui-sref="todoArchive">Archives</a>
  </nav>

  <main ui-view></main>
</div>
```

That custom directive, `ui-sref` is like ``href``, but references the names of
*states* instead.

#### Helpful extra: which state am I on?

`ui.router` actually gives us another really useful custom directive. 
Throw it on whichever links are using `ui-sref`:

```html
<nav class="tabs">
  <a  ui-sref-active="active" ui-sref="todoHome">My List</a>
  <a  ui-sref-active="active" ui-sref="todoArchive">Archives</a>
</nav>
```

This is a really nice helper that will apply the class of `active`
(or whatever you put in quotes) to the link that's currently active, 
depending on what state you're looking at.

### Next Steps...

The above sets up your SPA routing entirely! However, our app still needs
changes in order to work. Check out the solution for the app to see how
we need to break out the data stored in the controller in to a shared
data service, since **each state instantiates its own controller**, even
if multiple states are using the same controller!

- [`DataService`][data-service]
- The updated [`TodosController`][todos-controller]

<!-- LINKS -->

[ngRoute]: https://docs.angularjs.org/api/ngRoute/service/$route
[ui-router]: https://github.com/angular-ui/ui-router

[ngRoute-vs-ui-router1]: http://stackoverflow.com/questions/21023763/difference-between-angular-route-and-angular-ui-router
[ngRoute-vs-ui-router2]: http://www.amasik.com/angularjs-ngroute-vs-ui-router
[more-about-ui-router]: http://www.funnyant.com/angularjs-ui-router

[deactivate-caching]: http://stackoverflow.com/questions/14718826/angularjs-disable-partial-caching-on-dev-machine

[ui-router-cdn]: https://cdnjs.com/libraries/angular-ui-router
[state-machine]: https://en.wikipedia.org/wiki/Finite-state_machine

[installfest]: http://ga.co/installfest

[data-service]: ./todo-app-w-routing-solution/javascripts/DataService.js
[todos-controller]: ./todo-app-w-routing-solution/javascripts/TodosController.js