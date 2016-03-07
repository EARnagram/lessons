var Todo = require('../models/todo');

module.exports = {
  index:   index,
  create:  create
};

function index(req, res, next) {
  Todo.find({}, function(err, todos) {
    if (err) {
      res.json(err);
    } else {
      res.send(todos);
    }
  });
};

function create(req, res, next) {
  var newTodo = req.body;

  Todo.create(newTodo, function(err, todo){
    if (err) {
      res.json(err);
    } else {
      res.json(todo);
    }
  });
};
