const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createCategory = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string(),
    catImage: Joi.array().required(),
  }),
};
const deleteCategory = {
  params: Joi.object().keys({
    categoryId: Joi.string().custom(objectId),
  }),
};

const updateCategory = {
  params: Joi.object().keys({
    categoryId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      description: Joi.string(),
      catImage: Joi.array(),
    })
    .min(1),
};
const getCategoryById = {
  params: Joi.object().keys({
    categoryId: Joi.string().custom(objectId),
  }),
};
const getcategories = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

module.exports = {
  createCategory,
  deleteCategory,
  updateCategory,
  getCategoryById,
  getcategories,
};
