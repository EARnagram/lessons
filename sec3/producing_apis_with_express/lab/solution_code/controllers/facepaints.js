var facepaints = require('../data/facepaint_data');

module.exports = {
  index: index,
  show: show
}

function index(req, res, next) {
  var queryString = req.query;
  if (queryString.safe4Skin) {
    var queriedFP = facepaints.filter(facepaint => {
      return facepaint.safe4Skin.toString() === queryString.safe4Skin;
    })
    res.json(queriedFP);
  } else if (facepaints && !queryString.safe4Skin) {
    res.json(facepaints)
  } else {
    res.json({err: "Outta facepaints? At least we got family…"});
  }
};

function show(req, res, next) {
  var id = parseInt(req.params.id);
  var chosenFacepaint = facepaints.find(function(facepaint) {
    return facepaint.id === id;
  })
  if (chosenFacepaint) {
    res.json(chosenFacepaint);
  } else {
    res.json({err: "We don't sell that whack facepaint. Woot Woot!"})
  }
};
