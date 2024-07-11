var express = require('express');
var router = express.Router();
const productController = require('../controllers/product.controller');

router.post('/create', productController.create);
router.get('/', productController.getProducts);
router.get('/pendentes', productController.getProductRservationPendente);

module.exports = router