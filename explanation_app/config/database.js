// Require mongoose to speak to your databse.
var mongoose = require('mongoose');

// connect the project to your database
mongoose.connect('mongodb://localhost/explanation_app');

// export the connection
module.exports = mongoose;
