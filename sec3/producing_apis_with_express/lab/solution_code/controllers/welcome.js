var index = function(req, res, next) {
  res.json({msg: "Welcome to the Juggalo Facepaint and Faygo API Woot Woot!"});
};

module.exports = {
  index: index
};
