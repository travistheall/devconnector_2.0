const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServingSchema = new Schema({
  meal: {type: Schema.Types.ObjectId, ref:'meal'},
  food: {type: Schema.Types.ObjectId, ref:'food'},
  portion: {type: Schema.Types.ObjectId, ref:'portion'},
  taken: Number,
  returned: Number
});

module.exports = mongoose.model('serving', ServingSchema);
