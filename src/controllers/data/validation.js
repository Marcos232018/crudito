const models = require('../../mongo');
const User = require('../../mongo/schemas/User')

//HERE WE CREATE OUR VALIDATION MIDDLEWARES

//UNKNOWN ENTITY
const entity = (req, res, next) => {
  if (models[req.params.entity] !== undefined) 
    return next();

  res.status(400).send({ message: "The entity " + req.params.entity + " is not known"});
}

//WRONG ID
const entity_id = (req, res, next) => {
  if (req.params.id !== undefined && req.params.id.length === 24) 
    return next();
  
  res.status(400).send({ message: "The id should have 24 hex chars"});
}

module.exports = {
  entity,
  entity_id,
}
