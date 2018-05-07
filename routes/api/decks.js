const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const Deck = require('../../models/Deck');
const User = require('../../models/User');

const validateDeckBuilderInput = require('../../validation/deck-builder');
const validateCommentInput = require('../../validation/comment');

const router = express.Router();

// @route    GET api/decks/:slug
// @desc     Get deck by slug
// @access   Public
router.get('/slug/:slug', (req, res) => {
  Deck.findOne({ slug: req.params.slug })
    .populate('author', ['name', 'avatar'])
    .then((deck) => {
      res.json(deck);
    })
    .catch(err => res.status(404).json({ noDeck: 'No deck found with this handle' }));
});

// @route    GET api/decks/id/:id
// @desc     Get deck by ID
// @access   Public
router.get('/id/:id', (req, res) => {
  Deck.findOne({ _id: req.params.id })
    .then((deck) => {
      res.json(deck);
    })
    .catch(err => res.status(404).json({ noDeck: 'No deck found with this id' }));
});

// @route    GET api/decks/
// @desc     Get decks
// @access   Public
router.get('/', (req, res) => {
  Deck.find()
    .populate('author', ['name', 'avatar'])
    .populate('comments.user', ['name', 'avatar'])
    .then((decks) => {
      res.json(decks);
    })
    .catch(err => res.status(404).json({ noDecks: 'No decks found' }));
});

// @route    POST api/decks/
// @desc     Create & update deck
// @access   Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  let { errors, isValid } = validateDeckBuilderInput(req.body);

  if (!isValid || req.body.cards.length < 30) {
    if (req.body.cards.length < 30) {
      errors = {
        ...errors,
        cardCount: 'Your deck must contain 30 cards'
      }
    }
    return res.status(400).json(errors);
  }

  const deckFields = {};

  // Get current user
  deckFields.author = req.user.id;
  deckFields.cards = req.body.cards;

  // Check if req.body is populated
  if (req.body.slug) deckFields.slug = req.body.slug;
  if (req.body.title) deckFields.title = req.body.title;
  if (req.body.class) deckFields.class = req.body.class;
  if (req.body.format) deckFields.format = req.body.format;
  if (req.body.type) deckFields.type = req.body.type;
  if (req.body.cost) deckFields.cost = req.body.cost;
  if (req.body.description) deckFields.description = req.body.description;

  Deck.findOne({ slug: deckFields.slug })
    .then((deck) => {
      if (deck) {
        // Update
        Deck.findOneAndUpdate({ slug: deckFields.slug }, { $set: deckFields }, { new: true })
          .then(deck => res.json(deck));
      }
      else {
        // Create
        new Deck(deckFields)
          .save()
          .then(deck => res.json(deck));
      }
    });
});

// @route    DELETE api/decks/:id
// @desc     Delete deck
// @access   Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Deck.findById(req.params.id)
    .then((deck) => {
      if (deck.author.toString() !== req.user.id) {
        return res.status(401).json({ notAuthorized: 'User not authorized' });
      }

      deck
        .remove()
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ noDeck: 'No deck found' }));
    });
});

// @route    POST api/decks/like/:id
// @desc     Like deck
// @access   Private
router.post('/like/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Deck.findById(req.params.id)
    .then((deck) => {
      if (deck.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
        return res.status(400).json({ alreadyLiked: 'User already liked this deck' });
      }

      // Add user id to likes array
      deck.likes.unshift({ user: req.user.id });

      // Save
      deck
        .save()
        .then(deck => res.json(deck));
    })
    .catch(err => res.status(404).json({ noDeck: 'No deck found' }));
});

// @route    POST api/decks/unlike/:id
// @desc     Unlike deck
// @access   Private
router.post('/unlike/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Deck.findById(req.params.id)
    .then((deck) => {
      if (deck.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
        return res.status(400).json({ notLiked: 'User has not yet liked this deck' });
      }

      // Get remove index
      const removeIndex = deck.likes
        .map(item => item.user.toString())
        .indexOf(req.user.id);

      // Splice out of array
      deck.likes.splice(removeIndex, 1);

      // Save
      deck
        .save()
        .then(deck => res.json(deck));
    })
    .catch(err => res.status(404).json({ noDeck: 'No deck found' }));
});

// @route    POST api/decks/view/:id
// @desc     Increment deck views
// @access   Public
router.post('/view/:id', (req, res) => {
  Deck.findById(req.params.id)
    .then((deck) => {
      // Increment deck views
      ++deck.views;

      // Save
      deck
        .save()
        .then(deck => res.json(deck));
    })
    .catch(err => res.status(404).json({ noDeck: 'No deck found' }));
});

// @route    POST api/decks/comment/:id
// @desc     Comment in deck
// @access   Private
router.post('/comment/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateCommentInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Deck.findById(req.params.id)
    .then((deck) => {
      const newComment = {
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id,
      };

      // Add to comments array
      deck.comments.unshift(newComment);

      // Save
      deck
        .save()
        .then(deck => res.json(deck));
    })
    .catch(err => res.status(404).json({ noDeck: 'No deck found' }));
});

// @route    DELETE api/decks/comment/:id/:comment_id
// @desc     Remove comment from deck
// @access   Private
router.delete('/comment/:id/:comment_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Deck.findById(req.params.id)
    .then((deck) => {
      // Check to see if comment exists
      if (deck.comments.filter(comment => comment._id.toString() === req.params.comment_id).length === 0) {
        return res.status(404).json({ noComment: 'Comment does not exist' });
      }

      // Get remove index
      const removeIndex = deck.comments
        .map(item => item._id.toString())
        .indexOf(req.params.comment_id);

      // Splice out of array
      deck.comments.splice(removeIndex, 1);

      // Save
      deck
        .save()
        .then(() => res.json({ success: true }));
    })
    .catch(err => res.status(404).json({ noDeck: 'No deck found' }));
});

// @route    POST api/decks/cards/:id
// @desc     Add cards to deck
// @access   Private
router.post('/cards/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Deck.findById(req.params.id)
    .then((deck) => {
      deck.cards = req.body.cards;

      deck
        .save()
        .then(deck => res.json(deck));
    })
    .catch(err => res.status(404).json({ noDeck: 'No deck found' }));
});

module.exports = router;
