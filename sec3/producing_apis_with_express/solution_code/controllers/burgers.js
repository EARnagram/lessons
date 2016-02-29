var burgers = require('../data/burger_data');

var index = function(req, res, next){
  if (burgers) {
    res.json(burgers);
  } else {
    res.json({err: "Where did all the burgers go?!?"});
  }
};

var show = function(req, res, next){
  var id = Number(req.params.id);
  var chosenBurger = burgers.find(burger => {
    return burger.id === id;
  })
  if (chosenBurger) {
    res.json(chosenBurger);
  } else {
    res.json({err: "That burger must have escaped this island!"})
  }
};

var create = function(req, res, next) {
  var burger   = req.body;
  var preCount = burgers.length;
  burger.id    = burgers.id;
  burgers.id++;
  burgers.push(burger);
  if (burgers.length > preCount) {
    res.json({msg: "Burger added!"});
  } else {
    res.json({err: "Ya burned the bacon!!"});
  }
}

var update = function(req, res, next) {
  var updateBurger = req.body;
  var id = Number(req.params.id);
  var burger = burgers.find(burger => {
    return burger.id === id;
  });
  if (updateBurger !== burger) {
    if (updateBurger.title)       burger.title       = updateBurger.title;
    if (updateBurger.ingredients) burger.ingredients = updateBurger.ingredients;
    if (updateBurger.price)       burger.price       = updateBurger.price;
    res.json({msg: "Burger updated!"})
  } else if (updateBurger === burger) {
    res.json({msg: "That burger is perfect the way it is!"})
  } else {
    res.json({err: "That burger doesn't exist!"})
  }
}

var destroy = function(req, res, next) {
  var id           = Number(req.params.id);
  var chosenBurger = burgers.find(burger => {
    return burger.id === id;
  });
  var cBurgerId = burgers.indexOf(chosenBurger);
  if (chosenBurger) {
    burgers.splice(cBurgerId, 1)
    res.json({msg: "Always sad to see a burger go..."})
  } else {
    res.json({err: "Why are you trying to delete my burgers?"})
  }
}

module.exports = {
  index:   index,
  show:    show,
  create:  create,
  update:  update,
  destroy: destroy
};
