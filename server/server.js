'use strict';
require('env2')('.env');
const Hapi = require('hapi');
const CorsHeaders = require('hapi-cors-headers');
const mongojs = require('mongojs');
const redis = require('redis');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  port: 9000
});

server.app.db = mongojs('breakation', ['users']);
server.app.redisClient = redis.createClient();

const validate = function(decoded, request, callback) {
  const redisClient = server.app.redisClient;
  console.log(decoded);
  redisClient.get(decoded.id, function (rediserror, reply) {
    console.log(JSON.parse(reply));
     if(reply){
        return callback(rediserror, true);
      }else{
        return callback(rediserror, false);
      }  
  });
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
