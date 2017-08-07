'use strict';
const mongojs = require('mongojs');
const uuid = require('node-uuid');
const JWT = require('jsonwebtoken');
const Boom = require('boom');
const redis = require('redis');

const redisClient = redis.createClient();
const db = mongojs('breakation', ['users']);

function AuthenticateCtrl() {
}

AuthenticateCtrl.prototype.login = (request, reply) => {

    let session = { //Session Payload
        valid: true,
        id: uuid.v1(),
        userid: request.pre.user._id,
        exp: new Date().getTime() + 60 * 60 * 1000
    };

    redisClient.set(session.id, JSON.stringify(session));

    let token = JWT.sign(session, process.env.JWT_SECRET); // synchronous
    console.log(token);
    // console.log(request.pre.user._id);

    reply({
        message: 'Check Auth Header for your Token'
    })
        .header("Authorization", token);

};

AuthenticateCtrl.prototype.verify = (request, reply) => {

    JWT.verify(request.payload.token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) throw err;
        db.users.findOne({
            _id: decoded.userid
        }, (err, doc) => {

            if (doc) {

                reply(doc);

            } else {
                reply(Boom.badrequest('No Valid Token'));
            }
        });

    });
};

module.exports = new AuthenticateCtrl();