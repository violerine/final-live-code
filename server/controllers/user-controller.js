const User = require ('../models/user')
const bcrypt=require("bcrypt")
const jwt = require ("jsonwebtoken")

module.exports = {
    register:(req,res,next)=>{
        bcrypt.hash(req.body.password,10)
        .then(hash=>{
            let newUser = new User({
                name : req.body.name,
                username : req.body.username,
                password : hash
            })
            newUser.save((err,item)=>{
                if(err) res.status(500).send(error)
                else{
                    return res.json(item)
                }
            })
        })
        .catch(error=>{
            res.send(err)
        })
    },
    login:(req,res,next)=>{
        User.findOne({username:req.body.username},(err,result)=>{
            if(err)res.status(500).json(err)
            else if(!result){
                res.status(404).json({message : "User not found"})
            }
            else{
                console.log("result==>",result)
                 bcrypt.compare(req.body.password,result.password)
                .then(psw=>{
                    if(psw){
                        const payload={
                            username : result.username,
                            name:result.name,
                            _id:result._id
                        }
                        const token = jwt.sign(payload,"secretkey")
                        res.json({id: result._id, token:token, name:result.name})
                    }else{
                        res.send('incorrect password')
                    }
                    
                })
            }
        })
    }
}