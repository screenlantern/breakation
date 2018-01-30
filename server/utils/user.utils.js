'use strict';
const bcrypt = require('bcrypt');
const mongojs = require('mongojs');
const Boom = require('boom');

const api_key = 'key-2a113c3e7cdbb052c79c5c1808574a43';
const domain = 'sandbox6a71e217344b4d53bebc831df4a06ff2.mailgun.org';
const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});


const db = mongojs('breakation', ['users']);

function verifyUniqueUser(request, reply) {
  db.users.findOne({
      $or:[{'email': request.payload.email},
        {'username': request.payload.username}
      ]
  }, (err, doc) => {

      if (err) {
          return reply(Boom.boomify(err));
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
        {'email': request.payload.email},
        {'username': request.payload.username}
    ]
  }, (err, user) => {
    if (user) {
      bcrypt.compare(request.payload.password, user.password, (err, isValid) => {
        if (isValid) {
          reply(user);
        }
        else {
          reply(Boom.badRequest('Incorrect password!'));
        }
      });
    } else {
      reply(Boom.badRequest('Incorrect username or email!'));
    }
  });
}

function sendMail(data) {
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
}

module.exports = {
   verifyUniqueUser,
   verifyCredentials,
   sendMail
};
