const mongoose = require('mongoose');
const domPurifier = require('dompurify');
const {JSDOM} = require('jsdom');
const htmlPurify = domPurifier(new JSDOM().window);

//const stripHtml = require('string-strip-html');


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

//NoticeSchema.pre('validate', function (next){
  //  if(this.description){
   //     this.description = htmlPurify.sanitize(this.description);
   //     this.snippet = stripHtml(this.description.substring(0, 200)).result;
   // }
  //  next();
//});

module.exports = mongoose.model('Notice', NoticeSchema)