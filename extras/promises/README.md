# Promise Me You'll Be There

![Hook](http://67.media.tumblr.com/499841724cfcdd1d289f973040720488/tumblr_inline_n7474j3SGP1qz65iu.png)

## Using Native JS Promises

| Learning Objectives - SWBAT                  |
| -------------------------------------------- |
| Use promises to handle asynchronous JS       |
| Use promises to make seed data with mongoose |
| Use promises to access API data              |


##### Road Map

1. Promise?
2. The anatomy of a Promise
3. Using promises with Mongoose
4. Using promises with APIs
5. Outro

### Promise?

![Liar Liar](http://cdn.images.express.co.uk/img/dynamic/79/590x/secondary/Max-making-a-birthday-wish-502473.jpg)

When you tell your bebe boy that you're going to be there for his birthday,
you'd best be there, because otherwise, you break a sacred bond.

You break your promise.

Today we'll be making and breaking promises like any traditional 
American Father, but with data.

##### JS Promises

Asynchronous programming is like working in 4D. We need to work with 
data that may not exist at a given moment.  

```javascript
function getBadDads() {
  return ['Peter', 'Ahnold'];
}

var dads;

setTimeout(function() {
  dads = getBadDads();
}, 1000)

console.log("Here are the dads: ", dads); // Where are the dads?!!?!
```

This can often cause errors or a hellish pyramid of callback doom.

```javascript
function getBadDadsAsyncCallback(cb) {
  setTimeout(function() {
    cb(['Peter', 'Ahnold']);
  }, 2000);
}

getBadDadsAsyncCallback(function(dads) {
  console.log("Here are the dads: ", dads);
});
```

Enter promises:

```javascript
function getBadDadsAsyncPromise() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(['Peter', 'Ahnold']);
    }, 3000);
  });
}

getBadDadsAsyncPromise() // semicolon left off so we can chain…
  .then(function(names) {
    console.log(names);
  });
```

Promises make dealing with asynchronous programming significantly 
easier. Rather than build out a sideways pyramid, you can continually
chain, sending the data you need to the next function!

### The Anatomy of a Promise

Every Promise has two parameters: `resolve` and `reject`.

```javascript
var badDads = ['Peter', 'Ahnold'];

function addName(name) {
  return new Promise(function(resolve, reject) {
    badDads.push(name);
    if (badDads.indexOf('Philip Banks') > -1) {
      reject("Don't you dare call Phil a bad dad!");
    }
    setTimeout(function() {
      resolve(badDads);
    }, 2000);
  });
}
```

`resolve` simply passes the value to the next `then` call.

`reject` throws an error, but will only send the error if a `catch` 
method is chained at the end of the promise.

```javascript
getBadDadsAsyncPromise()
  .then(function(names) {
    console.log(names);
  })
  .then(function() {
    console.log('Adding Jim Carrey...');
    return addName('Jim Carrey');
  })
  .then(function(names) {
    console.log(names);
  })  // Removed semicolon for .catch chaining below

  // Error handling: 
  // Unlike jQuery's ajax method, we use catch instead of a second error 
  // function in .then

  .catch(function(err) {
    console.error('Dad fail: ', err);
  });
```

Notice that each time we `return` another promise!

This allows us to chain our results rather than build endless callbacks.

Remember: Promises are "simple" (not necessarily easy). They have only 2
options: resolve or reject.

Then they chain with `.then`, and, at the end, contain a `.catch`, just
in case there's an error.

##### What if I need to make a lot of Promises, all at once?

Luckily, we have another method called `Promise.all()`. You can use
it when you want to run multiple asynchronous functions in parallel and 
do something after all have completed.

In other words, `Promise.all()` resolves multiple promises together and 
only proceeds once all have completed, returning an array of data.

```javascript
var p1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log('Attending Soccer Game…');
    resolve('You see your daughter score a goal!');
  }, 3000);
});

var p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log('Purchasing birthday cake…');
    resolve('You get a photo of her face in the cake!');
  }, 1000);
});

var p3 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log("Running through dialogue…");
    resolve('She delivers her lines perfectly in the play!');
  }, 2000);
});

Promise.all([p1, p2, p3]).then(function(result) {
  console.log('Good Dad Results: ', result);
})
  .catch(function(err) {
    console.error("You screwed up Dad: ", err);
  });
```

Notice that the final console log only happens once p1 is resolved.

---

##### Questions:

1. How can Promises help a JS developer?
2. What are the parameters for a promise called? What is passed to each?
3. What methods are used to chain a promise? 

### Using Promises with Mongoose

![Armageddon](https://ivyarchenland.files.wordpress.com/2011/01/movi_arma0108.jpg)

It is imperative for you to make seed data for every project, but making 
seed data in mongoose can be a nightmare, even for the simplest models:

```js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/promises');

var dadSchema = new mongoose.Schema({
  name: String,
  occupation: String,
  good: Boolean
});

var Dad = mongoose.model('Dad', dadSchema);
```

To create a couple `Dad`s will actually take a number of callbacks, and 
to update one will take even more:

```javascript
var badDads = [
  { name: "Ahnold", occupation: 'Mattress Salesman', good: false},
  { name: "Peter", occupation: 'Corporate Lawyer', good: false}
];

// Using callbacks to:
//   Remove all Dads,
//   then create two Dads,
//   then console.log those Dads,
//   then update a dad,
//   then console.log all Dads,
//   finally, close the Mongoose connection

Dad.remove({}, function(err) {
  Dad.create(badDads, function(err, dads) {
    console.log('Created Dads: ', dads);
    // could use Dad.findOneAndUpdate instead of find() + update()
    Dad.findOne({occupation: 'Mattress Salesman'}, function(err, dad) {
      dad.good = true;
      dad.save(function(err) {
        Dad.find({}, function(err, dads) {
          console.log('Dads after update: ', dads);
          mongoose.disconnect();
        });
      });
    });
  });
});
```

This is already turning into a mess. Let's clean it up with Promises.

First though, we need to attach native Promises to the mongoose module.

```javascript
// mpromise is being deprecated, so we set mongoose's promises to native
// es2015 promises!

mongoose.Promise = Promise;
```

Now, we can do the same thing as above, but much cleaner with Promises.

```javascript
Dad.remove({})
  .then(function() {
    return Dad.create(badDads);
  })
  .then(function(dads) {
    console.log('Created Dads: ', dads);
    // See docs about returning "full-fledged" promises
    // using exec() on queries: http://mongoosejs.com/docs/promises
    return Dad.findOne({name: 'Peter'}).exec();
  })
  .then(function(dad) {
    dad.good = true;
    return dad.save();
  })
  .then(function() {
    return Dad.find({}).exec();
  })
  .then(function(dads) {
    console.log('Dads after update: ', dads);
    mongoose.disconnect();
  })
  .catch(function(err) {
    console.log('Mama Mia! ', err);
  });
```

Note that queries will not return a promise, but following a query with
`.exec()` will give us access to the data we need in promise form.

### Using Promises with APIs

Finally, the main place you'll be using Promises is in getting API data 
within your app.

Let's use the most permissive API out there, the PokeAPI.

We'll need the `request` module to make the API call.

```JavaScript
var request = require('request');

function getPokemon(number) {
  return new Promise(function(resolve, reject) {
    request(`http://pokeapi.co/api/v2/pokemon/${number}`, function (err, response, body) {
      if (!err && response.statusCode == 200) {
        resolve(JSON.parse(body));
      } else {
        reject("There's a problem: ", err);
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
```

We see here it is no different than working with any of the previous 
data. We simply have to wait longer since the PokeAPI is ridiculously
slow!

### Outro

![JatW](http://2.bp.blogspot.com/_xqU8aCV8ADc/TR5L0TlN6OI/AAAAAAAAApY/jMl3wnYmeDk/s1600/jingle_all_the_way.jpg)

We've kept our promises! Congrats, you're all ready to be spectacular
parents!

Let's go over some of what we learned:

1. When would we want to use `Promise.all()`?
2. What are the two parameters for all Promises?
3. How do we handle errors with Promises?
4. What do we need to do to use Promises with Mongoose?

##### References

[Promises by Forbes Lindesay](https://www.promisejs.org/)

[MDN Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[Promisees](https://bevacqua.github.io/promisees/)
