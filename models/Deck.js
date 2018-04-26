const mongoose = require('mongoose');

const { Schema } = mongoose;

const DeckSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  slug: {
    type: String,
    required: true,
    max: 40,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  format: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  views: {
    type: Number,
  },
  likes: {
    type: Number,
  },
  rating: {
    type: Number
  },
  cards: [
    {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      cardSet: {
        type: String,
        required: true,
      },
      cost: {
        type: Number,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
    },
  ],
  comments: {
    type: Schema.Types.ObjectId,
    ref: 'comments',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  }
});

module.exports = Deck = mongoose.model('decks', DeckSchema);
