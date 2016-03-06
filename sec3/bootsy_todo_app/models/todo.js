var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
  task:      String,
  bootsyLvl: Number,
  completed: Boolean
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
