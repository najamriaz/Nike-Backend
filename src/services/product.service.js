const { Product } = require('../models');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

/**
 * Create a Product
 * @param {Object} productBody
 * @returns {Promise<Product>}
 */
const createProduct = async (productBody) => {
  return Product.create(productBody);
};

const getProductById = async (id) => {
  return Product.findById(id);
};

/**
 * Delete user by id
 * @param Objectconst httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');Id} productId
 * @returns {Promise<product>}
 */
const deleteProductById = async (productId) => {
  const product = await getProductById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  await product.remove();
  return product;
};

// * Update user by id
//  * @param {ObjectId} userId
//  * @param {Object} updateBody
//  * @returns {Promise<product>}
//  */
const updateProductById = async (ProductId, updateBody) => {
  const product = await updateProductById(ProductId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }

  Object.assign(product, updateBody);
  await product.save();
  return product;
};

const queryProducts = async (filter, options) => {
  const products = await Product.paginate(filter, options);
  return products;
};

module.exports = {
  createProduct,
  deleteProductById,
  updateProductById,
  getProductById,
  queryProducts,
};
