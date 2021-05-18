const express = require('express');
const router = express.Router();
const Adddesc = require('../../models/AddDesc');

// @route    POST api/foods
// @desc     Create a foods
// @access   Publict
router.get('/', async (req, res) => {
  try {
    const adddesc = await Adddesc.find();
    res.json(adddesc);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// @route    POST api/foods
// @desc     Create a foods
// @access   Publict
router.post('/', async (req, res) => {
  try {
    const newAddDesc = new Adddesc({
      Food: req.body.Code,
      Adddesc: req.body.Adddesc,
      Seqnum: req.body.Seqnum
    });
    const adddesc = await newAddDesc.save();
    res.json(adddesc);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
