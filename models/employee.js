'use strict';
module.exports = (sequelize, DataTypes) => {
  var Employee = sequelize.define('Employee', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    department: DataTypes.STRING,
    is_supervisor: DataTypes.BOOLEAN,
    start_date: DataTypes.DATE,
    assigned_computer: DataType.STRING,
    trainging_programs: DataType.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Employee;
};