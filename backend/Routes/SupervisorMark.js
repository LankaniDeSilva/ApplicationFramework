const express = require("express");
const router = express.Router();

const {
    addMarks, getMarks, updateMarks,getMark, removeMarks
   
   
  } = require("../controller/supervisorMark");
  
  
  router.get("/get-marks", getMarks);
  router.post("/add-marks", addMarks);
  router.put("/update-marks/:id", updateMarks);
  router.get("/mark/:id", getMark);
  router.delete("/mark/:id", removeMarks);
  
  


  
  
  module.exports = router;
  