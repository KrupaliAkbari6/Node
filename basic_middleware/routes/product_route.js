const express = require('express');
const router = express.Router();

const productController = require('./../controller/productController');
const productvalidation = require('./../validator/productvalidation');

router.get('/products', productController.index)
router.get('/products/:id/:name/:price', productController.show)
router.post('/products', productvalidation.productCreate, productController.store)
router.put('/products', productController.update)
router.delete('/products', productController.destroy)

module.exports = router;