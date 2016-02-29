var index = function(req, res, next) {
  res.json({msg: "You have found Cheeseburgers in Cyberspace... a new kind of island paradise!"});
};

module.exports = {
  index: index
};
