const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  profile: {
    name: {
      type: String,
      trim: true
    },
    bio: {
      type: String,
      trim: true
    }
  },
  activityLog: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Activity'
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

const User = mongoose.model('User', userSchema);
module.exports = User;
