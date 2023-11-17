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




const auth = require("./middleware/auth");



// FUCTIONs

const signup = require("./db_functions/signup");

// const mailer = require("./dlt");

const login = require("./general_functions/login");

const otp_verification = require("./db_functions/otp_verification");

const addFavourite = require("./general_functions/addFav");

const deleteFav = require("./general_functions/deleteFav");




app.post("/signup",signup);

// app.post("/addcomments",addcomments);

// app.post("/getcomments",getcomments);

// app.post("/dlt",mailer);

app.post("/otp_verification",otp_verification);

app.get("/login",login);

app.post("/add-fav",auth,addFavourite);

app.post("/del-fav",auth,deleteFav);










app.listen(7000,()=>{
    console.log("Listening on 7000");
})