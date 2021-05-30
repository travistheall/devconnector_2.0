const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  Code: { type: Number, unique: true, required: true },
  Desc: { type: String, required: true, text: true },
  WWEIA_Cat_Num: { type: Number, required: true },
  WWEIA_Cat_Desc: { type: String, required: true, text: true },
  AddDescs: { type: String, text: true },
});
FoodSchema.index({ Desc: 'text', AddDescs: 'text' });
module.exports = mongoose.model('food', FoodSchema);
