const express = require('express')
const route = express.Router()
const controller = require('../controllers/produto-controller.js')

route.get('/', controller.get)
route.post('/', controller.post)
route.put('/:_id', controller.put)
module.exports = route;
