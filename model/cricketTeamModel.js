const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

module.exports = (sequelize, Sequelize) => {
    const cricketTeamModel = sequelize.define('cricketteam', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        coach_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return cricketTeamModel
}