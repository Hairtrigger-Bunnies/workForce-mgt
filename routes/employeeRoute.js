'use strict';

const { Employee } = require('express');
const employee = Employee();

const { getEmployee } = require('../controllers/employeeCtrl');

// When the request is a GET on the computers route, call get Computers
employee.get('/employee', getEmployee);

module.exports = employee;
