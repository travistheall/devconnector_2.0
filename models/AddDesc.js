const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddDescSchema = new Schema({
  food: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'food'
  },
  Seqnum: { type: Number, required: true },
  Adddesc: { type: String, required: true }
});
AddDescSchema.index({'Adddesc': 'text', 'food': 'ObjectId'});
module.exports = mongoose.model('adddesc', AddDescSchema);