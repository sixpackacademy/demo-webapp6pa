var express = require("express");
var router = express.Router();
const serviceController = require("../controllers/service.controller");

router.post('/create', serviceController.create);

module.exports = router