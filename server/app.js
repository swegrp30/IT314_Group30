const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const cors = require("cors");


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())


require("./connection/conection");




const auth = require("./middleware/auth");



// FUCTIONs

const signup = require("./db_functions/signup");

// const mailer = require("./dlt");

const login = require("./general_functions/login");

const otp_verification = require("./db_functions/otp_verification");

const addFavourite = require("./general_functions/addFav");

const deleteFav = require("./general_functions/deleteFav");

const addComments = require("./general_functions/addcomments");

const getComments = require("./general_functions/getcomments");

const myComments = require("./general_functions/myComments");

const deleteComments = require("./general_functions/deleteComments");

const addReplytoComment = require("./general_functions/addReplytoComment");

const changePassword = require("./db_functions/changePassword");

const forgotPassword = require("./db_functions/forgotPassword");

const updatePassword = require("./db_functions/updatePassword");

const verifyEmail = require("./db_functions/verifyEmail");







app.post("/signup",signup);

app.post("/otp_verification",otp_verification);

app.post("/login",login);

app.post("/add-fav",auth,addFavourite);

app.post("/del-fav",auth,deleteFav);

app.post("/addComments",auth,addComments);

app.get("/getComments",auth,getComments);

app.get("/myComments",auth,myComments);

app.get("/dltComments",auth,deleteComments);

app.post("/addReply",auth,addReplytoComment);

app.post("/changePassword",auth,changePassword);

app.post("/forgotPassword",forgotPassword);

app.post("/updatePassword",updatePassword);

app.post("/verifyEmail",verifyEmail);




// app.post("/dlt",mailer);






app.listen(7000,()=>{
    console.log("Listening on 7000");
})