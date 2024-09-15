const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true
  },
  optionText: {
    type: String,
    required: true
  },
  isCorrect: {
    type: Boolean,
    default: false
  }
});

const Option = mongoose.model('Option', optionSchema);
module.exports = Option;
