var users = [
  {
    handle: "DunkLord",
    name:   "Bob Neverdunk"
  },
  {
    handle: "MoneyMarge",
    name:   "Margaret Kalanchoe"
  }
];

var index = function(req, res, next){
  res.json(users);
};

var show = function(req, res, next){
  var id = req.params.id;
  if (id < users.length) {
    res.json(users[id]);
  } else {
    res.json({error: "error!"});
  }
};

var create = function(req, res, next) {
  var user = req.body;
  var preCount = users.length
  users.push(user);
  if (users.length > preCount) {
    res.json({msg: "User added!"});
  } else {
    res.json({msg: "We got problems!"});
  }
}

module.exports = {
  index:  index,
  show:   show,
  create: create
};
