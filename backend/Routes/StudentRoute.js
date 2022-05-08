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

// srouter.route("/student/update/:id").put(async (req, res)=> {
//   let studentId = req.params.id;

//   const {itNumber, name, email, phoneNumber, password} = req.body;

//   const updatestudent = {
//     itNumber,
//     name,
//     email,
//     phoneNumber,
//     password
//   }

//   const update = await Student.findByIdAndUpdate(studentId, updatestudent).then(()=>{
//       res.status(200).send({status: "Student Updated"})
//   }).catch((err)=>{
//       console.log(err);
//       res.status(500).send({status: "Error with Updating data", error: err.message});
//   })  
// })



//Get Single Student
srouter.route("/edit-student/:id").get((req, res) => {
  Student.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//update Student
srouter.route("/update-student/:id").put((req, res, next) => {
    Student.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        }else {
        res.json(data);
        console.log("Student updated successfully !");
      }
    }
  );
});


module.exports = srouter;
