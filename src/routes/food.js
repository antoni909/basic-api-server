'use strict';
// need access to express router, therefore must bring in express
const express = require('express');

// import db , or people if bringing in people db
const data = require('../models/index')
// Router Express Object able to plug into mw process
const router = express.Router();

router.get('/food',getAll);
router.get('/food',create);
router.get('/food',update);
router.get('/food',destroy);

const getAll = async (req,res) => {
  const listAllFoodItems = await data.food.findAll();
  console.log('food items from db',listAllFoodItems);
  // use next if want to ammend req object
  let message = 'getAll handler in progress';
  res.send(message);
};

const create = async (req,res) =>{
  let message = 'create handler in progress';
  res.send(message);
};
const update = async (req,res) =>{
  let message = 'update handler in progress';
  res.send(message);
};

const destroy = async (req,res) =>{
  let message = 'destroy handler in progress';
  res.send(message);
};

module.exports = router;
