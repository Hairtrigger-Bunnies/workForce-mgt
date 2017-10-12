'use strict';

const { Router } = require('express');
const router = Router();

const { getDepartment } = require('../controllers/departmentCtrl');

// When the request is a GET on the computers route, call get Computers
router.get('/department', getDepartment);

module.exports = router;
