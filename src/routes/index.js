const {Router} = require('express');

// Controllers
const UserController = require('../controllers/UserController');
const SessionController = require('../controllers/SessionController');

const LawyerController = require('../controllers/JudiciaryController')

const routes = Router();


// users
routes.post('/users', UserController.store)
routes.post('/session',SessionController.store)

// lawyers
routes.post('/session/judiciary',LawyerController.store)


module.exports = routes
