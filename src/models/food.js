'use strict';
// contains schema for what food will have on it

const Food = (sequelize, DataTypes) => 
  sequelize.define('Food', {
    name: {
      type: DataTypes.STRING,
      required: true
    },
    calories: {
      type: DataTypes.INTEGER,
      required: false
    }
  });


// console.log('MODELS FOOD MODEL: ',Food)

module.exports = Food;
