// Require the model/s you're controlling
var User = require("../models/user");

// Export the function/s as JSON
module.exports = {
  index: index,
  show:  show
}

//||||||||||||||||||||||||||--
//  USER SHOW PAGE
//||||||||||||||||||||||||||--
function index(req, res, next) {
  User.find({}, function(error, users) {
    if (error) res.json({message: "Could not find users because " + error});
    res.render(
      'users/index', {
        users: users
    });
  });
};

function show(req, res, next){
  var id = req.params.id;

  User.findById(id, function(error, user){
    if (error) res.json({message: 'Could not find user because ' + error});
    res.render(
      'users/show', {
        user: user
      });
  });
};
