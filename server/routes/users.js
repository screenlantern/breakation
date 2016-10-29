'use strict';

const Boom = require('boom');
const uuid = require('node-uuid');
const Joi = require('joi');

exports.register = function(server, options, next) {

  const db = server.app.db;

  server.route({
    method: 'GET',
    path: '/users',
    handler: function (request, reply) {

        db.users.find((err, docs) => {

            if (err) {
                return reply(Boom.wrap(err, 'Internal MongoDB error'));
            }

            reply(docs);
        });

    }
  });

  server.route({
    method: 'GET',
    path: '/users/{id}',
    handler: function (request, reply) {

        db.books.findOne({
            _id: request.params.id
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
  });

  server.route({
    method: 'POST',
    path: '/users',
    handler: function (request, reply) {

        const user = request.payload;

        //Create an id
        user._id = uuid.v1();

        db.users.save(user, (err, result) => {

            if (err) {
                return reply(Boom.wrap(err, 'Internal MongoDB error'));
            }

            reply(user);
        });
    },
    config: {
        validate: {
            payload: Joi.object({
                username: Joi.string().trim().min(5).max(50).required(),
                email: Joi.string().email().trim().required(),
                avatar: Joi.string().trim().min(8).max(100),
                hashed_password: Joi.string()
            })
        }
    }
  });

  server.route({
    method: 'PATCH',
    path: '/users/{id}',
    handler: function (request, reply) {
      db.users.update({
            _id: request.params.id
        }, {
            $set: request.payload
        }, function (err, result) {

            if (err) {
                return reply(Boom.wrap(err, 'Internal MongoDB error'));
            }

            if (result.n === 0) {
                return reply(Boom.notFound());
            }

            reply().code(204);
        });
    },
    config: {
        validate: {
            payload: Joi.object({
                username: Joi.string().trim().min(5).max(50).required(),
                email: Joi.string().email().trim().required(),
                avatar: Joi.string().trim().min(8).max(100),
                hashed_password: Joi.string()
            }).required().min(1)
        }
    }
  });


  return next();
};

exports.register.attributes = {
  name: 'routes-users'
};
