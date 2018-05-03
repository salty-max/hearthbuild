const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');


const keys = require('../../config/keys');
const User = require('../../models/User');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

const router = express.Router();

// @route    GET api/users/test
// @desc     Test users route
// @access   Public
router.get('/test', (req, res) => res.json({
  msg: 'Users works',
}));

// @route    POST api/users/register
// @desc     Register a user
// @access   Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        return res.status(400).json({ error: 'Email already exists' });
      }

      const avatar = gravatar.url(req.body.email, {
        s: '200', // Size
        r: 'pg', // Rating
        default: 'retro',
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(userReady => res.json(userReady))
            .catch(e => console.log(e));
        });
      });
    });
});

// @route    POST api/users/login
// @desc     Login user
// @access   Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email, password } = req.body;

  // Find user by Email
  User.findOne({ email })
    .then((user) => {
      // Check for user
      if (!user) {
        errors.email = 'User not found';
        return res.status(404).json(errors);
      }

      // Check password
      bcrypt.compare(password, user.password)
        .then((isMatch) => {
          if (isMatch) {
            // User matched
            const payload = {
              id: user.id,
              name: user.name,
              avatar: user.avatar,
            }; // Create jwt_payload

            // Sign token
            jwt.sign(payload, keys.secretOrKey, {
              expiresIn: 86400,
            }, (err, token) => {
              res.json({
                success: true,
                token: `Bearer ${token}`,
              });
            });
          }
          else {
            errors.password = 'Password incorrect';
            return res.status(400).json(errors);
          }
        });
    });
});

// @route    GET api/users/current
// @desc     Return current user
// @access   Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
    avatar: req.user.avatar,
  });
});

// @route    GET api/users/id/:id
// @desc     Get user by ID
// @access   Public
router.get('/id/:id', (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) => {
      res.json(user);
    })
    .catch(err => res.status(404).json({ noUser: 'No user found with this id' }));
});

module.exports = router;
