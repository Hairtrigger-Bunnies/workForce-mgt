'use strict'

module.exports.getDepartment = (req, res, next) => {
  const { Department } = req.app.get('models');
  Department.findAll() // love those built-in Sequelize methods
  .then( (department) => {
    res.render('index', {department});
  })
  .catch( (err) => {
    next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
  });
};
