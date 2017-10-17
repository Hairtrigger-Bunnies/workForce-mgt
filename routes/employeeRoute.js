'use strict';

const { Router } = require('express');
const router = Router();

const { getEmployee, getSingleEmployee, postEmployee, patchEmployee, renderEmployeePage, renderEditEmployee, destroyEmployee } = require('../controllers/employeeCtrl');


// When the request is a GET on the computers route, call get Computers
router.get('/employee', getEmployee);
router.get('/employee/:id', getSingleEmployee);
router.get('/add-new-employee', renderEmployeePage);
router.post('/add-new-employee', postEmployee);
router.get('/edit-employee/:id', renderEditEmployee);
router.get('/deleteEmployee/:id', destroyEmployee);
router.post('/patch-employee/:id', patchEmployee);
module.exports = router;
