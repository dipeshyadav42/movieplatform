const express=require('express')
// const cookieSession=require('cookie-session')
const app=express()
require('dotenv').config()
app.use(express.json())
const apiRouter=require('./routers/api')
const mongoose=require('mongoose')
mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)



// app.use(cookieSession({
//     maxage:1000
// }))
app.use(express.static('public'))
app.use('/api',apiRouter)
app.listen(process.env.PORT,()=>{console.log("server is connected on port 5000")})