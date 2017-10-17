'use strict';

module.exports = function(sequelize, DataTypes) {
  var Department = sequelize.define('Departments', {
    name: DataTypes.STRING,
    supervisor: DataTypes.INTEGER
  }, {timestamps: false});

  Department.associate = (models) => {
    Department.belongsTo(models.Departments, {
      foreignKey: 'id'
    });
    Department.hasMany(models.Employees, {
      foreignKey: 'id'
    });
  };
return Department;
};

