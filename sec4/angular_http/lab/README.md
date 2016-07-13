
# Angular $http

## Introduction

Based on our experience in the last lesson using $http to access APIs
in Angular, your task is to build something _just_ like what we built
together, entirely yourself - this time, with a separated front and back
end.

This means you'll need `nodemon` running your API, and `server` running 
your front end. Since we're serving up each part separately, you'll need 
to include the entirety of the url when making $http requests. 

You'll be working on an interface for our **Infamous Criminals™** API
– a database to store & categorize history's most well-known wrong-
doers. The API already exists, but we desperately need your help
creating an Angular application to add criminals to our database,
delete them when they've gone straight, and time permitting, update
their information when their whereabouts change.

## Exercise

- Use $http to access an API resource
- Use $http to POST a new instance of a resource
- Use $http to update an API resource
- Use $http to delete an API resource

#### Starter Code

There's an Express-built API ready to run with a simple `nodemon`. Don't 
forget to have Mongo running and to `npm install`. 

__There's no seed data__ - you'll have to save your own criminals.

#### What is this pre-flight error!?

Finally, we get to CORS! In order to defeat this lil' error, you'll need
to bring in middleware that specifically deals with CORS issues.

First, `npm install --save cors`.

This is a helpful module that prepares your app for Cross Origin 
Resource Sharing. By default, it sets up extremely permissive (dangerous
even) CORS configuration. If you want to make it more secure, you'll 
need to view the 
[CORS package docs](https://www.npmjs.com/package/cors).

For now, permissive is fine.

`require` cors at the top of `app.js`, and simply add `app.use(cors());`
_before_ you `app.use(routes);`.

#### Deliverable

Build an Angular app from scratch to interface with our RESTful CRUD 
API. Focus on GET/POST first, and tackle PUT/PATCH/DELETE if you have 
time.

Use the included CSS if you wish, but feel free to make your own!

BONUS: Connect the front and back ends, and rework this app into a MEAN 
app! 

<img width="740" alt="Infamous Criminals" src="https://cloud.githubusercontent.com/assets/25366/9455944/e202ed9e-4a85-11e5-8752-2cf61f242867.png">

## Additional Resources

- [$http Documentation](https://docs.angularjs.org/api/ng/service/$http)
