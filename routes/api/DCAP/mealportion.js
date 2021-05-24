const express = require('express');
const router = express.Router();
const MealPortion = require('../../../models/DCAP/MealPortion');

// @route    GET api/mealportions
// @desc     Get all portions for a meal
// @access   Public
router.get('/meal/:mealid', async (req, res) => {
  try {
    const mealportions = await MealPortion.find({meal: req.params.mealid });
    res.json(mealportions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.get('/id/:id', async (req, res) => {
  try {
    const mealportion = await MealPortion.findById(req.params.id);
    if (!mealportion) {
      return res.status(404).json({ msg: 'Portion not found' });
    }
    res.json(mealportion);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/participant
// @desc     Create a participant
// @access   Publict
router.post('/create/', async (req, res) => {
  try {
    const mealportion = await MealPortion.insertMany(req.body)
    res.json(mealportion);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server fucked up');
  }
});

module.exports = router;
