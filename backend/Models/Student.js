const mongoose = require('mongoose');
const validator = require('validator');

const StudentSchema = new mongoose.Schema({

    itNumber: {
        type : String,
        required : true,
        trim: true,
        validate: (value) =>{
            if(!value.startsWith('IT')){
                throw new Error("Student ID Number is not start with 'IT'");
            }else if(!validator.isLength(value, 10, 10)){
                throw new Error("Student ID Number not contain 10 characters");
            }
        }
    },

    name: {
        type: String,
        required: true,
        trim: true
    },

    email:{
        type: String,
        required: true,
        validate: (value) =>{
            if(!validator.isEmail(value)){
                throw new Error("Invalid email");
            }
        }
    },

    phoneNumber: {
        type: String,
        required: true,
        validate: (number) =>{
            if(!validator.isMobilePhone(number, 'si-LK')){
                 throw new Error("Invalid Phone Number");
            }
             
         }
    }
    
});

module.exports = mongoose.model('Student', StudentSchema);