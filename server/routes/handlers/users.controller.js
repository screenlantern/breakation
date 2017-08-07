'use strict';
const mongojs = require('mongojs');
const Boom = require('boom');
const uuid = require('node-uuid');
const userModel = require('../../models/user.model');

const db = mongojs('breakation', ['users']);

function UserCtrl() {
}

UserCtrl.prototype.findAll = (request, reply) => {
    db.users.find((err, doc) => {

        if (err) {
            return reply(Boom.boomify(err));
        }

        reply(doc);
    });
};

UserCtrl.prototype.findById = (request, reply) => {
    db.users.findOne({
        _id: request.params.id
    }, (err, doc) => {

        if (err) {
            return request(Boom.boomify(err));
        }

        if (!doc) {
            return request(Boom.notFound());
        }

        reply(doc);
    });
};

UserCtrl.prototype.save = (request, reply) => {
    const user = request.payload;

    //Create an id
    user._id = uuid.v1();

    userModel.hashPassword(request.payload.password, (err, hash) => {

        if (err) {
            throw Boom.badRequest(err);
        }

        user.password = hash;

        db.users.save(user, (err, result) => {

            if (err) {
                console.log(Boom.boomify(err));

                if (err.name === 'MongoError' && err.code === 11000) {
                    let isUsername = err.message.split(' ').includes('username_1');
                    let msg = (isUsername) ? 'Username already exist' : 'Email already exist';
                    return reply(Boom.create(409, msg));
                }

                return reply(Boom.boomify(err));
            }
            reply(user);
        });
    });
};

UserCtrl.prototype.update = (request, reply) => {
    db.users.update({
        _id: request.params.id
    }, {
        $set: request.payload
    }, function (err, result) {

        if (err) {
            return reply(Boom.boomify(err));
        }

        if (result.n === 0) {
            return reply(Boom.notFound());
        }

        reply().code(204);
    });
};

module.exports = new UserCtrl();
