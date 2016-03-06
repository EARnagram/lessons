var mongoose = require('./database');

var Todo = require('../models/todo');

var todos = [
  { // 0
    task:      "Refer to yourself by your bootsified name.",
    bootsyLvL: 3,
    completed: false
  },
  { // 1
    task:      "Wear star-shaped glasses.",
    bootsyLvL: 1,
    completed: true
  },
  { // 2
    task:      "Create a Bootsified name for yourself. Try it out.",
    bootsyLvL: 2,
    completed: false
  },
];

Todo.remove({}, function(err) {
  if (err) console.log(err);
  Todo.create(todos, function(err, todos) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + todos.length  + " todos.");
      mongoose.disconnect();
    }
  });
});
