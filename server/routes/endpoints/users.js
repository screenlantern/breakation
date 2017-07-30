'use strict';
const Joi = require('joi');
const verifyCredentials = require('../../utils/user.utils').verifyCredentials;
const users = require('../controllers/users.controller');
const userModel = require('../../models/user.model');

exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/api/users',
        handler: users.findAll
    });

    server.route({
        method: 'GET',
        path: '/api/users/{id}',
        handler: users.findById
    });

    server.route({
        method: 'POST',
        path: '/api/users',
        handler: users.save,
        config: {
            validate: {
                payload: Joi.object(userModel.schema)
            },
            auth: false
        }
    });

    server.route({
        method: 'PATCH',
        path: '/api/users/{id}',
        handler: users.update,
        config: {
            pre: [
                {method: verifyCredentials}
            ],
            validate: {
                payload: Joi.object(userModel.schema).required().min(1)
            }
        }
    });


    return next();
};

exports.register.attributes = {
    name: 'users'
};
