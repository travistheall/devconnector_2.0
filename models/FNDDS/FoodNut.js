const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodNutSchema = new Schema({
  food: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'food'
  },
  NutrientDesc: { type: String, required: true },
  NutrientVal: { type: Number, required: true },
  Unit: { type: String, required: true }
});
module.exports = mongoose.model('foodnut', FoodNutSchema);
