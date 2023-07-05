const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const CustomError = require('../utils/AppErrorFunction');

module.exports = (sequelize, Sequelize) => {
    const cricketPlayer = sequelize.define('cricketplayer', {

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM('batsman', 'bowler', 'all-rounder'),
            allowNull: false
        },
        age: {
            type: DataTypes.BIGINT,
            allowNull: false,
        }
    })
    return cricketPlayer
}