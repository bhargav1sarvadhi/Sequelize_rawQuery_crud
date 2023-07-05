const routes = require('express').Router();
const CustomError = require('../utils/AppErrorFunction');
const invalidRoute = (req, res, next) => {
    return next(new CustomError(`${req.url} - Bad request`, 400));
};

routes.use('/cricketteam', require('./cricketTeamRoutes'));
routes.use('/cricketplayer', require('./cricketPlayerRoutes'));
routes.all('*', invalidRoute);

module.exports = routes;