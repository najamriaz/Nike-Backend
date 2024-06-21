const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createProduct = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    catId: Joi.string().required(),
    description: Joi.string().required(),
    catImage: Joi.array().required(),
    costPrice: Joi.number().required(),
    salePrice: Joi.number().required(),
    profit: Joi.number().required(),
  }),
};
const deleteProduct = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId),
  }),
};

const updateProduct = {
  params: Joi.object().keys({
    productId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      catId: Joi.string(),
      description: Joi.string(),
      catImage: Joi.array(),
      costPrice: Joi.number(),
      salePrice: Joi.number(),
      profit: Joi.number(),
    })
    .min(1),
};
const getProductById = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId),
  }),
};
const getproducts = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getProductById,
  getproducts,
};
