let chai = require("chai");
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);
describe("Testing of Verify Email", () => {
  const host = 'http://localhost:7000';
  const path = '/verifyEmail';
  
  it("With Valid Credential", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        email: "202101467@daiict.ac.in"
      })
      .end(function (err, res, body) {
        

        res.status.should.equal(222);
        done();
      });
  });

  it("With Invalid Credential", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        email: "1234@daiict.ac.in"
      })
      .end(function (err, res, body) {
        

        res.status.should.equal(200);
        done();
      });

  });
  
});