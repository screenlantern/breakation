'use strict';

const Hapi = require('hapi');
const mongojs = require('mongojs');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  port: 3000
});

server.app.db = mongojs('holidaynext', ['users']);

//Load plugins and start server
server.register([
  require('./routes/users')
], (err) => {

  if (err) {
    throw err;
  }

  // Start the server
  server.start((err) => {
    console.log('Server running at:', server.info.uri);
  });

});
