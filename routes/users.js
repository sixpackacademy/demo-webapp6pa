var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');


/* GET users listing. */
router.get('/', userController.getUsers);

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/productreservation/:username/:id', userController.productreservation)
router.post('/servicesappointments/:username/:id', userController.serviceappointment)
router.post('/imloggedin', userController.imLoggedIn)
router.post('/isadmin', userController.isAdmin)

router.get('/productsreservations', userController.getProductRservation)

module.exports = router;
