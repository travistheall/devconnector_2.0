const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodIngredientSchema = new Schema({
  food: { type: Schema.Types.ObjectId, ref: 'food' },
  IngredCode: { type: Number },
  IngredDesc: { type: String },
  Amount: { type: Number },
  PortDesc: { type: String },
  RetCode: { type: Number },
  IngredWeight: { type: Number },
  Code: { type: Number }
});

module.exports = mongoose.model('food_ingredients', FoodIngredientSchema);