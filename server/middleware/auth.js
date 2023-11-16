const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//     try {
//         const token = req.headers.authorization.split(" ")[1];
        // req.userData = jwt.verify(token, process.env.JWT_KEY);
//         next();
//     } catch (error) {
//         console.log(error);
//         return res.status(401).json({
//             message: 'Auth failed'
//         });
//     }
// };




// if (result) {
//     const token = jwt.sign(
//         {
//             email: user.email,
//             userId: user._id
//         },
//         process.env.JWT_KEY,
//         {
//             expiresIn: "1h"
//         }
//     );
//     return res.status(200).json({
//         message: 'Auth successful - Student',
//         token: token
//     });
// } else {
//     return res.status(404).json({
//         message: 'Auth failed - Student'
//     });
// }



const auth = (async (req,res,next)=>{
    try {
        const token = req.headers['authorization'];
        req.userData = jwt.verify(token, process.env.JWT_KEY);
        
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
})