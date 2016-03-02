var express = require('express'),
    router  = new express.Router();

// Require controllers.
var welcomeController    = require('../controllers/welcome');
var facepaintsController = require('../controllers/facepaints');

// root path:
router.get('/', welcomeController.index);

// facepaints resource:
router.get('/facepaints',        facepaintsController.index);
router.get('/facepaints/:id',    facepaintsController.show);
router.post('/facepaints/',      facepaintsController.create);
router.put('/facepaints/:id',    facepaintsController.update);
router.delete('/facepaints/:id', facepaintsController.destroy);

// endorsements resource:
router.get('/facepaints/:fp_id/endorsements',         facepaintsController.indexEnds);
router.get('/facepaints/:fp_id/endorsements/:end_id', facepaintsController.showEnd);

module.exports = router;
