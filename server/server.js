const express = require('express')
require('./db/conn')
const cors = require('cors')
const app = express()
const authRoutes = require('./routes/user')
app.use(cors())
app.use(express.json())

app.use(authRoutes)


app.listen(8000,() =>{
    console.log('api running on port 8000')
})