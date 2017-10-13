"use strict";

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
  const { Employee } = req.app.get('models');
  Employee.findOne({raw: true, where: {id: req.params.id} }) // love those built-in Sequelize methods
  .then( (employee) => {
    console.log('employee', employee);
    res.render('employee', {employee});
  })
  .catch( (err) => {
    next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
  });
};

module.exports.postEmployee = (req, res, next) => {
  const { Employee } = req.app.get('models');
  Employee.create({
    first_name:req.body.employees.first_name,
    last_name:req.body.employees.last_name,
    is_supervisor:req.body.employees.is_supervisor,
    department:req.body.employees.department,
    start_date:req.body.employees.start_date
  })
  .then( (data) => {
   res.status(200).redirect('/employee');
  })
  .catch( (err) => {
     res.status(500).json(err)
  });
};

module.exports.putEmployee = (req, res, next) => {
  const { Employee } = req.app.get('models');  
  Employee.update({
    first_name:req.body.employees.first_name,
    last_name:req.body.employees.last_name,
    is_supervisor:req.body.employees.is_supervisor,
    department:req.body.employees.department,
    start_date:req.body.employees.start_date
  }, {where:{id: req.params.id}}).then( (data) => {
    res.status(200).send();
  })
  .catch( (err) => {
    next(err); 
  });
};

module.exports.destroyEmployee = (req, res, next) => {
  const { Employee } = req.app.get('models');
  Employee.destroy({where: {id: req.params.id} }) // love those built-in Sequelize methods
  .then( (employee) => {
    res.status(200).redirect('/employee');
  })
  .catch( (err) => {
    res.status(200).send(); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
  });
};