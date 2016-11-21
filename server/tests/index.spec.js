'use strict';
const lab = exports.lab = require('lab').script();
const chai = require('chai');

// prepare environment
global.expect = chai.expect;
global. it = lab.it;
global.describe = lab.describe;
global.before = lab.before;
global.beforeEach = lab.beforeEach;

global.server = require('../server');
global.db = global.server.app.db;

global.before((done) => {
  global.db['users'].on('connected', () => {
    done();
  })
});
