const db = require('../db');
const Sequelize = require('sequelize');

const Puppies = db.define('puppies', {
    name: {
      type: Sequelize.STRING
    }
  }
);

module.exports = Puppies;
