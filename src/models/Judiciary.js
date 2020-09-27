const Sequelize = require('sequelize');

class Judiciary extends Sequelize.Model {
  static init(sequelize){
    super.init(
      {
        email:Sequelize.STRING,
        password:Sequelize.STRING,
        name:Sequelize.STRING,
        latitude:Sequelize.STRING,
        longitude:Sequelize.STRING,
        address:Sequelize.STRING,
      },{
        sequelize
      }
    );
    return this;
  }
}

module.exports = Judiciary;
