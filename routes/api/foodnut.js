const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
const Food = require('../../models/Food');
const FoodNut = require('../../models/FoodNut');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    POST api/foods
// @desc     Create a foods
// @access   Public
router.post('/', async (req, res) => {
  try {
    const food = await Food.findOne({ Code: req.body.Code });
    const newFoodNut = new FoodNut({
      Food: food.id,
      Desc: req.body.Desc,
      Val: req.body.Val,
      Unit: req.body.Unit
    });
    const foodnut = await newFoodNut.save();
    res.json(foodnut);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    Get api/foodnut
// @desc     Create a foodnut
// @access   Public
router.get('/', async (req, res) => {
  try {
    const foodnut = await FoodNut.find().limit(65);
    res.json(foodnut);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    Get api/foodnut
// @desc     Create a foodnut
// @access   Publict
router.get('/:text', async (req, res) => {
  try {
    const food = await Food.findOne({ Code: req.params.text });
    const foodnut = await FoodNut.find({food: food['_id']});
    if (!foodnut) {
      return res.status(404).json({ msg: 'Food not found' });
    }
    res.json(foodnut);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;