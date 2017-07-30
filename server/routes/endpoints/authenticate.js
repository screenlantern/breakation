'use strict';
const verifyCredentials = require('../../utils/user.utils').verifyCredentials;
const authenticate = require('../controllers/athenticate.controller');
const authenticateModel = require('../../models/authenticate.model');

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
        payload: authenticateModel.schema
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