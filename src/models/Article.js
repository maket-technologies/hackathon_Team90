const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Type = {
    academic : 'academic',
    non_academic : 'non-academic'
  }

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    type: {
      type: String,
      enum : Type,
      default: Type.academic
    },
    link: {
        type: String,
        required: true,
        trim: true
    },  
    image: {
        type: String,
        required: true,
        trim: true
    },
    dateCreated: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = mongoose.models.Article || mongoose.model('Article', ArticleSchema);
