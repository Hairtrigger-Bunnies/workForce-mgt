'use strict'

module.exports.getComputer = (req, res, next) => {
  const { Computers } = req.app.get('models');
  console.log("Computer", Computers);
  Computers.findAll({ order: ['id'] }) // love those built-in Sequelize methods
  .then( (computers) => {
    res.render('computer', {computers});
  })
  .catch( (err) => {
    next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
  });
};