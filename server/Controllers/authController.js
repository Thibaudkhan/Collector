const authSystem = require('../System/Auth2System');
const jwt = require('jsonwebtoken')

let authController = {}

authController.userConnection = (req,res)=>{
    const {email,password} = req

    if(authSystem.checkUser(email,password))
    {
        let token =    jwt.sign({
            data: req
        }, 'secret', { expiresIn: '1h' });


        res.cookie('jwt', token)
        res.send(`Log in success token : ${token} `)

    }else{
        res.send('Invalid login credentials')
    }

}

module.exports = authController
