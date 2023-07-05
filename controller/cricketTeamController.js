const { QueryTypes } = require('sequelize');
const sequelize = require('../config/db');
const db = require('../model/index');
const CustomError = require('../utils/AppErrorFunction');
const TeamModel = db.cricketTeamModel


const insertTeam = async (req, res, next) => {
    const { body: { name, coach_name } } = req;
    const query = 'INSERT INTO "cricketteams" ("name", "coach_name","createdAt","updatedAt") VALUES (:name, :coach_name,NOW(),NOW()) RETURNING *';
    const [result, metadata] = await sequelize.query(query, {
        replacements: { name, coach_name },
        type: QueryTypes.INSERT,
    });
    return res.status(201).json({ success: true, message: 'successfully Inserted Team', data: result });
}

const deleteTeam = async (req, res, next) => {
    const { params: { id } } = req;
    const query = 'DELETE FROM cricketteams WHERE id =:id RETURNING *'
    const [result, metadata] = await sequelize.query(query, {
        replacements: { id },
        type: QueryTypes.DELETE,
    })
    if (result == undefined || null || !result) {
        return next(new CustomError(`Please Check Id : ${id}`, 404));
    } else {
        return res.status(200).json({ success: true, message: 'successfully Deleted Team', data: result });
    }
}

const updateTeam = async (req, res, next) => {
    const { params: { id }, body: { name, coach_name } } = req;
    const query = 'UPDATE cricketteams SET name =:name , coach_name=:coach_name WHERE id=:id RETURNING *'
    const [result, metadata] = await sequelize.query(query, {
        replacements: { name, coach_name, id },
        type: QueryTypes.UPDATE,
    })
    if (result == '' || null || undefined || !result) {
        return next(new CustomError(`Please Check Id : ${id}`, 404));
    } else {
        return res.status(200).json({ success: true, message: 'successfully Updated Team', data: result });
    }
}


module.exports = { insertTeam, deleteTeam, updateTeam }