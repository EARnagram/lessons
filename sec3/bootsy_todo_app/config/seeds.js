var mongoose = require('./config/database');

var Todo = require('./models/todo');

var users = [
  { // 0
    task:      "Refer to yourself by your bootsified name.",
    bootsyLvL: 3,
    completed: false
  },
  { // 0
    task:      "Create a Bootsified name for yourself. Try it out.",
    bootsyLvL: 2,
    completed: false
  },
  { // 1
    task:      "Wear star-shaped glasses.",
    bootsyLvL: 1,
    completed: true
  }
];

User.remove({}, function(err) {
  if (err) console.log(err);
  User.create(users, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + users.length  + " users.");
      mongoose.disconnect();
    }
  });
});
