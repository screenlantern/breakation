'use strict';
const redis = require('redis');
const Boom = require('boom');
const uuid = require('node-uuid');
const Joi = require('joi');
const JWT = require('jsonwebtoken');
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

  server.route({
    method: 'POST',
    path: '/api/users/login',
    config: {
      auth: false,
      pre: [
        {method: verifyCredentials, assign: 'user' }
      ],
      handler: (request, reply) => {

        let session ={  //Session Payload
          valid: true,
          id: uuid.v1(),
          userid: request.pre.user.id,
          exp: new Date().getTime() +  60 * 60 * 1000
        }

        redisClient.set(session.id, JSON.stringify(session));

        var token = JWT.sign(session, process.env.JWT_SECRET); // synchronous
        console.log(token);

        reply({message: 'Check Auth Header for your Token', token: token})
        .header("Authorization", token);


      },
      validate:{
        payload: schema
      }
    }
  });

  return next();

};

exports.register.attributes = {
  name: 'routes-authenticate'
};
