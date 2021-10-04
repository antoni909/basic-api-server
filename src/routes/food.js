'use strict'

const express = require('express');
const { Food } = require('../models/index');
const router = express.Router();

//REST route declarations
router.get('/food', getFood);
router.get('/food/:id', getOneFood);
router.post('/food/', createFood);
router.put('/food/:id',updateFood);
router.delete('/food/:id',deleteFood);

// REST route handlers
async function getFood(req,res){
  console.log('ROUTES FOOD MODEL: ', Food)
  let allFood = await Food.findAll();
  console.log('***FOOD FOUND: ', allFood)
  res.status(200).json(allFood)
}

async function createFood(req,res){
  let foodData = req.body;
  let food = await Food.create(foodData);
  console.log(`***FOOD: ${food} CREATED`);
  res.status(200).json(food);
}

async function getOneFood(req,res){
  const id = parseInt(req.params.id);
  let food = await Food.findOne({ where:{id:id}});
  console.log(`***ONE FOOD: ${food} FOUND: `, food)
  res.status(200).json(food);
}

async function updateFood(req,res){
  // WIP
}

async function deleteFood(req,res){
  const id = parseInt(req.params.id);
  let deletedFood = await Food.destroy({ where: { id:id } } );
  console.log(`***FOOD ${deletedFood} DELETED: `, deletedFood)
  res.status(204).json(deletedFood);
}

module.exports = router;
