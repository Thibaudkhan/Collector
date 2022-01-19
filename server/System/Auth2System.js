const passport = require('passport')


let JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
let opts = {}
const DATA = [
    {email:"test@gmail.com", password:"1234"},
    {email:"test@gmail.com55", password:"1234"}
]


opts.jwtFromRequest = function(req) {
    let token = null;

    if (req && req.cookies)
        token = req.cookies['jwt'];

    return token;
};
opts.secretOrKey = 'secret';


passport.use(new JwtStrategy(opts, function(jwt_payload, done) {

    if (passport.checkUser(jwt_payload.data.email,jwt_payload.data.password)) {
        return done(null, jwt_payload.data)
    } else {
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


passport.checkUser =(email,password)=>{
    for (let i in DATA) {
        if(email==DATA[i].email && (password==DATA[i].password))
            return true
        else
            null
    }
    return false
}


module.exports = passport
