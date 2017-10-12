'use strict';
module.exports = (sequelize, DataTypes) => {
  var Employee = sequelize.define('Employees', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    department: DataTypes.STRING,
    is_supervisor: DataTypes.BOOLEAN,
    start_date: DataTypes.DATE,
    assigned_computer: DataType.STRING,
    trainging_program: DataType.STRING
  }, {timestamps: false}); 
  
    Employee.associate = function(models) {
      Employee.belongsTo(models.Department, {
        foreignKey: 'departmentId',
        onDelete: 'CASCADE'
      
      });
    };

  return Employee;
};