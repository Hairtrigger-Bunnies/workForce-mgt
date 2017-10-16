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
      employee_id:{
        type:Sequelize.INTEGER,
        allowNull:true,
        references:{
          model:'Employees',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      computer_id:{
        type:Sequelize.INTEGER,
        allowNull:true,
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