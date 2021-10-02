'use strict';
// contains schema for what food will have on it

const foodModel = (sequelize, DataTypes) =>{
  return sequelize.define('Food', {
    name: {
      type: DataTypes.STRING,
      required: true
    },
    calories: {
      type: DataTypes.NUMBER,
      required: false
    }
  });
}

module.exports = foodModel;
