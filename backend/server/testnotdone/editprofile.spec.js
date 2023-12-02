let chai = require("chai");
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);
describe("Testing of Edit Profile Page", () => {
  const host = 'http://localhost:7000';
  const path = '/editProfile';
  
  it("With All Valid Credentials", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        name: "Darshana",
        phone: "9408997272",
        email: "202101467@daiict.ac.in",
        password: "Tappy",
        username: "Darshana",
        gender:"Female",
        city:"Rajkot",
        state:"Gujarat",
        country:"India",
        pincode:"360006",
        occupation:"Student",
        dob:"20/07/2003"
      })
      .end(function (err, res, body) {
        

        res.status.should.equal(200);
        done();
      });
  });

//   it("With Invalid Credentials", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: "Darshana",
//         phone: "9408997272",
//         email: "1234@daiict.ac.in",
//         password: "Tappy",
//         username: "Darshana",
//         gender:"Female",
//         city:"Rajkot",
//         state:"Gujarat",
//         country:"India",
//         pincode:"360006",
//         occupation:"Student",
//         dob:"20/07/2003"
//       })
//       .end(function (err, res, body) {
        

//         res.status.should.equal(399);
//         done();
//       });

//  });
  
});