const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealPortionSchema = new Schema({
  meal: { type: Schema.Types.ObjectId, ref: 'meal' },
  food: { type: Schema.Types.ObjectId, ref: 'food' },
  portion: { type: Schema.Types.ObjectId, ref: 'food_portion' },
  taken: { type: Number },
  returned: { type: Number }
});

module.exports = mongoose.model('mealportion', MealPortionSchema);
