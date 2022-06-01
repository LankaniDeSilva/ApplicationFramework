const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({

    itNumber: {
        type : String,
        required : true
    },

    name: {
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    phoneNumber: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('Student', StudentSchema);