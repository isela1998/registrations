const { Sequelize, DataTypes } = require('sequelize');

// Establish db connection
const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'password',
  port: 5432,
  database: 'workers',
  logging: false,
});

module.exports = { db, DataTypes };
