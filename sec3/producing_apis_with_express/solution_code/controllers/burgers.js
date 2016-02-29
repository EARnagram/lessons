var burgers = require('../data/burger_data');

var index = function(req, res, next){
  res.json(burgers);
};

var show = function(req, res, next){
  var id = Number(req.params.id);
  var check = false;
  burgers.forEach((burger,i) => {
    if (burger.id === id) {
      check = true;
      res.json(burger);
    } else if (i === burgers.length - 1 && !check) {
      res.json({err: "That burger must have escaped this island!"})
    }
  })
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
  console.log(req.body);
  var id = Number(req.params.id);
  var check = false;
  burgers.forEach((burger, i) => {
    if (burger.id === id) {
      check = true;
      if (updateBurger.title)       burgers[i].title       = updateBurger.title
      if (updateBurger.ingredients) burgers[i].ingredients = updateBurger.ingredients
      if (updateBurger.price)       burgers[i].price       = updateBurger.price
      res.json({msg: "Burger updated!"})
    } else if (i === burgers.length - 1 && !check) {
      res.json({err: "That burger doesn't exist!"})
    }
  })
}

var destroy = function(req, res, next) {
  var id = Number(req.params.id);
  var check = false;
  burgers.forEach((burger, i) => {
    if (burger.id === id) {
      burgers.splice(i, 1);
      check = true;
      res.json({msg: "Always sad to see a burger go..."})
    } else if (i === burgers.length -1 && !check) {
      res.json({err: "Why are you trying to delete my burgers?"})
    }
  })
}

module.exports = {
  index:   index,
  show:    show,
  create:  create,
  update:  update,
  destroy: destroy
};
