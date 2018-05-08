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
    default: 0
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
    },
  ],
  rating: {
    type: Number,
  },
  cards: [
    {
      name: {
        type: String,
        required: true,
      },
      class: {
        type: String,
        required: true,
      },
      rarity: {
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
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = Deck = mongoose.model('decks', DeckSchema);
