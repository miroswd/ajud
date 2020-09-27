module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('judiciaries', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      latitude:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      longitude:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      address:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('judiciaries');
  },
};
