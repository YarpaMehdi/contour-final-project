const express = require('express')
const User = require('../models/schema')
const {OAuth2Client}= require('google-auth-library')

const router = express.Router()
const clientId ="1024333231726-13hoct6vpfb693p7c7s0ac0uvtkc4hqr.apps.googleusercontent.com";
const authClient = new OAuth2Client(clientId)
// console.log(authClient)
router.post('/',(req,res)=>{
   const {idToken} = req.body
   if(idToken){
    authClient.verifyIdToken({idToken,audience:clientId})
    .then((response)=>{
        // console.log(response)
        const {email_verified,email,name,picture} = response.payload
        if(email_verified){
            User.findOne({email}).exec((err,user)=>{
                if(user){
                    return res.json(user)
                }
                else{
                    let password = email + clientId
                    let newUser = new User({email,name,picture,password})
                    newUser.save((err,data)=>{
                        if(err){
                            return res.status.json({error:'mongobd Error'})
                        }
                        res.json(data)
                    })
                }
            })
        }
        
    })
    .catch((err)=>{
        console.log(err)
    })
   }
//    console.log(idToken)
})

module.exports = router;