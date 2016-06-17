var mongoose = require('./database');

var User = require('../models/user');

var users = [
  { // 0
    handle: "DunkLord",
    name:  "Bob Neverdunk"
  },
  { // 1
    handle: "MoneyMarge",
    name:  "Margaret Kalanchoe"
  }
];

// wipe the database clean
User.remove({}, function(err) {
  if (err) console.log(err);
  // create users from seed data
  User.create(users, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + users.length  + " users.");
    }
    mongoose.disconnect();
  });
});
