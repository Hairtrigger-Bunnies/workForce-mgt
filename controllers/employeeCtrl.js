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
  Employee.create({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    is_supervisor:req.body.is_supervisor,
    department:req.body.department,
    start_date:req.body.start_date,
    createdAt:null,
    updatedAt:null
  })
  .then( (data) => {
    res.status(200).redirect('/employee');
  })
  .catch( (err) => {
    res.status(500).json(err);
  });
};

// Bobby: HR should be able to edit an employee
module.exports.editSingleEmployee = (req, res, next) => {
  const { Employee } = req.app.get('models');
  Employee.update({
    first_name: '${}', 
    last_name: '', 
    department: '', 
    computer: '', 
    training_program: ''}, 
    {fields: ['first_name', 'last_name', 'department', 'computer', 'training_programs']}) //built-in sequelize method for editing 
  .then( (employee) => {
    res.status(200).redirect('/employee');
  })
  .catch( (err) => {
    res.status(500).json(err);
  });
};
