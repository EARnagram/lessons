var index = function(req, res, next) {
  res.json({msg: "You've hit the homepage!"});
};

module.exports = {
  index: index
};
