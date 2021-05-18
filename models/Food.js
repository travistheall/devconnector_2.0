const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  Code: { type: Number, unique: true, required: true },
  Desc: { type: String, required: true },
  WWEIA_Cat_Num: { type: Number, required: true },
  WWEIA_Cat_Desc: { type: String, required: true }
});
FoodSchema.index({'Desc': 'text', 'CatDesc': 'text'});
module.exports = mongoose.model('food', FoodSchema);
