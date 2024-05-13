var express = require('express');
var router = express.Router();
const productController = require('../controllers/product.controller');

router.post('/create', productController.create);

module.exports = router