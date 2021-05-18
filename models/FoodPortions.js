const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodPortionSchema = new Schema({
  Food: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'food'
  },
  Desc: { type: String, required: true },
  Val: { type: Number, required: true },
  Unit: { type: String, required: true },
});
module.exports = mongoose.model('foodportion', FoodPortionSchema);
