var express = require('express');
var router = express.Router();

const Ingredient = require('../models/Ingredient');
const ingredientController = require('../controller/ingredientController');
/* GET home page. */
router.get('/', ingredientController.getIngredients);
router.get('/ingredients/:id/edit', ingredientController.findOneIngredients);
router.post('/', ingredientController.createIngridients);
router.post('/ingredients/:id/edit', ingredientController.findOneAndUpdate);
router.get('/ingredients/:id/delete', ingredientController.deleteIngredients);
module.exports = router;
