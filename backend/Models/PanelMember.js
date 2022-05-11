const mongoose = require('mongoose');

const PanelSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    panelmember:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Panelmembers', PanelSchema)