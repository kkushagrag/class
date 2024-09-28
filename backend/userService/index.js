const express = require('express')
require('dotenv').config()
const app = express()
app.use(express.json())
const helloRoutes = require('./routes/hello.route')
const userRoutes = require('./routes/user.route')
app.use('/api/v1/', helloRoutes)
app.use('/api/v1/user', userRoutes)

// username, email, password, 
// user registration --> username, email, password (user)
// user details --> bio, name, age, gender, phoneNum, enrollmentNum, 
//department, batch, semester, school (school name, percentage marks, city), 
//city, country, hobby, achievements, profilePic  (userdetails)
// 
app.listen(process.env.PORT, ()=>{
    console.log(`Server started at port ${process.env.PORT}`)
})