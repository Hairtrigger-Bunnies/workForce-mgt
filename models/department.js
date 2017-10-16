'use strict';

module.exports = function(sequelize, DataTypes) {
  var Department = sequelize.define('Department', {
    name: DataTypes.STRING,
    supervisor: DataTypes.INTEGER
  }, {timestamps: false});

  Department.associate = (models) => {
    Department.belongsTo(models.department, {
      foreignKey: 'id'
    });
  };
return Department;
};

