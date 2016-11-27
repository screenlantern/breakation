'use strict';
const bcrypt = require('bcrypt');
const mongojs = require('mongojs');


const db = mongojs('breakation', ['users']);

function verifyUniqueUser(request, reply) {
  db.users.findOne({
      $or:[
        {'username': request.payload.username},
        {'email': request.payload.email}
      ]
  }, (err, doc) => {

      if (err) {
          return reply(Boom.wrap(err, 'Internal MongoDB error'));
      }

      if (!doc) {
          return reply(Boom.notFound());
      }

      reply(doc);
  });
}

function verifyCredentials(request, reply) {
  db.users.findOne({
    $or:[
      {'username': request.payload.username},
      {'email': request.payload.email}
    ]
  }, (err, user) => {
    if (user) {
      bcrypt.compare(request.payload.password, user.password, (err, isValid) => {
        if (isValid) {
          reply(user);
        }
        else {
          reply(Boom.badrequest('Incorrect password!'));
        }
      });
    } else {
      reply(Boom.badrequest('Incorrect username or email!'));
    }
  });
}

module.exports = {
  verifyUniqueUser: verifyUniqueUser,
  verifyCredentials: verifyCredentials
}
