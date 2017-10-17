'use strict';

const { Router } = require('express');
const router = Router();

const { getDepartment, postDepartment, editDepartment, destroyDepartment } = require('../controllers/departmentCtrl');

// When the request is a GET on the computers route, call get Computers
router.get('/department', getDepartment);
router.post('/department', postDepartment);
router.put('/department/:id', editDepartment);
router.get('/deleteDepartment/:id', destroyDepartment);
module.exports = router;
