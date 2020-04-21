const express = require('express');
const Users = require('./users-model.js'); 

const router = express.Router();
const authenticationMiddle = require('../auth/authentication-middleware.js');

router.get('/', authenticationMiddle,(req,res)=>{
    Users.find()
    .then(users =>{
        res.status(200).json(users)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message: "something went wrong"});
    })
})

module.exports = router;