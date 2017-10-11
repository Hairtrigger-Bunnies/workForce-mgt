'use strict';

const { Router } = require('express');
const router = Router();

const { getEmployee } = require('../controllers/employeeCtrl');
const { getSingleEmployee } = require('../controllers/employeeCtrl');
const { postEmployee } = require('../controllers/employeeCtrl');
const { editSingleEmployee } = require('../controllers/employeeCtrl');

// When the request is a GET on the computers route, call get Computers
router.get('/employee', getEmployee);
router.get('/employee', getSingleEmployee);
router.post('/employee', postEmployee);
router.put('/employee', editSingleEmployee);
module.exports = router;
