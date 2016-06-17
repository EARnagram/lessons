var mongoose = require('mongoose');

var env = require('./environment');

// Use different database URIs based on whether an env var exists.
var dbUri = 'mongodb://localhost/' + env.SAFE_TITLE;

// When not using the production database, use the local MongoD
if (!env.MONGOLAB_URI) {
  // check that MongoD is running... on error, exit the process.
  require('net').connect(27017, 'localhost').on('error', function() {
    console.log("YOU MUST BOW BEFORE THE MONGOD FIRST, MORTAL!");
    process.exit(0);
  });
}

// connect to the given database URI
mongoose.connect(dbUri);

// export the database
module.exports = mongoose;
