var express = require('express');
var router = express.Router();

// Require controllers
var UsersController = require("../controllers/users")

/* GET users listing. */
router.get('/',    UsersController.index)
router.get('/:id', UsersController.show)

module.exports = router;
