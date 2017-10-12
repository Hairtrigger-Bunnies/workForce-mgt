'use strict';

const { Router } = require('express');
const router = Router();

const { getEmployee } = require('../controllers/employeeCtrl');


// When the request is a GET on the computers route, call get Computers
router.get('/employee', getEmployee);
router.get('/employee:id', getSingleEmployee);
router.put('/employee', postEmployee);

module.exports = router;
