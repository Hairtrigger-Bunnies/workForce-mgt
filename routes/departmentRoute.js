'use strict';

const { Router } = require('express');
const router = Router();

const { getDepartment } = require('../controllers/employeeCtrl');

// When the request is a GET on the computers route, call get Computers
employee.get('/department', getDepartment);

module.exports = router;
