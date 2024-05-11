const categoriesRouter = require('express').Router();

const {findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory, checkEmptyName, checkIsCategoryExists} = require('../middlewares/categories');
const {sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted} = require('../controllers/categories');

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post('/categories', findAllCategories, checkEmptyName, checkIsCategoryExists, createCategory, sendCategoryCreated);
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById);
categoriesRouter.put('/categories/:id', checkEmptyName, updateCategory, sendCategoryUpdated);
categoriesRouter.delete('/categories/:id', deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;