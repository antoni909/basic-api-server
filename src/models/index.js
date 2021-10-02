'use strict';

require('dotenv').config();

// connect to a db 

const DATABASE_URL = process.env.NODE_ENV === 'test'? 'sqlite:memory' : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require('sequelize');
console.log('DATABASE_URL', DATABASE_URL);

let sequelizeOptions = process.env.NODE_ENV === 'production'
    ? {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            }
        }
    }
    : {};

let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);
const people = require('./person.js')

module.exports = {
  db: sequelize,
  People: people(sequelize, DataTypes),
}
