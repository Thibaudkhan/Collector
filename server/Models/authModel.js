const connection = require('../db');

let AuthModel = {}

AuthModel.getByEmail = (email)=> {
    return new Promise((resolve,reject)=>{
        connection.query('Select * From user Where email = ? Limit 1',email,(err,result)=>{
            if(err){
                return reject(err)
            }
            console.log(resolve(result[0]))
            return resolve(result[0])
        })
    })
}

AuthModel.getAllUsers = ()=> {
    return new Promise((resolve,reject)=>{
        connection.query('Select * From user',(err,result)=>{
            if(err){
                return reject(err)
            }
            return resolve(result)
        })
    })
}

AuthModel.insert = (email,password,firstname,lastname)=> {
    return new Promise((resolve,reject)=>{
        connection.query('Insert INTO user (email, password,firstname,lastname) Values(?,?,?,?) ',[email,password,firstname,lastname],(err,result)=>{
            if(err){
                return reject(err)
            }
            return resolve(result[0])
        })
    })
}

AuthModel.one = (id)=> {
    return new Promise((resolve,reject)=>{
        connection.query('Select * From user Where id = ?',[id],(err,result)=>{
            if(err){
                return reject(err)
            }
            console.log(resolve(result[0]))
            return resolve(result[0])
        })
    })
}

module.exports =  AuthModel
