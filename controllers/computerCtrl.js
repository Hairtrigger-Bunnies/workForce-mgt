'use strict'

module.exports.getComputers = (req, res, next) => {
  const { Computers } = req.app.get('models');
  Computers.findAll() // love those built-in Sequelize methods
  .then( (computer) => {
    res.render('computer', {computer});
  })
  .catch( (err) => {
    next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
  });
};
