var mongoose = require('mongoose');

var PresidentSchema = mongoose.Schema({
	name: String,
  start: Number,
	end: Number,
  uncovered: Boolean
});

module.exports = mongoose.model('President', PresidentSchema);
