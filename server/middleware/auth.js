const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.header("auth-token");
        // console.log(token);
        const data = jwt.verify(token, process.env.JWT_KEY);
        req.userData = data
        // console.log(data);
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};


module.exports = auth;