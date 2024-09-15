const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  participants: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      score: {
        type: Number,
        default: 0
      },
      answers: [
        {
          questionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'
          },
          selectedOption: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Option'
          }
        }
      ]
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Exam = mongoose.model('Exam', examSchema);
module.exports = Exam;
