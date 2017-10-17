'use strict';

module.exports.getEmployee = (req, res, next) => {
  const { Employees } = req.app.get('models');
  Employees.findAll() // love those built-in Sequelize methods
  .then( (employee) => {
    res.render('employee', {employee});
  })
  .catch( (err) => {
    next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
  });
};

module.exports.getSingleEmployee = (req, res, next) => {
  const { Employees } = req.app.get('models/:id');
  Employees.findOne({raw: true, where: {id: req.params.id}, include: [{model: employee}] }) // love those built-in Sequelize methods
  .then( (employee) => {
    console.log('employee', employee);
    res.render('index', {employee});
  })
  .catch( (err) => {
    next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
  });
};

//JT - This function brings up the add new employee form on the web browser
//JT -This function gets called from the /add-new-employee route
module.exports.renderEmployeePage = (req, res, next) => {
  const { Departments } = req.app.get('models');
  Departments.findAll() 
  .then( (department) => {
    res.render('create_employee', {department});
  })
  .catch( (err) => {
    next(err); 
  });
};

module.exports.postEmployee = (req, res, next) => {
  console.log('test', req.body);
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

module.exports.putEmployee = (employeeObj) => {
  const { Employees } = req.app.get('models');  
  Employees.update({
    first_name:employeeObj.first_name,
    last_name:employeeObj.last_name,
    is_supervisor:false,
    department:employeeObj.department,
    start_date:employeeObj.start_date
  }, {where:{id: req.params.id}}).then(function(employee){
    res.status(200).send();
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
