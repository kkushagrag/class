const express = require('express')
const routes = express.Router()

const helloController = require('../controllers/hello.controller')

routes.get('/hello',helloController.hello)

module.exports = routes