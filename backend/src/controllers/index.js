const express = require('express')
const router = express.Router()

const mainController = require('./mainController')

router.post('/findSynonims', mainController.findSynonims)


module.exports = router
