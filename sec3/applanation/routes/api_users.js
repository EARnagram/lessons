var express = require('express');
var router = express.Router();

// Require controllers
var APIUsersController = require("../controllers/api_users")

/* GET users listing. */
router.get('/',    APIUsersController.index)
router.get('/:id', APIUsersController.show)

module.exports = router;
