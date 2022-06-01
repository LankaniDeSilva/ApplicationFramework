const mongoose = require('mongoose');

const PanelSchema = new mongoose.Schema({

    idNumber: {
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
    },

    password: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('Panel', PanelSchema);