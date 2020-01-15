const express = require('express')
const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')

const routes = express.Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.get('/users/:userId/addresses', AddressController.index)
routes.post('/users/:userId/addresses', AddressController.store)

module.exports = routes