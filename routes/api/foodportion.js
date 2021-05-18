const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
const Food = require('../../models/Food');
const FoodPortion = require('../../models/FoodPortion');


// @route    POST api/foods
// @desc     Create a foods
// @access   Public
router.post('/', async (req, res) => {
  try {
    const food = await Food.findOne({ Code: req.body.Code });
    const newFoodPortion= new FoodPortion({
        food: food.id,
          SubCodeDesc: req.body.SubCodeDesc,
          SeqNum: req.body.SeqNum,
          Val: req.body.Val,
          Unit: req.body.Unit
    });
    const foodport = await newFoodPortion.save();
    res.json(foodport);
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
    const foodport = await FoodPortion.find().limit(25);
    res.json(foodport);
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
    const foodport = await FoodPortion.find({food: food['_id']});
    if (!foodport) {
      return res.status(404).json({ msg: 'Food not found' });
    }
    res.json(foodport);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
