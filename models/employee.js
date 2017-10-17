'use strict';

module.exports = (sequelize, DataTypes) => {
  var Employee = sequelize.define('Employees', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    department: DataTypes.STRING,
    is_supervisor: DataTypes.BOOLEAN,
    start_date: DataTypes.DATE
  }, {timestamps: false});
 
<<<<<<< HEAD
    // Employee.associate = function(models) {
    //   Employee.belongsTo(models.Department, {
    //     foreignKey: 'departmentId',
    //     onDelete: 'CASCADE'
      
    //   });
    // };

  return Employee;
=======

  Employee.associate = (models) => {
    Employee.belongsToMany(models.Training_Programs, {
      through: 'employeeTraining'
    });
    Employee.belongsTo(models.Departments, {
      foreignKey: 'id'
    });
    Employee.belongsToMany(models.Computers, {
      through: 'employee_computers',
      foreignKey: "employee_id"
    });
};
return Employee;
>>>>>>> cc7b5e0b7edc1b752dd34244e5e81a3200b783bd
};