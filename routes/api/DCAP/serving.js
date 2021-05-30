const express = require('express');
const router = express.Router();
const Serving = require('../../../models/DCAP/Serving');

// @route    POST api/foods
// @desc     Create a foods
// @access   Public
router.post('/', async (req, res) => {
  try {
    const newServing = new Serving({
      meal: req.body.meal_id,
      food: req.body.food_id,
      portion: req.body.portion_id,
      taken: req.body.taken,
      returned: req.body.returned
    });
    const serving = await newServing.save();
    res.json(serving);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
