'use strict';
const Boom = require('boom');
const uuid = require('node-uuid');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const verifyUniqueUser = require('../utils/user_functions').verifyUniqueUser;
const verifyCredentials = require('../utils/user_functions').verifyCredentials;

const schema = {
  username: Joi.string().trim().min(5).max(50),
  email: Joi.string().email().trim().required(),
  avatar: Joi.string().trim().min(8).max(100),
  password: Joi.string().trim().required(),
  admin: Joi.boolean().required()
};

const hashPassword = (password, cb) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      return cb(err, hash);
    });
  })
}

exports.register = function(server, options, next) {

  const db = server.app.db;

  server.route({
    method: 'GET',
    path: '/api/users',
    handler: (request, reply) => {
      db.users.find((err, doc) => {

          if (err) {
              return reply(Boom.boomfy(err));
          }

          reply(doc);
      });

    }
  });

  server.route({
    method: 'GET',
    path: '/api/users/{id}',
    handler: (request, reply) => {

        db.users.findOne({
            _id: request.params.id
        }, (err, doc) => {

            if (err) {
                return request(Boom.boomify(err));ß
            }

            if (!doc) {
                return request(Boom.notFound());
            }

            reply(doc);
        });

    }
  });

  server.route({
    method: 'POST',
    path: '/api/users',
    handler: (request, reply) => {

        const user = request.payload;

        //Create an id
        user._id = uuid.v1();

        db.users.save(user, (err, result) => {

            if (err) {
                return reply(Boom.boomify(err));
            }

            reply(user);
        });
    },
    config: {
        validate: {
            payload: Joi.object(schema)
        }
    }
  });

  server.route({
    method: 'PATCH',
    path: '/api/users/{id}',
    handler: (request, reply) => {
      db.users.update({
            _id: request.params.id
        }, {
            $set: request.payload
        }, function (err, result) {

            if (err) {
                return reply(Boom.boomify(err));
            }

            if (result.n === 0) {
                return reply(Boom.notFound());
            }

            reply().code(204);
        });
    },
    config: {
        pre: [
          {method: verifyCredentials}
        ],
        validate: {
            payload: Joi.object(schema).required().min(1)
        }
    }
  });

  server.route({
    method: 'POST',
    path: '/api/createadmin',
    handler: (request, reply) => {

        const user = request.payload;

        //Create an id
        user._id = uuid.v1();

        hashPassword(request.payload.password, (err, hash) => {

          if (err) {throw Boom.badRequest(err);}

          user.password = hash;

          db.users.save(user, (err, result) => {

              if (err) {
                  return reply(Boom.boomify(err));
              }

              reply(user);
          });

        });

    },
    config: {
        validate: {
            payload: Joi.object(schema)
        },
        auth: false
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'routes-users'
};
