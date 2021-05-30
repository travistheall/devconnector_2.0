const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodPortionSchema = new Schema({
  food: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'food'
  },
  SubCodeDesc: { type: String },
  PortDesc: { type: String, required: true },
  Weight: { type: Number, required: true },
});

module.exports = mongoose.model('food_portion', FoodPortionSchema);