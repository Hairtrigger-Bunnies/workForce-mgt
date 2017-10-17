'use strict';

module.exports.getEmployee = (req, res, next) => {
  const { Employees } = req.app.get('models');
  Employees.findAll({ order: ['id'] }) // love those built-in Sequelize methods
  .then( (employee) => {
    res.render('employee', {employee});
  })
  .catch( (err) => {
    next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
  });
};

// Humph-Task 3 Func is to get single employee information with the two join tables 
module.exports.getSingleEmployee = (req, res, next) => {
  const { Employees, Computers, Training_Programs } = req.app.get('models');
  let singleEmployee;
  let assignedComputer;
  Employees.findOne({raw: true, where: {id: req.params.id}, include: [{model: Computers, Training_Programs}] }) // love those built-in Sequelize methods
  .then( (employee) => {
    singleEmployee = employee;
    return Computers.findOne({raw: true, where: {id: req.params.id} })
  })
  .then( (computer) => {
    assignedComputer = computer;
    return Training_Programs.findOne({raw: true, where: {id: req.params.id} });
  })  
  .then( (training_program) => {
    // const(s) below is to: use obj destructuring to continue passing data (defined "lets") along through the promise chain to render 
  //  grabbing data values off of defined var and assigning them to employee or computer-- reassigning vars
    const {first_name} = singleEmployee;
    const {dataValues: computer} = assignedComputer;
    res.render('single_employee', {singleEmployee, assignedComputer, training_program});
  })
  .catch( (err) => {
    next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
  });
};

//JT - This function brings up the add new employee form on the web browser
//JT -This function gets called from the /add-new-employee route
module.exports.renderEmployeePage = (req, res, next) => {
  const { Departments } = req.app.get('models');
  Departments.findAll() // love those built-in Sequelize methods
  .then( (department) => {
    res.render('create_employee', {department});
  })
  .catch( (err) => {
    next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
  });
};

module.exports.postEmployee = (req, res, next) => {
  // console.log('test', req.body);
  const { Employees } = req.app.get('models');
  Employees.create({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    is_supervisor:false,
    department:req.body.select_department,
    start_date:req.body.start_date
  })
  .then( (data) => {
   res.status(200).redirect('/employee');
  })
  .catch( (err) => {
     res.status(500).json(err)
  });
};

//JT - This function brings up the add new employee form on the web browser
//JT -This function gets called from the /add-new-employee route
module.exports.renderEditEmployee = (req, res, next) => {
  const { Employees } = req.app.get('models');
  Employees.findOne({raw: true, where: {id: req.params.id}})
  .then( (employee) => {
    res.render('edit_employee', {employee});
  })
  .catch( (err) => {
    next(err); 
  });
};

module.exports.patchEmployee = (req, res, next) => {
  const { Employees } = req.app.get('models');  
  Employees.update({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    is_supervisor:false,
    department:req.body.department,
    start_date:req.body.start_date
  }, {where:{id: req.params.id}}).then(function(employee){
    res.redirect('/employee');
    // res.status(200).send();
  })
  .catch( (err) => {
    next(err); 
  });
};

module.exports.destroyEmployee = (req, res, next) => {
  const { Employees } = req.app.get('models');
  Employees.destroy({
    where: {
      id: req.params.id,
    }
  })
  .then((result) => {
    res.redirect('/employee');
  })
}
