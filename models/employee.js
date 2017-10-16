'use strict';

module.exports = (sequelize, DataTypes) => {
  var Employee = sequelize.define('Employee', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    department: DataTypes.STRING,
    is_supervisor: DataTypes.BOOLEAN,
    start_date: DataTypes.DATE
  }, {timestamps: false});
 

  Employee.associate = (models) => {
    Employee.belongsToMany(models.training_programs, {
      through: 'employeeTraining'
    });
    Employee.belongsTo(models.department, {
      foreignKey: 'id'
    });
    Employee.belongsToMany(models.computer, {
      through: 'employee_computers'
    });
};
return Employee;
};