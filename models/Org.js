const mongoose = require('mongoose')
const schema = mongoose.schema

const OrgLoginSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true
    },
    orgName : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    location : {
        type: String,
        required: true
    },
    
}, { timestamps: true})

const Org = mongoose.model('Org', OrgLoginSchema)
module.exports = Org