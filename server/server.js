'use strict';
require('env2')('.env');
const Hapi = require('hapi');
const CorsHeaders = require('hapi-cors-headers');
const mongojs = require('mongojs');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  port: 3000
});

server.app.db = mongojs('breakation', ['users']);

let validate = function() {

}

//Load plugins and start server
server.register(require('hapi-auth-jwt2'), (err) => {

  server.auth.strategy('jwt', 'jwt', 'required', {
    key: process.env.JWT_SECRET,
    validateFunc: validate,
    verifyOptions: { algorithms: ['HS256'] }
  });

  server.register([
    require('./routes/authenticateUsers'),
    require('./routes/users')
  ], (err) => {

    if (err) {
      throw err;
    }

  });
});


// Enable Cors & Start the server
server.ext('onPreResponse', CorsHeaders);
server.start((err) => console.log('Started at:', server.info.uri));

module.exports = server;
