const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const cors = require("cors");


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    origin:"http://127.0.0.1:3000",
    // credentials:true
}))


require("./connection/conection");

// FUCTIONs

const signup = require("./db_functions/signup");

// const mailer = require("./dlt");

const login = require("./general_functions/login");

const otp_verification = require("./db_functions/otp_verification");




app.post("/signup",signup);

// app.post("/addcomments",addcomments);

// app.post("/getcomments",getcomments);

// app.post("/dlt",mailer);

app.post("/otp_verification",otp_verification);

app.get("/login",login);





// function verifyToken(req,resp,next){
//     const bearerHeader = req.headers('authorization');
//     if(typeof bearerHeader !== 'undefined'){
//         const bearerHeader = bearerHeader.split(" ");
//         const token = bearer[1];
//         req.token = token;
//         next();
//     }else{
//         resp.send({
//             result:'Token is not valid'
//         })
//     }
// }



// app.post("/profile",verifyToken,(req,resp) => {
//     jwt.verify(req.token,secretKey,(err,authData)=>{
//     if(err){
//         resp.send({result:'invalid token'})
//     }else{
//         resp.json({
//             message: "profile accessed",
//             authData
//         })
//     }
//   })
// })





app.listen(7000,()=>{
    console.log("Listening on 7000");
})