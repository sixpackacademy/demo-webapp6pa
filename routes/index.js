var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SixPackAcademy' });
});

// Teste

/* GET Contacto page. */
router.get('/', function(req, res, next) {
  res.render('contacto', { title: 'SixPackAcademy', morada: 'Rua Faria Guimarães, 753 , Porto, Portugal', telefone:"22 400 1603" });
});

module.exports = router;
