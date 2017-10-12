'use strict';

module.exports = function(sequelize, DataTypes) {
  var Department = sequelize.define('Department', {
    name: DataTypes.STRING,
    supervisor: DataTypes.INTEGER
  }, {timestamps: false});

Department.associate = (models) => {
  //NEEDS SUPERVISOR
  // Department.hasOne(models.Employee, {
  //   foreignKey: 'employeeId'
  // });
};
let HRDepartment = {
  name: "Badass HR",
  supervisor: 5
}

Department.create(HRDepartment)
.then(function(department) {
  console.log('saved', department.name);
})

Department.getOne({name: 'Badass HR', include: [{model: Employee}] })
.then(function(dept) {
    console.log('Got department:', dept);
});

  return Department;
};

