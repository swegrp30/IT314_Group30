const { configDotenv } = require('dotenv');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const otpGenerator = require('otp-generator')




require('dotenv').config();



const mailTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: '587',
    // secure:'true', 
    auth: {
        user: process.env.MAIL,
        pass: process.env.PSWD
    }
});



mailTransporter.verify((error, success) => {
    if (error) console.log(error);
    console.log("Server is ready to take our messages");
});

mailTransporter.use('compile', hbs({
    viewEngine: {
        extname: '.hbs',
        layoutsDir: './mailer/',
        defaultLayout: false,
        partialsDir: './mailer/',
    }, viewPath: './mailer/', extName: '.hbs'
}));



// let mailDetails = {
//     from: 'PayProtect',
//     to: '',
//     subject: '',
//     template: 'product_confirmation_template',
//     context: {
//         name: 'Anonymous Coder', products: products,
//     }
// };


const login = (async (name, username, email) => {

    const date = new Date();
    const dateTime = date.toLocaleString("en-IN");
    const istDateTime = new Date(dateTime).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    console.log(istDateTime);

    const data = {
        name: username,
        time: istDateTime,
    }
    console.log(email);
    let mailDetails = {
        from: 'Stock Market',
        to: email,
        subject: 'Account Login Notification',
        template: 'login',
        context: {
            demo: data,
        }
    };

    const s = await mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log('Error Occurs');
            console.log(err);
        } else {
            console.log('Email sent successfully');
        }
    });
})


const signup = (async (mail, otp) => {

    const data = {
        otp: otp
    }


    let mailDetails = {
        from: 'Stock Market',
        to: mail,
        subject: 'SSS',
        template: 'otp',
        context: {
            demo: data,
        }
    };


    console.log(otp);


    // mailDetails.context.demo=data;

    const s = await mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log('Error Occurs');
            console.log(err);
        } else {
            console.log('Email sent successfully');
        }
    });
    // console.log("oooo");
})


const forgotPassword = (async (username, email, otp) => {

    const data = {
        name: username,
        otp : otp,
    }
    console.log(email);
    let mailDetails = {
        from: 'Stock Market',
        to: email,
        subject: 'Password Reset',
        template: 'forgotPassword',
        context: {
            demo: data,
        }
    };

    const s = await mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log('Error Occurs');
            console.log(err);
        } else {
            console.log('Email sent successfully');
        }
    });
})


module.exports = { signup, login ,forgotPassword};