const mongoose = require('mongoose');

const fileSchema = mongoose.Schema(
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

module.exports =  mongoose.model('File', fileSchema);