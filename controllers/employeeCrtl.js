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
  Employee.update() //built-in sequelize method for editing
  .then ( (employee) => {
    res.render('index', {employee});
  })
  .catch( (err) => {
    next(err); // Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
  })
}