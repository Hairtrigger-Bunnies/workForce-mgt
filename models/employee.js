'use strict';

module.exports = (sequelize, DataTypes) => {
  var Employee = sequelize.define('Employees', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    department: DataTypes.STRING,
    is_supervisor: DataTypes.BOOLEAN,
    start_date: DataTypes.DATE
  }, {timestamps: false});
 

  Employee.associate = (models) => {
    console.log("modelsee", models);
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
};