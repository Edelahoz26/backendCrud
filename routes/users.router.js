const express = require('express');
const userService = require('./../services/users.service');

const router = express.Router();

const users = new userService();

router.get('/', (req, res) => {
  const products = users.find();
  res.json(products);
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const product = users.findOne(id);
  res.json(product);
});

module.exports = router;
