'use strict'

module.exports.getItDept = (req, res, next) => {
  const { ItDept } = req.app.get('models');
  ItDept.findAll() // love those built-in Sequelize methods
  .then( (itDept) => {
    res.render('index', {itDept});
  })
  .catch( (err) => {
    next(err); //Ship this nastyness off to our error handler at the bottom of the middleware stack in app.js
  });
};
