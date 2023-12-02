let chai = require("chai");
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);
describe("Testing of OTP Verification", () => {
  const host = 'http://localhost:7000';
  const path = '/otp_verification';
  
  it("With Valid Credential", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        email: "tappy3002@gmail.com",
        otp_number:"245226"
      })
      .end(function (err, res, body) {
        

        res.status.should.equal(500);
        done();
      });
  });

//   it("With Invalid Credential", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: "1234@daiict.ac.in",
//         otp_number:"265226"
//       })
//       .end(function (err, res, body) {
        

//         res.status.should.equal(288);
//         done();
//       });

//   });
  
});