const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const cartValidation = require('../../validations/product.validation');
const cartController = require('../../controllers/cart.controller');

const router = express.Router();
router
  .route('/')
  .post(auth('manageUsers'), validate(cartValidation.createcart), cartController.createcart)
  .get(validate(cartValidation.getcarts), cartController.getcarts);

router
  .route('/:cartId')
  .patch(auth('manageUsers'), validate(cartValidation.updatecartCart), cartController.updateCart)
  .get(auth('manageUsers'), validate(cartValidation.getCartById), cartController.getCartById)
  .delete(auth('manageUsers'), validate(cartValidation.deleteCart), cartController.deleteCart);

module.exports = router;
