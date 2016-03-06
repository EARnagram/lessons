var Todo = require('../models/todo');

module.exports = {
  index:   index,
  create:  create,
  update:  update,
  destroy: destroy
};

function index(req, res) {
  Todo.find({}, function(err, records){
      res.send(records);
  });
};

function create(req, res) {
  Todo.create(req.body, function(err, record){
    if(err) {
      res.send(err);
    }
    res.send(record);
  });
};

function update(req, res) {
  req.record.set(req.body)
  req.record.save(function (err, record) {
    res.send(record);
  });
};

function destroy(req, res) {
  req.record.remove(function (err, record) {
    res.send(record);
  });
};
