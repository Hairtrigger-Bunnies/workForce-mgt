'use strict';

const { Router } = require('express');
const router = Router();

const { getEmployee, getSingleEmployee, postEmployee, putEmployee } = require('../controllers/employeeCtrl');


// When the request is a GET on the computers route, call get Computers
router.get('/employee', getEmployee);
router.get('/employee/:id', getSingleEmployee);
router.post('/employee', postEmployee);
router.put('/employee/:id', putEmployee);

module.exports = router;
