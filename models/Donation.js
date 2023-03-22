const mongoose = require('mongoose')
const schema = mongoose.schema

const DonationSchema = new mongoose.Schema({
    AmountOfFood : {
        type: String,
        required: true
    },
    location : {
        type: String,
        required: true
    },
    date : {
        type: String,
        required: true
    },
    phoneNumber : {
        type: String,
        required: true
    },
    date : {
        type: String,
        required: true
    },
}, { timestamps: true})

const Donation = mongoose.model('Donation', DonationSchema)
module.exports = Donation