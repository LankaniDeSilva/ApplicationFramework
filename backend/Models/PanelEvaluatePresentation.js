const mongoose = require('mongoose');

const EvaluatePresentation = new mongoose.Schema({

    groupid:{
        type:String,
        required:true
    },
    studentid:{
        type:String,
        required:true
    },
    mark1:{
        type:Number,
        required:true
    },
    mark2:{
        type:Number,
        required:true
    },
    mark3:{
        type:Number,
        required:true
    }
    
});

module.exports = mongoose.model('evaluatepresentation', EvaluatePresentation)