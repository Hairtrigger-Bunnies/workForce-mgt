'use strict';
module.exports = (sequelize, DataTypes) => {
  var Training_Program = sequelize.define('Training_Program', {
    name: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    max_attendees: DataTypes.INTEGER
  }, {timestamps: false});
  //   classMethods: {
  //     associate: function(models) {
  //       // associations can be defined here
  //     }
  //   }
  // });
  return Training_Program;
};