const express = require('express');
const router = express.Router();
const multer = require("multer");
const Topic = require('../Models/PanelEvaluateTopic');



/*router.post("/evaluatetopicsave", (req,res) =>{

    let newEvaluateTopic = new EvaluateTopic(req.body);

    newEvaluateTopic.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Evaluate Topic saved successfully"
        });
    });
}); */

router.post("/evaluatetopicsave", (req, res) => {
    const topic = new Topic({
        groupid: req.body.id,
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
            existingPosts:PanelEvaluateTopic
        });
    });
}); 

/*router.route("/getevaluatetopic").get((req,res)=>{

    EvaluateTopic.find().then((EvaluateTopic)=>{
         res.json(EvaluateTopic)
    }).catch((err)=>{
         console.log(err)
    })
})*/


router.route("/getevaluatetopic/:id").get(async (req,res) => {
    let userId = req.params.id;
    const user = await EvaluateTopic.findOne(userId)
    .then(() => {
        res.status(200).send({status: "User fetched", user: user})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get details", error: err.message});
    })
})

router.route("/evaluatetopic/update/:id").put(async (req, res)=> {
    let evalId = req.params.id;

    const {groupid, topic, comments} = req.body;

    const updateevaluatetopic = {
        groupid,
        topic,
        comments
    }

    const update = await EvaluateTopic.findByIdAndUpdate(evalId, updateevaluatetopic).then(()=>{
        res.status(200).send({status: "Evaluate Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with Updating data", error: err.message});
    })  
})

router.route("/deleteevaluatetopic/:id").delete(async (req, res) =>{

    let topicId = req.params.id;

    await EvaluateTopic.findByIdAndDelete(topicId).then(()=>{
        res.status(200).send({status: "Evaluate Delete"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete evaluate", error: err.message});
    })
})

module.exports = router;