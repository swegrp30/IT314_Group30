let chai = require("chai");
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);
// console.log("Hello");
describe("Testing of Login", () => {
  const host = 'http://localhost:7000';
  const path = '/login';

  it("Admin With All valid Credentials", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        email: "omkumarnileshkumargor@gmail.com",
        password: "!Q@W3e4r",
      })
      .end(function (err, res, body) {
        

        res.status.should.equal(200);
        done();
      });
  });
  it("Admin with Invalid Credentials", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        email: "omkumarleshkumargor@gmail.com",
        password: "!Q@W3e4r",
      })
      .end(function (err, res, body) {
        

        res.status.should.equal(404);
        done();
      });
  });
  it("Admin With  Invalid Credentials", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        email: "omkumarnileshkumargor@gmail.com",
        password: "!Q@W4r",
      })
      .end(function (err, res, body) {
        

        res.status.should.equal(211);
        done();
      });
  });
  
  it("Admin With All Invalid Credentials", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        email: "omkumarnil123eshkumargor@gmail.com",
        password: "!Q@W3]e4r",
      })
      .end(function (err, res, body) {
        

        res.status.should.equal(404);
        done();
      });
  });
});