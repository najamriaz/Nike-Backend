const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const categoryValidation = require('../../validations/category.validation');
const categoryController = require('../../controllers/category.controller');

const router = express.Router();
router
  .route('/')
  .post(auth('manageUsers'), validate(categoryValidation.createCategory), categoryController.createCategory)
  .get(validate(categoryValidation.getcategories), categoryController.getcategories);

router
  .route('/:categoryId')
  .patch(auth('manageUsers'), validate(categoryValidation.updateCategory), categoryController.updateCategory)
  .get(auth('manageUsers'), validate(categoryValidation.getCategoryById), categoryController.getCategoryById)
  .delete(auth('manageUsers'), validate(categoryValidation.deleteCategory), categoryController.deleteCategory);

module.exports = router;
