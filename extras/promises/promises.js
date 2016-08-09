// Put the following in a file named promises.js
// and execute by typing "node promises"

// Synchronous getNames()

function getNames() {
  return ['Fred', 'Wilma'];
}

console.log(getNames());

// // Asynchronous getNames() implemented using the callback design pattern.
// // Note: we're using setTimeout to simulate an asynchronous method call.

function getNamesAsyncCallback(cb) {
  setTimeout(function() {
    cb(['Fred', 'Wilma']);
  }, 2000);
}

getNamesAsyncCallback(function(names) {
  console.log(names);
});

// Asynchronous getNames() implemented using the promises design pattern.

function getNamesAsyncPromise() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(['Fred', 'Wilma']);
    }, 3000);
  });
}

getNamesAsyncPromise().then(function(names) {
  console.log(names);
});

// Control flow using chained promises instead of nested callbacks.
// First, call getNamesAsyncPromise().
// Second, call addName(), which is also asynchronous.

var nameList = ['Fred', 'Wilma'];

function addName(name) {
  return new Promise(function(resolve, reject) {
    nameList.push(name);
    setTimeout(function() {
      resolve(nameList);
    }, 2000);
  });
}

getNamesAsyncPromise()
.then(function(names) {
  console.log(names);
})
.then(function() {
  console.log('Adding Betty...');
  return addName('Betty');
})
.then(function(names) {
  console.log(names);
})  // Removed semicolon for .catch chaining below

// Error handling
// Use catch instead of second error function on then

.catch(function(err) {
  console.error('Bummer, error: ', err);
});

// Using Promise.all()
// Use when you want to run multiple asynchronous functions
// in parallel and do something after all have completed.

var p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('p1 resolved');
    resolve('p1 result');
  }, 2000);
});

var p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('p2 resolved');
    resolve('p2 result');
  }, 1000);
});

var p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('p3 resolved');
    resolve('p3 result');
  }, 3000);
});

Promise.all([p1, p2, p3]).then(result => {
  console.log('All promises resolved with a result of: ', result);
});

// Converting callbacks to promises in MongooseJS

// Ensure you are in a working directory and npm install mongoose.
// No need for a package.json
// Ensure that mongod is running

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/promises');

var userSchema = new mongoose.Schema({
  name: String,
  email: String
});

var User = mongoose.model('User', userSchema);

// Using callbacks to:
//   Remove all users,
//   then create two users,
//   then console.log those users,
//   then update a user,
//   then console.log all users,
//   finally, close the Mongoose connection

// User.remove({}, function(err) {
//   User.create([
//     { name: 'Fred', email: 'fred@email.com'},
//     { name: 'Wilma', email: 'wilma@email.com'}
//   ], function(err, users) {
//     console.log('Created Users: ', users);
//     // could use User.findOneAndUpdate instead of find() + update()
//     User.findOne({name: 'Wilma'}, function(err, user) {
//       user.name = 'Barney';
//       user.save(function(err) {
//         User.find({}, function(err, users) {
//           console.log('Users after update: ', users);
//           mongoose.disconnect();
//         });
//       });
//     });
//   });
// });

// Same process as above but with promises instead of callbacks.

User.remove({})
.then(function() {
  return User.create([
    { name: 'Fred', email: 'fred@email.com'},
    { name: 'Wilma', email: 'wilma@email.com'}
  ]);
})
.then(function(users) {
  console.log('Created Users: ', users);
  // See docs about returning "full-fledged" promises
  // using exec() on queries.
  return User.findOne({name: 'Wilma'}).exec();
})
.then(function(user) {
  user.name = 'Barney';
  return user.save();
})
.then(function() {
  return User.find({}).exec();
})
.then(function(users) {
  console.log('Users after update: ', users);
  mongoose.disconnect();
})
.catch(function(err) {
  console.log('Error: ', err);
});
