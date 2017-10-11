'use strict';

const { Router } = require('express');
const router = Router();

const { getEmployee, getSingleEmployee, postEmployee, editSingleEmployee } = require('../controllers/employeeCtrl');

// When the request is a GET on the computers route, call get Computers
router.get('/employee', getEmployee);
router.get('/employee', getSingleEmployee);
router.put('/employee', postEmployee);
router.put('/employee', editSingleEmployee);

module.exports = router;
