const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudySchema = new Schema({
  Abbrev: { type: String, unique: true, required: true },
});
StudySchema.index({ Abbrev: 'text' });
module.exports = mongoose.model('study', StudySchema);
