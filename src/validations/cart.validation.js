const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createCart = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    productId: Joi.string().required(),
    productImage: Joi.array().required(),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
  }),
};
const deleteCart = {
  params: Joi.object().keys({
    cartId: Joi.string().custom(objectId),
  }),
};

const updateCart = {
  params: Joi.object().keys({
    cartId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      productId: Joi.string(),
      productImage: Joi.array(),
      price: Joi.number(),
      quantity: Joi.number(),
    })
    .min(1),
};
const getCartById = {
  params: Joi.object().keys({
    cartId: Joi.string().custom(objectId),
  }),
};
const getcarts = {
  query: Joi.object().keys({
    name: Joi.string(),
  }),
};

module.exports = {
  createCart,
  deleteCart,
  updateCart,
  getCartById,
  getcarts,
};
