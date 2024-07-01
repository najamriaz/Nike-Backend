const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { cartService } = require('../services');
const pick = require('../utils/pick');

const createCart = catchAsync(async (req, res) => {
  const cart = await cartService.createCart({
    ...req.body,
    userId: req.user.id,
  });
  res.status(httpStatus.CREATED).send(cart);
});

const deleteCart = catchAsync(async (req, res) => {
  await cartService.deleteCartById(req.params.cartId);
  res.status(httpStatus.NO_CONTENT).send();
});

const updateCart = catchAsync(async (req, res) => {
  const cart = await cartService.updateCartById(req.params.cartId, req.body);
  res.send(cart);
});

const getCarts = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await cartService.queryCarts(filter, options);
  res.send(result);
});

const getCartById = catchAsync(async (req, res) => {
  const cart = await cartService.getCartById(req.params.cartId);
  if (!cart) {
    throw new ApiError(httpStatus.NOT_FOUND, 'cart not found');
  }
  res.send(cart);
});

module.exports = {
  createCart,
  deleteCart,
  updateCart,
  getCarts,
  getCartById,
};
