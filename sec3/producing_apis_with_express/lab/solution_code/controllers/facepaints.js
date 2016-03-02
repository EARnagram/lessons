var facepaints = require('../data/facepaint_bonus_data');

module.exports = {
  index:     index,
  show:      show,
  create:    create,
  update:    update,
  destroy:   destroy,
  indexEnds: indexEnds,
  showEnd:   showEnd
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

function create(req, res, next) {
  var facepaint = req.body;
  var preCount  = facepaints.length;
  facepaint.id  = facepaints.id;
  facepaints.id++;
  facepaints.push(facepaint);
  if (facepaints.length > preCount) {
    res.json({msg: "Facepaint added!"});
  } else {
    res.json({err: "How we supposed to wear that?!"});
  }
}

function update(req, res, next) {
  var updateFp = req.body;
  var id = parseInt(req.params.id);
  var facepaint = facepaints.find(function(fp) {
    return fp.id === id;
  });
  if (!!updateFp) {
    if (updateFp.title)        facepaint.title        = updateFp.title;
    if (updateFp.endorsements) facepaint.endorsements = updateFp.endorsements;
    if (updateFp.price)        facepaint.price        = updateFp.price;
    if (updateFp.safe4Skin)    facepaint.safe4Skin    = updateFp.safe4Skin;
    res.json({msg: "Facepaint updated!"})
  } else {
    res.json({err: "What facepaint you talking about? You holdin out on us?!"})
  }
}

function destroy(req, res, next) {
  var id       = parseInt(req.params.id);
  var chosenFp = facepaints.find(function(facepaint) {
    return facepaint.id === id;
  });
  var cFpId = facepaints.indexOf(chosenFp);
  if (!!chosenFp) {
    facepaints.splice(cFpId, 1);
    res.json({msg: "Dang… that stuff really made my eyes pop."});
  } else {
    res.json({err: "Why are you trying to delete my facepaints?"});
  }
}

function indexEnds(req, res, next) {
  var fpId = parseInt(req.params.fp_id);
  var chosenFp = facepaints.find(function(facepaint) {
    return facepaint.id === fpId;
  });
  if (!!chosenFp.endorsements) {
    res.json(chosenFp.endorsements);
  } else {
    res.json({msg: "No Endorsements? Really?!"})
  }
}

function showEnd(req, res, next) {
  var fpId  = parseInt(req.params.fp_id),
      endId = parseInt(req.params.end_id);
  var chosenEnd = facepaints.find(function(facepaint) {
    return facepaint.id === fpId;
  }).endorsements.find(function(endorsement) {
    return endorsement.id === endId;
  });
  if (!!chosenEnd) {
    res.json(chosenEnd);
  } else {
    res.json({err: "Can't find the endorsement? People will still pay for it, right?"});
  }
}
