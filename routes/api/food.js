const express = require('express');
const router = express.Router();
const Food = require('../../models/Food');
const { check, validationResult } = require('express-validator');
// @route    GET api/foods
// @desc     Get all foods
// @access   Public
router.get('/', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/foods
// @desc     Get all foods
// @access   Public
router.get(
  '/:text',
  async (req, res) => {
    try {
      const foods = await Food.find({$text: {$search: req.params.text}});
      if (!foods) {
        return res.status(404).json({ msg: 'Food not found' });
      }
      res.json(foods);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    POST api/foods
// @desc     Create a foods
// @access   Publict
router.post('/', async (req, res) => {
  try {
    const newFood = new Food({
      Code: req.body.Code,
      Desc: req.body.Desc,
      CatNum: req.body.CatNum,
      CatDesc: req.body.CatDesc,
      AddDescs: req.body.AddDescs
    });
    const food = await newFood.save();
    res.json(food);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
