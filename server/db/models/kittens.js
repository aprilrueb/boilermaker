const db = require('../db');
const Sequelize = require('sequelize');

const Kittens = db.define('kittens', {
    name: {
      type: Sequelize.STRING
    }
  }
);

module.exports = Kittens;
