const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require("../secrets.js");

const Users = require('../users/users-model.js');
const secret = process.env.JWT_SECRET;
module.exports = (req, res, next) => {
    
    const token = req.headers.authorization;

    if(token){
        jwt.verify(token,secrets.jwtSecret, (err,decodedToken) => {
        
            if(err){
                res.status(401).json({message: 'nono'})
            } else {
                req.decodedToken = decodedToken;

            next()
            }
        });
    } else {
        res.status(401).json({ message: 'Invalid token' });
    }
};
