const mongoose = require('mongoose');

const EvaluateTopic = new mongoose.Schema({

    groupid:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    comments:{
        type:String,
        required:true
    }
    
    
  
});

module.exports = mongoose.model('evaluatetopic', EvaluateTopic)