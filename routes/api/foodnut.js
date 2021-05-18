const express = require('express');
const router = express.Router();
const FoodNut = require('../../models/FoodNut');
const Food = require('../../models/Food');

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
      const foodnut = await FoodNut.find();
      res.json(foodnut);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

// @route    Get api/foodnut
// @desc     Create a foodnut
// @access   Publict
router.get('/:code', async (req, res) => {
  try {
      console.log(req.params.code)
    const food = await Food.findOne({number: req.params.code });
    const foods = await Foodnut.find({number: req.params.code });
    if (!foodnuts) {
      return res.status(404).json({ msg: 'Food not found' });
    }
    res.json(foodnuts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
