const express = require("express");
const Student = require("../Models/Student");

const srouter = express.Router();

srouter.post("/Student/save", (req, res) => {
  let newStudent = new Student(req.body);

  newStudent.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Student saved successfully",
    });
  });
});

srouter.get("/student", (req,res)=>{
    Student.find().exec((err,Student) =>{
      if(err){
        return res.status(400).json({
          error:err
      });
    }
    return res.status(200).json({
      success:true,
      existingStudents:Student
    });
  });
});
//delete

srouter.delete('/student/delete/:id',(req,res)=>{
  Student.findByIdAndRemove(req.params.id).exec((err,deletedStudent) =>{

      if(err) return res.status(400).json({
          message:"Delete unsuccessful",err
      });
      return res.json({
          message:"Delete Successfull",deletedStudent
      });
  });
});

srouter.route("/student/update/:id").put(async (req, res)=> {
  let studentId = req.params.id;

  const {itNumber, name, email, phoneNumber, password} = req.body;

  const updatestudent = {
    itNumber,
    name,
    email,
    phoneNumber,
    password
  }

  const update = await Student.findByIdAndUpdate(studentId, updatestudent).then(()=>{
      res.status(200).send({status: "Student Updated"})
  }).catch((err)=>{
      console.log(err);
      res.status(500).send({status: "Error with Updating data", error: err.message});
  })  
})

srouter.put('/studentupdate/:id',(req,res)=>{
  Student.findByIdAndUpdate(
      req.params.id,
      {
          $set:req.body
      },
      (err,post)=>{
          if(err){
              return res.status(400).json({error:err});
          }
          return res.status(200).json({
              success:"Update Successfully"
          });
      }
  );
});

srouter.get("/student/:id",(req,res) =>{
  let studentId = req.params.id;

  Mark.findById(studentId,(err,post)=>{
      if(err){
          return res.status(400).json({success:false, err});
      }
      return res.status(200).json({
          success:true,
          student
      });
  });
});





module.exports = srouter;
