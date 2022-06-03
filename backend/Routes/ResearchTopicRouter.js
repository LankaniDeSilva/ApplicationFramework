const express = require('express');

const ResearchTopic = require('../Models/ResearchTopic');

const trouter = express.Router();


trouter.post("/ResearchTopic/save", (req, res) => {
    let newTopic = new ResearchTopic(req.body);
  
    newTopic.save((err) => {
      if (err) {
        return res.status(400).json({
          error: err.message,
        });
      }
      return res.status(200).json({
        success: "Research Topic saved successfully",
      });
    });
  });

  //akeel
  trouter.get('/ResearchTopic', (req,res) =>{
    ResearchTopic.find().exec((err,Topic)=>{
      if(err){
          return res.status(400).json({
              error:err
          });
      }
      return res.status(200).json({
          success:true,
          existingPosts:Topic
      });
  });
}); 
module.exports = trouter;