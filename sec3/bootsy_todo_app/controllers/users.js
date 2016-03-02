// Require resource's model(s).
var User = require("../models/user");

module.exports = {
  index: index,
  show:  show
};

function index(req, res, next) {

  User.find({}, function(error, users){
    res.json(users);
  });
};

function show(req, res, next) {
  User.findById(req.params.id, function(error, user){
    if (error) res.json({message: 'Could not find user because ' + error});
    res.render(user);
  });
};
