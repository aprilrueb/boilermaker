const crypto = require('crypto');
const _ = require('lodash');
const Sequelize = require('sequelize');
const db = require('../db');

const Users = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING
  },
  salt: {
    type: Sequelize.STRING
  }
}, {
  hooks: {
    beforeCreate: setSaltAndPassword,
    beforeUpdate: setSaltAndPassword
  }
});

Users.prototype.correctPassword = function (candidatePassword) {
  return this.Model.encryptPassword(candidatePassword, this.salt) === this.password;
};

Users.prototype.sanitize = function () {
  return _.omit(this.toJSON(), ['password', 'salt']);
};

Users.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64');
};

Users.encryptPassword = function (plainText, salt) {
  const hash = crypto.createHash('sha1');
  hash.update(plainText);
  hash.update(salt);
  return hash.digest('hex');
};

function setSaltAndPassword (user) {
  if (user.changed('password')) {
    user.salt = Users.generateSalt();
    user.password = Users.encryptPassword(user.password, user.salt);
  }
}

module.exports = Users;
