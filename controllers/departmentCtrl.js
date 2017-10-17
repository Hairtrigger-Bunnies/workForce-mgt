'use strict'

module.exports.getDepartment = (req, res, next) => {
  const { Departments } = req.app.get('models');
  Departments.findAll() // love those built-in Sequelize methods
  .then( (department) => {
    res.render('department', {department});
  })
  .catch( (err) => {
    next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
  });
};

module.exports.postDepartment = (req, res, next) => {
  const { Departments } = req.app.get('models');
  console.log('REQ', req.body);
  Departments.create({
    name:req.body.name,
    supervisor:req.body.supervisor
  })
  .then( (data)=>{
    res.status(200).redirect('/department');
    })
    .catch( (err) => {
      res.status(200).json(err);
    })
};

module.exports.renderDepartmentPage = (req, res, next) => {
  const { Employees } = req.app.get('models');
  Employees.findAll() 
  .then( (employee) => {
    console.log('emp', employee);
    res.render('create_department', {employee});
  })
  .catch( (err) => {
    next(err); 
  });
};

module.exports.editDepartment = (req, res, next) => {
  const { Departments } = req.app.get('models');
  console.log('REQ', req.body);
  Departments.update({
    name:req.body.departments.name,
    supervisor:req.body.departments.supervisor
  }, {where:{id: req.params.id}})
  .then( (data)=>{
    res.status(200).redirect('/department');
    })
    .catch( (err) => {
      res.status(200).json(err);
    })
};

module.exports.deleteDepartment = (req, res, next) => {
  const { Departments } = req.app.get('models');
  console.log('REQ', req.body);
  Departments.destroy({
    where: {
      id: req.params.id,
    }
  })
  .then( (data)=>{
    res.redirect('/department');
    })
    .catch( (err) => {
      res.status(200).json(err);
    })
};

module.exports.getSingleDepartment = (req, res, next) => {
  const { Departments } = req.app.get('models');
  console.log('REQ', req.body);
  Departments.findOne({raw: true, where:{id:req.params.id}})
  .then( (department)=>{
    console.log('department', department);
    res.render('view_department', {department});
    })
    .catch( (err) => {
      next(err);
    });
};