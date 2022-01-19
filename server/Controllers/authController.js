const express = require('express')
const app = express()

// Config
const config = {secretOrKey:"mysecret"}

let Auth = {}

// Middlewares


var opts = {}
opts.jwtFromRequest = function(req) { // tell passport to read JWT from cookies
    var token = null;
    if (req && req.cookies){
        token = req.cookies['jwt']
    }
    return token
}
opts.secretOrKey = config.secretOrKey

// main authentication, our app will rely on it




// Utility functions for checking if a user exists in the DATA array - Note: DATA array is flushed after every restart of server
Auth.FindOrCreate = (user)=>{
    if(CheckUser(user)){  // if user exists then return user
        return user
    }else{
        DATA.push(user) // else create a new user
        console.table(DATA)
    }
}
const  CheckUser = (input)=>{
    console.log("hello you ");

    for (var i in DATA) {
        if(input.email==DATA[i].email && (input.password==DATA[i].password || DATA[i].provider==input.provider)){
            console.log("hello you "+input.email);
            return true // found
        }
        else
            null //console.log('no match')
    }
    return false // not found
}



module.exports =  Auth