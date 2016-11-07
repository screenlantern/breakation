'use strict';

const Boom = require('boom');
const uuid = require('node-uuid');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const verifyUniqueUser = require('../utils/user_functions').verifyUniqueUser;

const schema = {
  username: Joi.string().trim().min(5).max(50).required(),
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
    handler: function (req, res) {
      db.users.find((err, doc) => {

          if (err) {
              return reply(Boom.wrap(err, 'Internal MongoDB error'));
          }

          res(doc);
      });

    }
  });

  server.route({
    method: 'GET',
    path: '/api/users/{id}',
    handler: function (req, res) {

        db.users.findOne({
            _id: req.params.id
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
  });

  server.route({
    method: 'POST',
    path: '/api/users',
    handler: function (req, res) {

        const user = req.payload;

        //Create an id
        user._id = uuid.v1();

        db.users.save(user, (err, result) => {

            if (err) {
                return res(Boom.wrap(err, 'Internal MongoDB error'));
            }

            res(user);
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
    handler: function (req, res) {
      db.users.update({
            _id: req.params.id
        }, {
            $set: req.payload
        }, function (err, result) {

            if (err) {
                return res(Boom.wrap(err, 'Internal MongoDB error'));
            }

            if (result.n === 0) {
                return res(Boom.notFound());
            }

            res().code(204);
        });
    },
    config: {
        validate: {
            payload: Joi.object(schema).required().min(1)
        }
    }
  });

  server.route({
    method: 'POST',
    path: '/api/createadmin',
    handler: function (req, res) {

        const user = req.payload;

        //Create an id
        user._id = uuid.v1();

        hashPassword(req.payload.password, (err, hash) => {

          if (err) {throw Boom.badRequest(err);}

          user.password = hash;

          db.users.save(user, (err, result) => {

              if (err) {
                  return res(Boom.wrap(err, 'Internal MongoDB error'));
              }

              res(user);
          });

        });

    },
    config: {
        validate: {
            payload: Joi.object(schema)
        }
    }
  });


  return next();
};

exports.register.attributes = {
  name: 'routes-users'
};
