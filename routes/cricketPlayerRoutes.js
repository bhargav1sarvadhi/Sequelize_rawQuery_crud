const routes = require('express').Router();
const asyncWrapperFunction = require('../middleware/asyncawaitRemove');
const { PlayerController } = require('../controller/index');

routes.post('/', asyncWrapperFunction(PlayerController.insertPlayer));
routes.delete('/:id', asyncWrapperFunction(PlayerController.deletePlayer));
routes.put('/:id', asyncWrapperFunction(PlayerController.updatePlayer));

module.exports = routes