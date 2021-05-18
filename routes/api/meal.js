const express = require('express');
const router = express.Router();
const Meal = require('../../models/Meal');

// @route    POST api/foods
// @desc     Create a foods
// @access   Public
router.post('/', async (req, res) => {
  try {
    const newMeal = new Meal({
      user: req.body.user_id,
      desc: req.body.desc,
      photos: req.body.photos,
      notes: req.body.notes
    });
    const meal = await newMeal.save();
    res.json(meal);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
