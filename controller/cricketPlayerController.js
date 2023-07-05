const { QueryTypes } = require('sequelize');
const sequelize = require('../config/db');
const db = require('../model/index');
const CustomError = require('../utils/AppErrorFunction');
const PlayerModel = db.cricketPlayer


const insertPlayer = async (req, res, next) => {
    const { body: { name, type, age } } = req;
    const query = 'INSERT INTO cricketplayers ("name", "type", "age","createdAt","updatedAt") VALUES (:name,:type,:age,NOW(),NOW()) RETURNING *';
    const [result, metadata] = await sequelize.query(query, {
        type: QueryTypes.INSERT,
        replacements: { name, type, age }
    })
    if (result) {
        return res.status(201).json({ success: true, message: 'successfully Inserted Player', data: result });
    }
}

const deletePlayer = async (req, res, next) => {
    const { params: { id } } = req;
    const query = 'DELETE FROM cricketplayers WHERE id =:id RETURNING *';
    const [result, metadata] = await sequelize.query(query, {
        type: QueryTypes.DELETE,
        replacements: { id }
    })
    if (!result) {
        return next(new CustomError(`Please Check Id : ${id}`, 404));
    } else {
        return res.status(200).json({ success: true, message: 'successfully Inserted Player', data: result });
    }
}

const updatePlayer = async (req, res, next) => {
    const { params: { id }, body: { name, type, age } } = req;
    const query = 'UPDATE cricketplayers SET name =:name,type=:type,age=:age WHERE id=:id RETURNING *'
    const [result, metadata] = await sequelize.query(query, {
        type: QueryTypes.UPDATE,
        replacements: { name, type, age, id }
    })
    if (result == '' || null || undefined || !result) {
        return next(new CustomError(`Please Check Id : ${id}`, 404));
    } else {
        return res.status(200).json({ success: true, message: 'successfully Updated Player', data: result });
    }
}


module.exports = { insertPlayer, deletePlayer, updatePlayer }