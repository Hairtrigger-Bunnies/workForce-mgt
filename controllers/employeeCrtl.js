'use strict';

module.exports.getEmployee = (req, res, next) => {
  const { Employee } = req.app.get('models');
  Employee.findAll() // love those built-in Sequelize methods
  .then( (employee) => {
    res.render('index', {employee});
  })
  .catch( (err) => {
    next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
  });
};

module.exports.getSingleEmployee = (req, res, next) => {
  const { Employee } = req.app.get('models');
  Employee.findOne() // love those built-in Sequelize methods
  .then( (employee) => {
    res.render('index', {employee});
  })
  .catch( (err) => {
    next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
  });
};

// Bobby: HR should be able to edit an employee
module.exports.editSingleEmployee = (req, res, next) => {
  const { Employee } = req.app.get('models');
  Employee.update({first_name: '', last_name: '', department: '', assigned_computer: '', training_program: ''}, {fields: ['first_name', 'last_name', 'department', 'assigned_computer', 'training_program']}) //built-in sequelize method for editing 
  .then ( (employee) => {
    res.render('index', {employee});
  })
  .catch( (err) => {
    next(err); // Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
  })
}

// // The equivalent call using update looks like this:
// task.update({ title: 'foooo', description: 'baaaaaar'}, {fields: ['title']}).then(() => {
//   // title will now be 'foooo' but description is the very same as before
//  })
