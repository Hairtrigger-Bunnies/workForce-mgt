'use strict';

const { Router } = require('express');
const router = Router();

const { getEmployee, getSingleEmployee, postEmployee, patchEmployee, renderEmployeePage, renderEditEmployee } = require('../controllers/employeeCtrl');
const { getEmployee, getSingleEmployee, postEmployee, putEmployee, renderEmployeePage, destroyEmployee } = require('../controllers/employeeCtrl');


// When the request is a GET on the computers route, call get Computers
router.get('/employee', getEmployee);
router.get('/employee/:id', getSingleEmployee);
router.get('/add-new-employee', renderEmployeePage);
router.post('/add-new-employee', postEmployee);
router.patch('/employee/:id', patchEmployee);
router.get('/edit-employee/:id', renderEditEmployee);
router.get('/deleteEmployee/:id', destroyEmployee);
module.exports = router;
