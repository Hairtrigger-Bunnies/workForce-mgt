'use strict';

module.exports.getEmployee = (req, res, next) => {
  const { Employee } = req.app.get('models');
  Employee.findAll() // love those built-in Sequelize methods
  .then( (employee) => {
    res.render('employee', {employee});
  })
  .catch( (err) => {
    next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
  });
};

module.exports.getSingleEmployee = (req, res, next) => {
  const { Employee } = req.app.get('models/:id');
  Employee.findOne({raw: true, where: {id: req.params.id}, include: [{model: employee}] }) // love those built-in Sequelize methods
  .then( (employee) => {
    console.log('employee', employee);
    res.render('index', {employee});
  })
  .catch( (err) => {
    next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
  });
};

module.exports.postEmployee = (req, res, next) => {
  const { Employee } = req.app.put('model');
  Employee.create()
  .then( (employee) => {
    res.render('index', {employee});
  })
  .catch( (err) => {
    next(err);
  });
};

// Bobby: HR should be able to edit an employee
module.exports.editSingleEmployee = (req, res, next) => {
  const { Employee } = req.app.get('models');
  Employee.update({first_name: '', last_name: '', department: '', assigned_computer: '', training_program: ''}, {fields: ['first_name', 'last_name', 'department', 'assigned_computer', 'training_programs']}) //built-in sequelize method for editing 
  .then ( (employee) => {
    res.render('index', {employee});
  })
  .catch( (err) => {
    next(err); // Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
  })
}
