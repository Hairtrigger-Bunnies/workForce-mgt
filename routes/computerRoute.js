'use strict';

const { Router } = require('express');
const router = Router();

const { getComputer } = require('../controllers/computerCtrl');

// When the request is a GET on the computers route, call get Computers
router.get('/computer', getComputer);

module.exports = router;
