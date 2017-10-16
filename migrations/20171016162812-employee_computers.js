'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employee_computers',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Employees',
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
    return queryInterface.dropTable('employee_computers')
  }
};