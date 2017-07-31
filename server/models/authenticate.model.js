'use strict';
const Joi = require('joi');

class Authenticate {
    constructor() {
        this.schema = {
            username: Joi.string().trim().min(5).max(50),
            email: Joi.string().email().trim().required(),
            password: Joi.string().trim().required()
        };
    }

}

module.exports = new Authenticate();