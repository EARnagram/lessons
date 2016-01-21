var express = require('express');
var router = express.Router();

// Require controllers
var UsersController = require("../controllers/users")

/* GET users listing. */
router.get('/:id', UsersController.userShow)

module.exports = router;
