const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  Code: { type: Number, unique: true, required: true },
  Desc: { type: String, required: true },
  CatNum: { type: Number, required: true },
  CatDesc: { type: String, required: true },
  AddDescs: { type: String }
});
FoodSchema.index({'Desc': 'text', 'CatDesc': 'text', 'AddDescs': 'text', 'Code': 'number',  'CatNum': 'number',});
module.exports = mongoose.model('food', FoodSchema);
