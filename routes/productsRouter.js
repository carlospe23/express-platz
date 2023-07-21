const express = require('express');
const ProductService = require('../services/productService');
const validatorHandler = require('./../middleware/validatorHandler')
const {createProductSchema, updateProductSchema, getProductSchema} = require('./../schemas/productSchema')


const router = express.Router();
const service = new ProductService();

router.get('/', (req, res, next) => {
  try {
    const products = service.find();
    res.json(products);
  } catch (error) {
    next(error)
  }
})

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  (req, res) => {
  const { id } = req.params
  const product = service.findOne(id);
  res.json(product)
})

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);

  res.status(201).json(newProduct)
})

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  (req, res, next) => {
  try {
    const {id} = req.params;
    const body = req.body;
    const product = service.update(id, body)
    res.json(product)
  } catch (error) {
    next(error);
  }
})

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  const rta = service.delete(id)
  res.json(rta)
})

module.exports = router
