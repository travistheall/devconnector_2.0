const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
  participant: { type: Schema.Types.ObjectId, ref: 'participant' },
  desc: { type: String },
  photos: [{ type: String }],
  notes: [{ type: String }]
});

module.exports = mongoose.model('meal', MealSchema);
