const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  questions: [
    {
      questionText: {
        type: String,
        required: true
      },
      options: [
        {
          optionText: {
            type: String,
            required: true
          },
          isCorrect: {
            type: Boolean,
            default: false
          }
        }
      ]
    }
  ],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;
