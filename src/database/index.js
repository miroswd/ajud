const Sequelize = require('sequelize')

const dbConfig =  require('../config/database');

// Models
const User = require('../models/User');
const Judiciary = require('../models/Judiciary');

const models = [User, Judiciary];

class Database{

  constructor(){
    this.init();
  }

  init(){
    this.connection = new Sequelize(dbConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }
}

module.exports = new Database()
