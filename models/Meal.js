const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = new Schema({
  user: { typer: Schema.Types.ObjectId, ref: 'user' },
  desc: String,
  photos: [{ photo: String }],
  notes: [{ note: String }]
});

module.exports = mongoose.model('meal', MealSchema);
