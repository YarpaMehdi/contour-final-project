const mongoose = require('mongoose')


const db = "mongodb://127.0.0.1/googleauthentication"
mongoose.set('strictQuery', false);
mongoose.connect(db)
.then(()=>{
    console.log('db connected') 
})
.catch((err)=>{
    console.log(err)
})