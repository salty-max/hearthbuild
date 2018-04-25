const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const User = require('../../models/User');
const validateRegisterInput = require('../../validation/register');

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

module.exports = router;
