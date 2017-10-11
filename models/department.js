'use strict';

module.exports = function(sequelize, DataTypes) {
  var Department = sequelize.define('Department', {
    name: DataTypes.STRING,
    supervisor: DataTypes.INTEGER
  }, {timestamps: false});

Department.associate = (models) => {
  //NEEDS SUPERVISOR
  Department.hasOne(models.Employee, {
    foreignKey: 'employeeId'
  });
};

  return Department;
};

let HRDepartment = new Department();
HRDepartment.set('name', 'Badass HR');
HRDepartment.set('supervisor', 5);

HRDepartment.save()
.then(function(beach) {
  console.log('dept saved:', Department.name);
});

Department.getOne({name: 'Badass HR', include: [{model: Employee}] })
.then(function(dept) {
    console.log('Got department:', dept);
});