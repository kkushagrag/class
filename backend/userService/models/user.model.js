const mongoose = require('../utils/conn').mongoose
const db = require('../utils/conn').db


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        // default: 'password123'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.model('user', userSchema)
module.exports = { User }