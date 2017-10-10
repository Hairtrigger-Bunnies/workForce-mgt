'use strict';

module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define('Employee', {
    First_Name: DataTypes.STRING,
    Last_Name: DataTypes.STRING,
    Department: DataTypes.STRING,
  }, {timestamps: false});

  Employee.associate = function(models) {
    Employee.belongsTo(models.Department, {
      foreignKey: 'departmentId',
      onDelete: 'CASCADE'
    });


  return Employee;
};
