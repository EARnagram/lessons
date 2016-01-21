var mongoose = require('mongoose');

var env = require('./environment');

var dbUri = env.MONGOLAB_URI ||
            'mongodb://localhost/' + env.SAFE_TITLE;

// connect to db
mongoose.connect(dbUri);

// export the connection
module.exports = mongoose;
