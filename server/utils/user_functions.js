'use strict';
const mongojs = require('mongojs');
const db = mongojs('breakation', ['users']);

function verifyUniqueUser(req, res){
  db.users.findOne({
      $or:[
        {'username': req.payload.username},
        {'email': req.payload.email}
      ]
  }, (err, doc) => {

      if (err) {
          return res(Boom.wrap(err, 'Internal MongoDB error'));
      }

      if (!doc) {
          return res(Boom.notFound());
      }

      res(doc);
  });
}

module.exports = {
  verifyUniqueUser: verifyUniqueUser
}
