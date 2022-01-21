const authSystem = require('../System/Auth2System');
const jwt = require('jsonwebtoken')
const authModel =require('../Models/authModel')

let authController = {}

authController.signIn = async (req, res) => {
    const {email, password} = req


    if (await authModel.getByEmail(email)) {
        let token = jwt.sign({
            data: req
        }, 'secret', {expiresIn: '1h'});
        res.cookie('jwt', token)
        res.send(`Log in success token : ${token} `)

    } else {
        res.send('Invalid login credentials')
    }

}

authController.createAccount = async (req,res) => {
    await authModel.insert("mika@gmail.com5", "123456", "testName", "testLast")

    res.send("user mail : Succes")
}

authController.select = async (req,res) => {
    let user = await authModel.one(8)
    res.send("user mail :"+user.email)

}

module.exports = authController
