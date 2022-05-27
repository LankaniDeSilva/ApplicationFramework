const express = require('express');
const Feedback = require("../Models/AdminFeedback");
const router = express.Router();
const multer = require("multer");

router.post("/feedbacksave", (req, res) => {
    const feedback = new Feedback({
        center: req.body.center,
        email: req.body.email,
        date: req.body.date,
        details: req.body.details,
        outcome: req.body.outcome,
       
    });

    feedback
     .save()
     .then(()=> res.json("success"))
     .catch((err) => res.status(400).json(`Error: ${err}`));
});


router.route("/getfeedback").get((req,res)=>{

    Feedback.find().then((Mark)=>{
         res.json(Mark)
    }).catch((err)=>{
         console.log(err)
    })
})

router.route("/deletefeedback/:id").delete(async (req, res) =>{

    let userId = req.params.id;

    await Feedback.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User Delete"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

module.exports = router;