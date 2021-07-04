const { Sequelize } = require("sequelize")
const {db} = require("../../config")
const mysql = require('mysql2/promise');
const {initModel} = require('./models/Activity')

const initDB = async () => {
    const connection = await mysql.createConnection({host:db.host, user: db.username, password: db.password});
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${db.db}\`;`);

    return new Sequelize(
        db.db,
        db.username,
        db.password,
        {host : db.host, dialect: "mysql"}
    )
} 

const sequelize = initDB().then((sqlize) => {
    sqlize.authenticate().then(() => {console.log("Db connected")})
    initModel(sqlize)
    return sqlize
})

module.exports = {sequelize}