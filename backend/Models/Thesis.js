const mongoose = require('mongoose');

const thesisScheme = mongoose.Schema(
  {
    groupid:{
      type:String,
      required:true
  },
  files:{
      type:String,
      required:true
  }
  }
);

module.exports =  mongoose.model('thesis', thesisScheme);