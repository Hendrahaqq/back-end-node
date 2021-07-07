const server = require('../index')
const chai = require('chai')
let chaiHttp = require('chai-http')

chai.should()
chai.use(chaiHttp)

describe('GET /get', function() {
    it('returns a list of image', function(done) {
      chai.request(server)
        .get('/get')
        .end(function(err, res) {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.not.be.eq(0);
          done();
        });
    });
  });