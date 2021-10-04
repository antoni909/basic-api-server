'use strict'

const express = require('express');
const { People } = require('../models/index');
const router = express.Router();

//REST route declarations
router.get('/people', getPeople);
router.get('/people/:id', getOnePerson);
router.post('/people/', createPerson);
router.put('/people/:id',updatePerson);
router.delete('/people/:id',deletePerson);

// REST route handlers
async function getPeople(req,res){
  let allPeople = await People.findAll();
  console.log('all people: ', allPeople)
  res.status(200).json(allPeople)
}

async function createPerson(req,res){
  let personData = req.body;
  let person = await People.create(personData);
  console.log('person created');
  res.status(200).json(person);
}

async function getOnePerson(req,res){
  const id = parseInt(req.params.id);
  let person = await People.findOne({ where:{id:id}});
  console.log('person found: ', person)
  res.status(200).json(person);
}

async function updatePerson(req,res){
  const id = parseInt(req.params.id);
  const personToUpdate = req.body;
  let person = await People.findOne({ where:{id:id}});
  let personUpated = await personToUpdate.update(personToUpdate);
  console.log('person updated: ', person)
  res.status(200).json(personUpated);
}

async function updatePerson(req,res){
  const id = parseInt(req.params.id);
  let deletedPerson = await People.destroy({ where:{ id:id }})
  console.log('person deleted: ', deletedPerson)
  res.status(204).json(deletedPerson);
}

module.exports = router;
