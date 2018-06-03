const Sequelize = require('sequelize');
const sequelize = new Sequelize('ws', 'postgres', 'pengjiajun1998', {
  host: '127.0.0.1',
  dialect: 'postgres',
  logging: false,
  port: 5432,

  pool: {
    max: 20,
    min: 0,
    acquire: 30000,

    idle: 10000
  },

  operatorsAliases: false
});

module.exports = {
  sql: sequelize,
  Sql: Sequelize

};