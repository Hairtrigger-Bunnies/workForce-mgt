'use strict'

module.exports.getDepartment = (req, res, next) => {
  const { Department } = req.app.get('models');
  Department.findAll() // love those built-in Sequelize methods
  .then( (department) => {
    res.render('department', {department});
  })
  .catch( (err) => {
    next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
  });
};

module.exports.postDepartment = (req, res, next) => {
  const { Department } = req.app.get('models');
  console.log('REQ', req.body);
  Department.create({
    name:req.body.departments.name,
    supervisor:req.body.departments.supervisor
  })
  .then( (data)=>{
    res.status(200).redirect('/department');
    })
    .catch( (err) => {
      res.status(200).json(err);
    })
};

module.exports.editDepartment = (req, res, next) => {
  const { Department } = req.app.get('models');
  console.log('REQ', req.body);
  Department.update({
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
  const { Department } = req.app.get('models');
  console.log('REQ', req.body);
  Department.destroy({where:{id: req.params.id}})
  .then( (data)=>{
    res.status(200).redirect('/department');
    })
    .catch( (err) => {
      res.status(200).json(err);
    })
};

module.exports.getSingleDepartment = (req, res, next) => {
  const { Department } = req.app.get('models');
  console.log('REQ', req.body);
  Department.findOne({raw: false, where:{id: req.params.id}})
  .then( (department)=>{
    console.log('department', department);
    res.render('department', {department});
    })
    .catch( (err) => {
      next(err);
    });
};