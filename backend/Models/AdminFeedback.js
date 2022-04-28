const mongoose = require('mongoose');

const Feedback = new mongoose.Schema({

    center:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    outcome:{
        type:String,
        required:true
      
    }
  
});

module.exports = mongoose.model('Feedback', Feedback)