const Puppies = require('./puppies');
const Kittens = require('./kittens');
const Users = require('./users');

Puppies.belongsTo(Users);
Kittens.belongsTo(Users);

Users.hasMany(Puppies);
Users.hasMany(Kittens);

module.exports = { Puppies, Kittens, Users };
