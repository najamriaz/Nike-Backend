const { Category } = require('../models');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

/**
 * Create a category
 * @param {Object} categoryBody
 * @returns {Promise<Category>}
 */
const createCategory = async (categoryBody) => {
  return Category.create(categoryBody);
};

const getCategoryById = async (id) => {
  return Category.findById(id);
};

/**
 * Delete user by id
 * @param Objectconst httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');Id} categoryId
 * @returns {Promise<category>}
 */
const deleteCategoryById = async (categoryId) => {
  const category = await getCategoryById(categoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }
  await category.remove();
  return category;
};

// * Update user by id
//  * @param {ObjectId} userId
//  * @param {Object} updateBody
//  * @returns {Promise<User>}
//  */
const updateCategoryById = async (CategoryId, updateBody) => {
  const category = await getCategoryById(CategoryId);
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
  }

  Object.assign(category, updateBody);
  await category.save();
  return category;
};

const getcategoryById = async (id) => {
  return Category.findById(id);
};

const queryCategory = async (filter, options) => {
  const category = await Category.paginate(filter, options);
  return category;
};

module.exports = {
  createCategory,
  deleteCategoryById,
  updateCategoryById,
  getcategoryById,
  queryCategory,
};
