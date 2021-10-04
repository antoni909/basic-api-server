'use strict';

require('dotenv').config();

// connect to a db 

const DATABASE_URL = process.env.NODE_ENV === 'test'? 'sqlite:memory' : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require('sequelize');
// console.log('DATABASE_URL', DATABASE_URL);

console.log('process.env.NODE_ENV',process.env.NODE_ENV);

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

const people = require('./person.js');
const food = require('./food.js');

// console.log('INDEX FOOD Model: ',food(sequelize, DataTypes));
// console.log('INDEX PEOPLE Model: ',people(sequelize, DataTypes));

let foodModel = food(sequelize, DataTypes);
let peopleModel = people(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  People: peopleModel,
  Food: foodModel,
}
