'use strict';
const redis = require('redis');
const Boom = require('boom');
const uuid = require('node-uuid');
const Joi = require('joi');
const verifyCredentials = require('../utils/user_functions').verifyCredentials;

const redisClient = redis.createClient();
redisClient.set("string key", "string val", redis.print);

const schema = {
  username: Joi.string().trim().min(5).max(50).required(),
  email: Joi.string().email().trim().required(),
  password: Joi.string().trim().required()
};


exports.register = function(server, options, next) {
  const db = server.app.db;

  server.register({
    method: 'POST',
    path: '/api/users/login',
    config: {
      pre: [
        {method: verifyCredentials, assign: 'user' }
      ],
      handler: (req, res) => {

      },
      validate:{
        payload: schema
      }
    }
  })
}

exports.register.attributes = {
  name: 'routes-authenticate'
};
