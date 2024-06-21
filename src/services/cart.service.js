const { Cart } = require('../models');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

/**
 * Create a Cart
 * @param {Object} cartBody
 * @returns {Promise<Cart>}
 */
const createCart = async (cartBody) => {
  return Cart.create(cartBody);
};

const getCartById = async (id) => {
  return Cart.findById(id);
};

/**
 * Delete Cart by id
 * @param Objectconst httpStatus = require('http-status');
const { cart } = require('../models');
const ApiError = require('../utils/ApiError');Id} cartId
 * @returns {Promise<cart>}
 */
const deleteCartById = async (cartId) => {
  const cart = await getCartById(cartId);
  if (!cart) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Cart not found');
  }
  await cart.remove();
  return cart;
};

// * Update cart by id
//  * @param {ObjectId} cartId
//  * @param {Object} updateBody
//  * @returns {Promise<cart>}
//  */
const updateCartById = async (CartId, updateBody) => {
  const cart = await updateCartById(CartId);
  if (!cart) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Cart not found');
  }

  Object.assign(cart, updateBody);
  await cart.save();
  return cart;
};

const queryCarts = async (filter, options) => {
  const carts = await Cart.paginate(filter, options);
  return carts;
};

module.exports = {
  createCart,
  deleteCartById,
  updateCartById,
  getCartById,
  queryCart,
};
