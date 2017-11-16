'use strict';
const test = require('ava');
const server = require('../server');


let _token;
//authenticate.js
test.beforeEach((done) => {
    const request = {
        method: 'POST',
        url: '/api/auth/login',
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

const request = function (method) {
    return {
        method: method,
        url: '/api/users'
    };
};

test('GET api/users | should return status code 200', t => {
    const request = Object.assign({}, request('GET'), {
        headers: {
            'Authorization': _token
        }
    });
    return server.inject(request)
        .then(response => {
            console.log(request);
            t.is(response.statusCode, 200, 'status code is 200');
        });
});

test('POST api/user | should return status code 200', t => {
    const request = Object.assign({}, request('POST'), {
            "email": "test@gmail.com",
            "firstname": "test",
            "lastname": "case"
    });
});