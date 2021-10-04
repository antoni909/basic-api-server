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
  console.log('***PEOPLE FOUND: ', allPeople)
  res.status(200).json(allPeople)
}

async function createPerson(req,res){
  let personData = req.body;
  let person = await People.create(personData);
  console.log(`***PERSON: ${person} CREATED`);
  res.status(200).json(person);
}

async function getOnePerson(req,res){
  const id = parseInt(req.params.id);
  let person = await People.findOne({ where:{id:id}});
  console.log(`***ONE PERSON: ${person} FOUND: `, person)
  res.status(200).json(person);
}

// ERR:UnhandledPromiseRejectionWarning: TypeError: person.updateOne is not a functionat updatePerson 
async function updatePerson(req,res){
  const id = parseInt(req.params.id);
  const personData = req.body;
  let person = await People.findOne({ where: { id:id } });
  let updatedPerson = await person.updateOne(personData);
  res.status(200).json(updatedPerson);
}

async function deletePerson(req,res){
  const id = parseInt(req.params.id);
  let deletedPerson = await People.destroy({ where: { id:id } } );
  console.log(`***PERSON ${deletedPerson} DELETED: `, deletedPerson)
  res.status(204).json(deletedPerson);
}

module.exports = router;
