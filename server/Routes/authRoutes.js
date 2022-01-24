
const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController');
const authSystem = require('../System/auth2System');

const cookieParser = require('cookie-parser')

router.use(cookieParser())
router.use(authSystem.initialize());


router.get('/login', (req, res)=>{
    //res.sendFile('../pages/login.html', {root: __dirname+'/public'})
})

router.get('/auth/email', (req, res)=>{
    //res.sendFile('../pages/login_form.html',  {root: __dirname+'/public'})
})


router.post('/auth/email', async (req, res)=>{
    await authController.signIn(req.body,res);

})

router.get('/auth/getMail', async (req, res,next)=>{
    await authController.select(req,res);
})

router.get('/auth/getUsers', async (req, res,next)=>{
    await authController.selectUsers(req,res);
})

router.post('/auth/create', (req, res)=>{
    authController.createAccount(req,res);

})

router.get('/profile', authSystem.authenticate('jwt', { session: false }) ,(req,res)=>{
    res.send(`THIS IS UR PROFILE MAAANNNN ${req.user.email}`)
})



module.exports = router
