const routes = require('express').Router();
const asyncWrapperFunction = require('../middleware/asyncawaitRemove');
const { TeamController } = require('../controller/index')

routes.post('/', asyncWrapperFunction(TeamController.insertTeam));
routes.delete('/:id', asyncWrapperFunction(TeamController.deleteTeam));
routes.put('/:id', asyncWrapperFunction(TeamController.updateTeam));

module.exports = routes;