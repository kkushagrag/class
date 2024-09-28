const express = require('express')
const routes = express.Router()

const userController = require('../controllers/user.controller')

routes.post('/',userController.registerUser)
routes.get('/',userController.getUser)

module.exports = routes