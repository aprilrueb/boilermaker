const db = require('../index');
const Sequelize = require('sequelize');

const Users = db.define('users', {
    name: {
      type: Sequelize.STRING
    }
  }
);

module.exports = Users;
