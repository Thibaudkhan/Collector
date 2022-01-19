
const express = require('express');
const router = express.Router();
const routeController = require('../Controllers/authController');

const passport = require('passport')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const DATA = [
    {email:"test@gmail.com", password:"1234"},
    {email:"test1@gmail.com", password:"1234"}
]

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(passport.initialize());

// Add this line below
const jwt = require('jsonwebtoken')
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}


router.get("/test",(req,res,next)=>{
    console.log("cooucoucuoc");
    let dataUserTrue = {email:"test@gmail.com", password:"1234"}
    let dataUserFalse = {email:"lol@gmail.com", password:"1234"}
    try{
        routeController.FindOrCreate();
    }catch (err){
        res.status(421).send(err.message)
    }
    //console.log(res.json(result))
})



opts.jwtFromRequest = function(req) {
    var token = null;
    if (req && req.cookies)
    {
        token = req.cookies['jwt'];
    }
    return token;
};
opts.secretOrKey = 'secret';


passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log("JWT BASED  VALIDATION GETTING CALLED")
    console.log("JWT", jwt_payload)
    //console.log(done())
    if (CheckUser(jwt_payload.data)) {
        return done(null, jwt_payload.data)
    } else {
        // user account doesnt exists in the DATA
        return done(null, false);
    }
}));



passport.serializeUser(function(user, cb) {
    console.log('I should have jack ')
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    console.log('I wont have jack shit')
    cb(null, obj);
});

app.get('/', (req, res)=>{
    //res.sendFile('../pages/home.html', {root: __dirname+'/public'})
})

app.get('/login', (req, res)=>{
    console.log("couc")
    //res.sendFile('../pages/login.html', {root: __dirname+'/public'})
})

app.get('/auth/email', (req, res)=>{
    //res.sendFile('../pages/login_form.html',  {root: __dirname+'/public'})
})


app.post('/auth/email', (req, res)=>{

    //const {email,password}= req.body;
    //console.log("email"+email)
    if(CheckUser(req.body))
    {
        let token =    jwt.sign({
            data: req.body
        }, 'secret', { expiresIn: '1h' });
        res.cookie('jwt', token)
        console.log(token)
        res.send(`Log in success token : ${token} `)

    }else{
        res.send('Invalid login credentials')
    }
})

app.get('/profile', passport.authenticate('jwt', { session: false }) ,(req,res)=>{
    res.send(`THIS IS UR PROFILE MAAANNNN ${req.user.email}`)
})


function FindOrCreate(user){
    if(CheckUser(user)){  // if user exists then return user
        return user
    }else{
        DATA.push(user) // else create a new user
    }
}
function CheckUser(input){
    //console.log(DATA)
    //console.log(input)

    for (var i in DATA) {
        if(input.email==DATA[i].email && (input.password==DATA[i].password))
        {
            console.log('User found in DATA')
            return true
        }
        else{
            null
        }
    }
    return false
}


module.exports = app
