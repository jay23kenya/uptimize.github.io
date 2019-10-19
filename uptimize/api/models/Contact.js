const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Create Schema
const ContactSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    questions: {
        type: Array,
        required: false
    }   
})


module.exports =  mongoose.model('Contact', ContactSchema)