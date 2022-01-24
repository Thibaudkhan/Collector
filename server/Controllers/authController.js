const authSystem = require('../System/auth2System');
const jwt = require('jsonwebtoken');
const authModel =require('../Models/authModel');

let authController = {}

authController.signIn = async (req, res) => {
    const {password, email} = req

    if (await authModel.getByEmail(email)) {
            let token = jwt.sign({
                data: req
            }, 'secret', {expiresIn: '1h'});
            //res.cookie('jwt', token)
            res.send(`${token}`)
    } else {
        res.send('Invalid login credentials')
    }
}

authController.createAccount = async (req,res) => {
    await authModel.insert(req.body.email, req.body.password, req.body.name, req.body.lastname);
    console.log("user mail ");
    res.send("user mail : Success ");
}

authController.select = async (req,res) => {
    let user = await authModel.one(req.query.id);
    res.send("user mail :"+user.email);
}

authController.selectUsers = async (req,res) => {
    let users = await authModel.getAllUsers();
    res.send(users);
}

module.exports = authController
