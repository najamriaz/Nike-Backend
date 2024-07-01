const { Cart } = require('../models');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { $where } = require('../models/token.model');

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
  const cart = await getCartById(CartId);
  if (!cart) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Cart not found');
  }

  Object.assign(cart, updateBody);
  await cart.save();
  return cart;
};

const queryCarts = async (filter, options) => {
  const page = options.page || 1;
  const limit = options.limit || 10;
  const skip = (page - 1) * limit;
  const carts = await Cart.aggregate()
    .match(filter)
    .lookup({
      from: 'products',
      localField: 'productId',
      foreignField: '_id',
      as: 'product',
    })
    .unwind('product')
    .project('_id userId product.name product.catImage')
    .sort('createdAt')
    .skip(skip)
    .limit(limit);
  return {
    page,
    limit,
    data: carts,
  };
};

module.exports = {
  createCart,
  deleteCartById,
  updateCartById,
  getCartById,
  queryCarts,
};
