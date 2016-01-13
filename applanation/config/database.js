// Require mongoose to speak to your databse.
var mongoose = require('mongoose');

// connect the project to your database
mongoose.connect('mongodb://localhost/applanation');

// export the connection
module.exports = mongoose;
