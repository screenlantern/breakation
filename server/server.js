'use strict';

const Hapi = require('hapi');
const CorsHeaders = require('hapi-cors-headers');
const mongojs = require('mongojs');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  port: 3000
});

server.app.db = mongojs('breakation', ['users']);

//Load plugins and start server
server.register([
  require('./routes/users')
], (err) => {

  if (err) {
    throw err;
  }

});

// Start the server
server.ext('onPreResponse', CorsHeaders);
server.start((err) => console.log('Started at:', server.info.uri));
