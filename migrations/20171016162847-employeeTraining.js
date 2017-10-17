'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employeeTraining',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      training_id:{
        type:Sequelize.INTEGER,
        allowNull:true,
        references:{
          model:'Employees',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      employee_id:{
        type:Sequelize.INTEGER,
        allowNull:true,
        references:{
          model:'Training_Programs',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }

    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('employeeTraining')
  }
};