'use strict';

const { Department } = require('express');
const department = Department();

const { getDepartment } = require('../controllers/employeeCtrl');

// When the request is a GET on the computers route, call get Computers
employee.get('/department', getDepartment);

module.exports = department;
