'use strict';

const { ItDept } = require('express');
const itDept = ItDept();

const { getItDept } = require('../controllers/it');

// When the request is a GET on the computers route, call get Computers
router.get('/itDept', getItDept);

module.exports = itDept;
