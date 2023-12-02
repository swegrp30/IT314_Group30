let chai = require("chai");
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);
// console.log("Hello");
describe("Testing of get user", () => {
  const host = 'http://localhost:7000';
  const path = '/getuser';

  it("With All valid Credentials", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        data:"zeel",
      })
      .end(function (err, res, body) {
        

        res.status.should.equal(200);
        done();
      });
  });
  it("With Invalid Credentials", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        data:"Zeel",
      })
      .end(function (err, res, body) {
        

        res.status.should.equal(404);
        done();
      });
  });
//   it("With  Invalid Credentials", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: "omkumarnileshkumargor@gmail.com",
//         password: "!Q@W4r",
//       })
//       .end(function (err, res, body) {
        

//         res.status.should.equal(211);
//         done();
//       });
//   });
  
//   it("With All Invalid Credentials", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: "omkumarnil123eshkumargor@gmail.com",
//         password: "!Q@W3]e4r",
//       })
//       .end(function (err, res, body) {
        

//         res.status.should.equal(404);
//         done();
//       });
//   });
});