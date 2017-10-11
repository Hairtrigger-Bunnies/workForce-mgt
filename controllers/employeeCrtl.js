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
  Employee.update({first_name: '', last_name: '', department: '', job_title: '', supervisor: ''}) //built-in sequelize method for editing 
  .then ( (employee) => {
    res.render('index', {employee});
  })
  .catch( (err) => {
    next(err); // Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
  })
}

// The equivalent call using update looks like this:
task.update({ title: 'foooo', description: 'baaaaaar'}, {fields: ['title']}).then(() => {
  // title will now be 'foooo' but description is the very same as before
 })

[{"First_Name":"Stanwood","Last_Name":"Muglestone","department":"Sales","created_at":"8/24/2017","updated_at":"8/28/2017","job_title":"Administrative Assistant I","supervisor ":false}];