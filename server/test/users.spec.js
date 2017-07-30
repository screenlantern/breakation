'use strict';
const test = require('ava');
const server = require('../server');


let _token;
//authenticate.js
test.beforeEach((done) => {
    const request = {
        method: 'POST',
        url: '/api/users/login',
        payload: {
            "username": "screenlantern",
            "email": "screenlantern@gmail.com",
            "password": "oliveoi1"
        }
    };
    return server.inject(request)
        .then(response => {
            _token = response.raw.res._headers.authorization;
        });
});

const requestGet = {
    method: 'GET',
    url: '/api/users'
};

test('GET api/users | should return status code 200', t => {
    const request = Object.assign({}, requestGet, { headers: { 'Authorization': _token } });
    return server.inject(request)
        .then(response => {
            console.log(_token);
            console.log(request);
            t.is(response.statusCode, 200, 'status code is 200');
        });
});
