'use strict';
const bcrypt = require('bcrypt');
const mongojs = require('mongojs');
const JWT = require('jsonwebtoken');

const db = mongojs('breakation', ['users']);

function verifyUniqueUser(req, res) {
  db.users.findOne({
      $or:[
        {'username': req.payload.username},
        {'email': req.payload.email}
      ]
  }, (err, doc) => {

      if (err) {
          return res(Boom.wrap(err, 'Internal MongoDB error'));
      }

      if (!doc) {
          return res(Boom.notFound());
      }

      res(doc);
  });
}

function verifyCredentials() {
  db.users.findOne({
    $or:[
      {'username': req.payload.username},
      {'email': req.payload.email}
    ]
  }, (err, user) => {
    if (user) {
      bcrypt.compare(req.payload.password, user.password, (err, isValid) => {
        if (isValid) {
          res(user);
        }
        else {
          res(Boom.badRequest('Incorrect password!'));
        }
      });
    } else {
      res(Boom.badRequest('Incorrect username or email!'));
    }
  });
}

module.exports = {
  verifyUniqueUser: verifyUniqueUser,
  verifyCredentials: verifyCredentials
}
