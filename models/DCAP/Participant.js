const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParticipantSchema = new Schema({
  study: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'study'
  },
  name: { type: String }
});
module.exports = mongoose.model('participant', ParticipantSchema);
