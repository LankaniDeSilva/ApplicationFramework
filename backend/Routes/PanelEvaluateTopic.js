const express = require('express');
const router = express.Router();
const multer = require("multer");
const Topic = require('../Models/PanelEvaluateTopic');


router.post("/evaluatetopicsave", (req, res) => {
    const topic = new Topic({
        groupid: req.body.groupid,
        topic: req.body.topic,
        comments: req.body.comments,
        
        
       
    });

    topic
     .save()
     .then(()=> res.json("success"))
     .catch((err) => res.status(400).json(`Error: ${err}`));
});

//get 

router.get('/getevaluatetopic', (req,res) =>{
    Topic.find().exec((err,Topic)=>{
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


router.route("/getevaluatetopic/:id").get(async (req,res) => {
    let userId = req.params.id;
    const user = await Topic.findOne(userId)
    .then(() => {
        res.status(200).send({status: "User fetched", user: user})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

//update post
router.get("/allTopicEval/:id",(req,res) =>{
    let postId = req.params.id;

    Topic.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});
router.put('/evaluatetopicupdate/:id',(req,res)=>{
    Topic.findByIdAndUpdate(
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


router.route("/deletevaluatetopic/:id").delete(async (req, res) =>{

    let topicId = req.params.id;

    await Topic.findByIdAndDelete(topicId).then(()=>{
        res.status(200).send({status: "Evaluate Delete"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete evaluate", error: err.message});
    })
})

module.exports = router;