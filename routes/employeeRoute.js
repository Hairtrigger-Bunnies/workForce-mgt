'use strict';

const { Router } = require('express');
const router = Router();

const { getEmployee } = require('../controllers/employeeCtrl');

// When the request is a GET on the computers route, call get Computers
employee.get('/employee', getEmployee);

module.exports = router;
