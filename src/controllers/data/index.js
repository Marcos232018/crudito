const express = require('express');
const models = require('../../mongo');
const validation = require("./validation");


//THE MASTER OF CRUDS
const buildRouter = () => {

  var router = express.Router()
  router.use('/:entity', validation.entity);
  router.use('/:entity/:id', validation.entity_id);

  // GET ALL
  router.get('/:entity', (req, res) => {
    const Entity = models[req.params.entity];
    return Entity.find(req.query)
      .then((results) => {
        res.send(results);
      }).catch((err) => {
        res.status(500).send({ error: err })
      });
  });

  // GET ONE BY ID 
  router.get('/:entity/:id', (req, res) => {
    const Entity = models[req.params.entity];
    return Entity.findById(req.params.id).then((result) => {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send();
      }
    }).catch((err) => {
      res.status(500).send({ error: err })
    });
  });

  // CREATE
  router.post('/:entity', (req, res) => {
    const Entity = models[req.params.entity];
    console.log(Entity);
    const newEntity = new Entity(req.body);
    return newEntity.save().then((result) => {
      res.send(result);
    }).catch((err) => {
      res.status(500).send({ error: err })
    });
  });

  // DELETE
  router.delete('/:entity/:id', (req, res) => {
    const Entity = models[req.params.entity];
    return Entity.findByIdAndDelete(req.params.id).then(() => {
      res.status(204).send();
    }).catch((err) => {
      res.status(500).send({ error: err })
    });
  });

  // UPDATE BY ID
  router.put('/:entity/:id', (req, res) => {
    const Entity = models[req.params.entity];
    return Entity.findByIdAndUpdate(req.params.id, req.body, { 'new': true })
      .then((result) => {
        if (result) {
          res.status(200).send(result);
        } else {
          res.status(404).send();
        }
      }).catch((err) => {
        res.status(500).send({ error: err })
      });
  });

  return router;
};


module.exports = {
  buildRouter,
}
