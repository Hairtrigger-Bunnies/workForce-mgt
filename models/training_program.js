'use strict';
module.exports = (sequelize, DataTypes) => {
  var Training_Program = sequelize.define('Training_Programs', {
    name: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    max_attendees: DataTypes.INTEGER
  }, {timestamps: false});
  
  Training_Program.associate = (models) => {
    Training_Program.belongsToMany(models.Employees, {
      through: 'employeeTraining'
    });
  };

  return Training_Program;
};