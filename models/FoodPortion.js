const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodPortionSchema = new Schema({
  food: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'food'
  },
  SubCodeDesc: { type: String },
  SeqNum: { type: Number, required: true },
  Desc: { type: String, required: true },
  Weight: { type: Number, required: true },
});
module.exports = mongoose.model('foodportion', FoodPortionSchema);
