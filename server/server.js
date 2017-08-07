'use strict';
require('dotenv').config();
const Hapi = require('hapi');
const CorsHeaders = require('hapi-cors-headers');
const redis = require('redis');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    port: 9000
});

const validate = function (decoded, request, callback) {
    const redisClient = redis.createClient();

    redisClient.get(decoded.id, function (rediserror, reply) {
        const session = JSON.parse(reply);
        if (session.valid === true) {
            return callback(rediserror, true);
        } else {
            return callback(rediserror, false);
        }
    });
};

//Load plugins and start server
server.register(require('hapi-auth-jwt2'), (err) => {

    server.auth.strategy('jwt', 'jwt', 'required', {
        key: process.env.JWT_SECRET,
        validateFunc: validate,
        verifyOptions: {algorithms: ['HS256']}
    });

    server.register([
        require('./routes/endpoints/authenticate'),
        require('./routes/endpoints/users')
    ], (err) => {

        if (err) {
            throw err;
        }

    });
});

// Enable Cors & Start the server
server.ext('onPreResponse', CorsHeaders);

if (!module.parent) {
    server.start((err) => {
        if (err) {throw err;}
        console.log('Started at:', server.info.uri);
    });
}

module.exports = server;
