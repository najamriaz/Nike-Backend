const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const productValidation = require('../../validations/product.validation');
const productController = require('../../controllers/product.controller');

const router = express.Router();
router
  .route('/')
  .post(auth('manageUsers'), validate(productValidation.createProduct), productController.createProduct)
  .get(validate(productValidation.getproducts), productController.getproducts);

router
  .route('/:productId')
  .patch(auth('manageUsers'), validate(productValidation.updateProduct), productController.updateProduct)
  .get(auth('manageUsers'), validate(productValidation.getProductById), productController.getProductById)
  .delete(auth('manageUsers'), validate(productValidation.deleteProduct), productController.deleteProduct);

module.exports = router;
