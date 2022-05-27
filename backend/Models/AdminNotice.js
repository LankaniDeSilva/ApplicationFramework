const mongoose = require('mongoose');

const NoticeSchema = new mongoose.Schema({

    topic:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    pdf:{
        type:String,
        require:true
    }
  
});

module.exports = mongoose.model('Notice', NoticeSchema)