const express = require('express')
const server = express();
const routes = require('./routes');
const {serverEnv} = require("../config")
const {sequelize} = require("./db") 

let create = () => {
    server.set('port', serverEnv.port)
    server.set('hostname', serverEnv.host)

    server.use(express.json())
    server.use(express.urlencoded({ extended: true }));

    routes.init(server)
}

let start = () => {
    const hostname = server.get('hostname')
    const port = server.get('port')

    server.listen(port, console.log(`Server listening on http://${hostname}:${port}`))

    //sequelize.authenticate().then(() => {console.log("Db connected")})
}

module.exports = {
    create,
    start
}