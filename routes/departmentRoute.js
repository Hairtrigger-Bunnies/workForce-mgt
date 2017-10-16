'use strict';

const { Router } = require('express');
const router = Router();

const { getDepartment, postDepartment, editDepartment, deleteDepartment, getSingleDepartment, renderDepartmentPage } = require('../controllers/departmentCtrl');

router.get('/department', getDepartment);
router.post('/department', postDepartment);
router.put('/department/:id', editDepartment);
router.delete('/department/:id', deleteDepartment);
router.get('/add-new-department', renderDepartmentPage);
router.post('/add-new-department', postDepartment);
router.get('/department/:id', getSingleDepartment);

module.exports = router;
