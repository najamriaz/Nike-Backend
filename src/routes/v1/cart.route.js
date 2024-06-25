const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const cartValidation = require('../../validations/cart.validation');
const cartController = require('../../controllers/cart.controller');

const router = express.Router();
router
  .route('/')
  .post(auth('cart'), validate(cartValidation.createCart), cartController.createCart)
  .get(auth('cart'), validate(cartValidation.getcarts), cartController.getCarts);

router
  .route('/:cartId')
  .patch(auth('manageUsers'), validate(cartValidation.updateCart), cartController.updateCart)
  .get(auth('manageUsers'), validate(cartValidation.getCartById), cartController.getCartById)
  .delete(auth('manageUsers'), validate(cartValidation.deleteCart), cartController.deleteCart);

module.exports = router;
