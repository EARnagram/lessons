module.exports = {
  index: index
};

function index(req, res, next) {
  res.json({msg: "Welcome to Bootsy's Todo App!"});
};
