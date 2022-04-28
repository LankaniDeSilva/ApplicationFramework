const mongoose = require('mongoose');

const Mark = new mongoose.Schema({

    groupid:{
        type:String,
        required:true
    },
    marka:{
        type:Number,
        required:true
    },
    markb:{
        type:Number,
        required:true
    },
    markc:{
        type:Number,
        required:true
    },
    markd:{
        type:Number,
        required:true
      
    }
  
});

module.exports = mongoose.model('mark', Mark)