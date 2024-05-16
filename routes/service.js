var express = require("express");
var router = express.Router();
const serviceController = require("../controllers/service.controller");

router.post('/create', serviceController.create);
router.get('/', serviceController.getServices);

module.exports = router