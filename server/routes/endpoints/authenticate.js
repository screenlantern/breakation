'use strict';
const verifyCredentials = require('../../utils/user.utils').verifyCredentials;
const authenticate = require('../handlers/athenticate.controller');
const authenticateModel = require('../../models/authenticate.model');
const Joi = require('joi');

exports.register = function(server, options, next) {

  server.route({
    method: 'POST',
    path: '/api/auth/login',
    config: {
      auth: false,
      pre: [
        {method: verifyCredentials, assign: 'user' }
      ],
      handler: authenticate.login,
      validate:{
        payload: Joi.object(authenticateModel.schema)
      }
    }
  });

  server.route({
    method: 'POST',
    path: '/api/auth/verifyToken',
    handler: authenticate.verify
  });

  return next();

};

exports.register.attributes = {
  name: 'authenticate'
};