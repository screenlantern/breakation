'use strict';
const Joi = require('joi');
const bcrypt = require('bcrypt');

class User {
    constructor() {
        this.schema = {
            username: Joi.string().trim().min(5).max(50),
            email: Joi.string().email().trim().required(),
            avatar: Joi.string().trim().min(8).max(100),
            password: Joi.string().trim().required(),
            admin: Joi.boolean().required()
        };
    }

    hashPassword(password, cb) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                return cb(err, hash);
            });
        })
    };

}

const user = new User();
module.exports = user;

