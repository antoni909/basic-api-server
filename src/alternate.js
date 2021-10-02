'use strict'
/* alternate index.js */
// connects to postgres db
// this it the entry point for 'data layer'

require('dotenv').config();
const foodModel = require('./food')
// Heroku adds an env var called DATABASE_URL
// 'sqlite:memory:' is a connection string
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

// Sequelize Constructor - lets create data models where the model gets passed instance of sequelize and lets you use datatypes

const { Sequelize, DataTypes } = require('sequelize');
let sequelize = new Sequelize(DATABASE_URL);


// db models : feed it the sequelize instance and its datatypes
const food = foodModel(sequelize, DataTypes);
// some other model
// initialize sequelize db
module.exports = {
  db:sequelize,
  food,
}
