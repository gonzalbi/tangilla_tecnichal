const express = require('express');
const router = express.Router();

const mainController = require('../../controllers/');

router.use('/', mainController);

module.exports = router;