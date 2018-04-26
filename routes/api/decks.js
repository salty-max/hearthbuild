const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const Deck = require('../../models/Deck');
const User = require('../../models/User');

const router = express.Router();

// @route    GET api/decks/slug/:slug
// @desc     Get deck by slug
// @access   Public
router.get('/slug/:slug', (req, res) => {
  const errors = {};

  Deck.findOne({ slug: req.params.slug })
    .populate('author', ['name', 'avatar'])
    .then((deck) => {
      if (!deck) {
        errors.noDeck = 'No deck found';
        res.status(404).json(errors);
      }

      res.json(deck);
    })
    .catch(err => res.status(404).json(err));
});

// @route    GET api/decks/id/:id
// @desc     Get deck by ID
// @access   Public
router.get('/id/:id', (req, res) => {
  const errors = {};

  Deck.findOne({ id: req.params.id })
    .populate('author', ['name', 'avatar'])
    .then((deck) => {
      if (!deck) {
        errors.noDeck = 'No deck found';
        res.status(404).json(errors);
      }

      res.json(deck);
    })
    .catch(err => res.status(404).json(err));
});

// @route    POST api/decks/
// @desc     Create & update deck
// @access   Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {

  const { errors: isValid } = validateDeckBuilderInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const deckFields = {};

  // Get current user
  deckFields.author = req.user.id;

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

module.exports = router;
