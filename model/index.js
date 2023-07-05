const { Sequelize } = require('sequelize');
const sequelize = require('../config/db')

const db = { sequelize, Sequelize }

db.cricketTeamModel = require('../model/cricketTeamModel')(sequelize, Sequelize)
db.cricketPlayer = require('../model/cricketPlayerModel')(sequelize, Sequelize)

// db.sequelize.sync({ force:false });
module.exports = db;