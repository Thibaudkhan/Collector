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
    let {email,password,name,lastname} = req.body
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    try{
        if (email === "" || password === "" || name === "" || lastname === "" ){
            res.sendStatus(400);
            return;
        }
        if (!email.match(regexEmail)) {
            res.sendStatus(400);
            return;
        }

        // test http params
        if(await authModel.insert(email,password,name,lastname)){
            res.sendStatus(200);
            return;
        }
    }catch (e){
        res.sendStatus(400);

    }


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
