const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createCart = {
  body: Joi.object().keys({
    productId: Joi.string().required().custom(objectId),
    quantity: Joi.number().required(),
    userId: Joi.string().required().custom(objectId),
  }),
};
const deleteCart = {
  params: Joi.object().keys({
    cartId: Joi.string().custom(objectId),
  }),
};

const updateCart = {
  params: Joi.object().keys({
    cartId: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    quantity: Joi.number().required(),
  }),
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
