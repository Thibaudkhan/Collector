const passport = require('passport')
const authModel = require("../Models/authModel");

let JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
let opts = {}

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
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

passport.checkUser =async (email, password) => {
    if (email == user.email && password == user.password)
        return true
    else
        null
}

module.exports = passport
