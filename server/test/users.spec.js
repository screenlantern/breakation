
describe('Routes /users', () => {

  let token;
  //authenticate
  before((done) => {
    let options = {
      method: 'POST',
      url: 'api/users/login',
      payload: {
       "username":"screenlantern",
       "email":"screenlanter@gmail.com",
       "password":"oliveoi1"
     }
    };
    server.inject(options, (response) => {
      token = response.result.token;
      done();
    });
  });

  describe('GET api/users', () => {

    it('should return status code 200', (done) => {
      let options = {

      }
      server.inject(options, (response) => {
        done();
      });

    });

  })

});
