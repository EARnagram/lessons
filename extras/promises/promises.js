// ||||||||| Using Promises with Asynchronous Code |||||||||
var locus = require('locus'); // if needed, add `eval(locus);`

// Synchronous getNames()

function getBadDads() {
  return ['Peter', 'Ahnold'];
}

// console.log(getBadDads());

// Asynchronous getNames() implemented using the callback design pattern.
// Note: we're using setTimeout to simulate an asynchronous method call.

function getBadDadsAsyncCallback(cb) {
  setTimeout(function() {
    cb(['Peter', 'Ahnold']);
  }, 2000);
}

// getBadDadsAsyncCallback(function(names) {
//   console.log(names);
// });

// Asynchronous getBadDads() implemented using the promises
// design pattern.

function getBadDadsAsyncPromise() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(['Peter', 'Ahnold']);
    }, 3000);
  });
}

// getBadDadsAsyncPromise().then(function(names) {
//   console.log(names);
// });

// ||||||||| Chaining Promises |||||||||

// Control flow using chained promises instead of nested callbacks.
// First, call getBadDadsAsyncPromise().
// Second, call addName(), which is also asynchronous.

var badDads = ["Peter", "Ahnold"];

function addName(name) {
  return new Promise(function(resolve, reject) {
    badDads.push(name);
    if (badDads.indexOf("Philip Banks") > -1) {
      reject("Don't you dare call Uncle Phil a bad dad!");
    }
    setTimeout(function() {
      resolve(badDads);
    }, 2000);
  });
}

// getBadDadsAsyncPromise()
// .then(function(names) {
//   console.log(names);
// })
// .then(function() {
//   console.log('Adding Jim Carrey...');
//   return addName('Jim Carrey');
// })
// .then(function(names) {
//   console.log(names);
// })  // Removed semicolon for .catch chaining below

// // Error handling
// // Use catch instead of second error function on then

// .catch(function(err) {
//   console.error('Dad fail: ', err);
// });

// ||||||||| Using Promise.all() |||||||||
// Use when you want to run multiple asynchronous functions
// in parallel and do something after all have completed.

// var p1 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     console.log('Attending Soccer Game…');
//     resolve('You see your daughter score a goal!');
//   }, 3000);
// });

// var p2 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     console.log('Purchasing birthday cake…');
//     resolve('You get a photo of her face in the cake!');
//   }, 1000);
// });

// var p3 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     console.log("Running through dialogue…");
//     resolve('She delivers her lines perfectly in the play!');
//   }, 2000);
// });

// Promise.all([p1, p2, p3]).then(function(result) {
//   console.log('Good Dad Results: ', result);
// })
//   .catch(function(err) {
//     console.error("You screwed up Dad: ", err);
//   });

// ||||||||| Converting callbacks to promises in MongooseJS |||||||||

// Ensure you are in a working directory and npm install mongoose.
// No need for a package.json
// Ensure that mongod is running

var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/promises');

// mpromise is being deprecated, so we set mongoose's promises to native
// es6 promises!
mongoose.Promise = Promise;

var dadSchema = new mongoose.Schema({
  name: String,
  occupation: String,
  good: Boolean
});

var Dad = mongoose.model('Dad', dadSchema);

var badDads = [
  { name: "Ahnold", occupation: 'Mattress Salesman', good: false},
  { name: "Peter", occupation: 'Corporate Lawyer', good: false}
];

// Using callbacks to:
//   Remove all users,
//   then create two users,
//   then console.log those users,
//   then update a user,
//   then console.log all users,
//   finally, close the Mongoose connection

// Dad.remove({}, function(err) {
//   Dad.create(badDads, function(err, dads) {
//     console.log('Created Dads: ', dads);
//     // could use Dad.findOneAndUpdate instead of find() + update()
//     Dad.findOne({occupation: 'Mattress Salesman'}, function(err, dad) {
//       dad.good = true;
//       dad.save(function(err) {
//         Dad.find({}, function(err, dads) {
//           console.log('Dads after update: ', dads);
//           mongoose.disconnect();
//         });
//       });
//     });
//   });
// });

// Same process as above but with promises instead of callbacks.

// Dad.remove({})
// .then(function() {
//   return Dad.create(badDads);
// })
// .then(function(dads) {
//   console.log('Created Dads: ', dads);
//   // See docs about returning "full-fledged" promises
//   // using exec() on queries: http://mongoosejs.com/docs/promises
//   return Dad.findOne({name: 'Peter'}).exec();
// })
// .then(function(dad) {
//   dad.good = true;
//   return dad.save();
// })
// .then(function() {
//   return Dad.find({}).exec();
// })
// .then(function(dads) {
//   console.log('Dads after update: ', dads);
//   mongoose.disconnect();
// })
// .catch(function(err) {
//   console.log('Mama Mia! ', err);
// });

// ||||||||| Using Promises with APIs |||||||||

var request = require('request');

function getPokemon(number) {
  return new Promise(function(resolve, reject) {
    request(`http://pokeapi.co/api/v2/pokemon/${number}`, function (err, response, body) {
      if (!err && response.statusCode == 200) {
        resolve(JSON.parse(body));
      } else {
        reject("There's a problem!");
      }
    });
  });
};

getPokemon(1)
  .then(function(bulba) {
    console.log(bulba);
    return bulba.name;
  })
  .then(function(bulbaName) {
    console.log(`Hi, my name is ${bulbaName}`);
  })
  .catch(function(err) {
    console.error(err);
  });








